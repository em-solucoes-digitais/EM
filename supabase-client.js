// Importar Supabase (será carregado via CDN)
// A biblioteca será carregada dinamicamente para não quebrar se Supabase não estiver disponível

const SUPABASE_URL = 'VITE_SUPABASE_URL'; // Será substituído em build
const SUPABASE_KEY = 'VITE_SUPABASE_ANON_KEY'; // Será substituído em build

let supabase = null;

async function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_KEY || 
      SUPABASE_URL.includes('VITE_') || SUPABASE_KEY.includes('VITE_')) {
    console.warn('⚠️ Supabase não configurado. O formulário enviará apenas via WhatsApp.');
    return false;
  }

  try {
    // Carregar biblioteca do Supabase via CDN
    if (!window.supabase) {
      await loadSupabaseLib();
    }
    
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('✅ Supabase conectado com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar Supabase:', error);
    return false;
  }
}

async function loadSupabaseLib() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function saveContactMessage(formData) {
  // Se Supabase não está configurado, retorna sucesso (não bloqueia o envio)
  if (!supabase) {
    console.log('Supabase não disponível, mensagem será enviada apenas via WhatsApp');
    return { success: true, local: true };
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Erro ao salvar mensagem:', error);
      return { success: false, error: error.message };
    }

    console.log('✅ Mensagem salva no Supabase:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Erro inesperado:', error);
    return { success: false, error: error.message };
  }
}

// Inicializar Supabase quando a página carregar
window.addEventListener('DOMContentLoaded', initSupabase);
