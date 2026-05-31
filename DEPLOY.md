# EM Soluções Digitais - Guia de Deploy

## 🚀 Preparação para Deploy (Vercel + Supabase)

Este projeto está pronto para fazer deploy no Vercel. O formulário de contato pode salvar dados no Supabase e enviar para WhatsApp simultaneamente.

---

## 📋 Pré-requisitos

1. **Git** instalado
2. Conta no **Vercel** (https://vercel.com)
3. Conta no **Supabase** (https://supabase.com) - *opcional*
4. Repositório no **GitHub** para sincronizar com Vercel

---

## 🔧 Passo 1: Configurar Supabase (Opcional)

Se deseja salvar as mensagens do formulário em um banco de dados:

### 1.1 Criar projeto no Supabase

1. Acesse https://supabase.com
2. Clique em "New Project"
3. Preencha os dados:
   - **Name**: "em-solucoes"
   - **Database Password**: Salve em local seguro
   - **Region**: Escolha a mais próxima (ex: South America - São Paulo)
4. Aguarde a criação (2-5 minutos)

### 1.2 Criar tabela de mensagens

1. No painel do Supabase, acesse **SQL Editor**
2. Clique em "New Query"
3. Cole o SQL abaixo:

```sql
-- Criar tabela de mensagens de contato
CREATE TABLE contact_messages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para melhor performance
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Habilitar RLS (Row Level Security)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Criar política para INSERT (permitir inserts públicos)
CREATE POLICY "Allow public insert"
ON contact_messages
FOR INSERT
TO public
WITH CHECK (true);

-- Criar política para SELECT (apenas para verificação)
CREATE POLICY "Allow public select"
ON contact_messages
FOR SELECT
TO public
USING (true);
```

4. Clique em "Run"

### 1.3 Copiar chaves de acesso

1. Acesse **Settings → API**
2. Copie:
   - `Project URL`
   - `anon public` (em Project API keys)

---

## 🌐 Passo 2: Configurar variáveis no Vercel

### 2.1 Preparar arquivo .env.local

Abra o arquivo `.env.local` na raiz do projeto e preencha:

```env
VITE_SUPABASE_URL=https://seu-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_anon_aqui
```

**⚠️ IMPORTANTE**: Não faça commit do `.env.local`! Ele já está no `.gitignore`.

### 2.2 Deploy no Vercel

#### Opção A: Via GitHub (Recomendado)

1. **Fazer push do código para GitHub**:
   ```bash
   cd c:\Users\Eduardo\Desktop\EM
   git init
   git add .
   git commit -m "Preparar para deploy"
   git remote add origin https://github.com/seu-usuario/em-solucoes.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar no Vercel**:
   - Acesse https://vercel.com/new
   - Selecione o repositório "em-solucoes"
   - Clique em "Deploy"

3. **Adicionar variáveis de ambiente**:
   - Em **Settings → Environment Variables**, clique em "Add"
   - Adicione:
     - `VITE_SUPABASE_URL` = seu_url_do_supabase
     - `VITE_SUPABASE_ANON_KEY` = sua_chave_anon

#### Opção B: Deploy direto via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Siga as instruções e quando pedido, adicione as variáveis de ambiente.

---

## 📦 Passo 3: Instalar dependências (Opcional)

Se quiser testar localmente antes de fazer deploy:

```bash
cd c:\Users\Eduardo\Desktop\EM
npm install
npm run dev
```

Acesse http://localhost:3000 no navegador.

---

## ✅ Verificar se está funcionando

Após o deploy no Vercel:

1. **Teste o site** em seu domínio do Vercel
2. **Preencha o formulário** de contato
3. **Verifique**:
   - Se a mensagem foi enviada para o WhatsApp
   - Se apareceu no Supabase (se configurado)

---

## 🔗 Links úteis

- **Seu site no Vercel**: https://seu-projeto.vercel.app (após deploy)
- **Supabase Dashboard**: https://app.supabase.com
- **Documentação Vercel**: https://vercel.com/docs
- **Documentação Supabase**: https://supabase.com/docs

---

## ❓ Dúvidas frequentes

### Meu site não está funcionando após o deploy

- Verifique as **Build Logs** no Vercel
- Verifique se as variáveis de ambiente foram adicionadas

### As mensagens não estão sendo salvas

- Verifique se `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` estão corretos
- Abra o Console do navegador (F12) e procure por mensagens de erro
- Verifique se a tabela `contact_messages` existe no Supabase

### Posso usar o site sem Supabase?

Sim! O site funciona perfeitamente apenas com WhatsApp. O Supabase é opcional.

---

## 📝 Próximos passos

1. ✅ Preparar ambiente (este arquivo)
2. → Criar conta no Supabase (opcional)
3. → Fazer push para GitHub
4. → Deploy no Vercel
5. → Configurar domínio customizado

**Quando tiver as informações do Supabase e GitHub prontas, me avise para ajudar com os próximos passos!**
