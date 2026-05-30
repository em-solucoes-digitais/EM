// ===== SERVICE MODALS WITH ANIMATIONS =====

// Dados dos serviços com suas animações
const servicesData = {
  'templates': {
    icon: 'fas fa-layer-group',
    title: 'Sites com Templates',
    description: 'Templates profissionais prontos para uso, com entrega rápida e visual moderno',
    animation: `
      <div class="template-animation">
        <div class="template-card" data-template="Loja Virtual">
          <div class="mini-icon"></div>
          <div class="mini-line"></div>
          <div class="mini-line"></div>
          <div class="template-label">Loja Virtual</div>
          <div class="template-status">Clique para editar</div>
        </div>
        <div class="template-card" data-template="Serviços Locais">
          <div class="mini-icon"></div>
          <div class="mini-line"></div>
          <div class="mini-line"></div>
          <div class="template-label">Serviços Locais</div>
          <div class="template-status">Clique para editar</div>
        </div>
        <div class="template-card" data-template="Clínica ou Estúdio">
          <div class="mini-icon"></div>
          <div class="mini-line"></div>
          <div class="mini-line"></div>
          <div class="template-label">Clínica ou Estúdio</div>
          <div class="template-status">Clique para editar</div>
        </div>
      </div>
    `,
    features: [
      'Templates profissionais prontos',
      'Entrega em até 5 dias',
      'Totalmente responsivo',
      'Fácil personalização',
      'Otimizado para SEO',
      'Suporte técnico incluído'
    ]
  },
  'personalizados': {
    icon: 'fas fa-paint-brush',
    title: 'Sites Personalizados',
    description: 'Desenvolvemos do zero com identidade única para sua marca',
    animation: `
      <div class="custom-animation">
        <div class="browser-mockup">
          <div class="browser-header">
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
            <div class="browser-dot"></div>
          </div>
          <div class="browser-content">
            <div class="paint-brush"></div>
            <div class="design-elements">
              <div class="design-bar"></div>
              <div class="design-bar"></div>
              <div class="design-bar"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    features: [
      'Design 100% exclusivo',
      'Identidade visual única',
      'Funcionalidades sob medida',
      'Experiência personalizada',
      'Código limpo e otimizado',
      'Escalável e moderno'
    ]
  },
  'landing': {
    icon: 'fas fa-rocket',
    title: 'Landing Pages',
    description: 'Páginas de alta conversão para campanhas e lançamentos',
    animation: `
      <div class="landing-animation">
        <div class="rocket-container">
          <div class="rocket">🚀</div>
        </div>
        <div class="conversion-stats">
          <div class="stat-item">
            <div class="stat-number">+300%</div>
            <div>Conversão</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">+500</div>
            <div>Leads</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24h</div>
            <div>Entrega</div>
          </div>
        </div>
      </div>
    `,
    features: [
      'Foco em conversão',
      'Design persuasivo',
      'Formulários otimizados',
      'Integração com ferramentas',
      'A/B Testing ready',
      'Analytics integrado'
    ]
  },
  'automacoes': {
    icon: 'fas fa-cogs',
    title: 'Automações',
    description: 'Fluxos reais que reduzem trabalho manual e conectam vendas, atendimento e rotina administrativa',
    animation: `
      <div class="automation-animation">
        <div class="automation-flow">
          <div class="flow-box">
            <i class="fas fa-tasks" style="font-size: 2rem; color: var(--primary);"></i>
            <div style="margin-top: 10px; font-size: 0.9rem;">Tarefa Manual</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-box">
            <i class="fas fa-cogs gear-icon"></i>
            <div style="margin-top: 10px; font-size: 0.9rem;">Automação</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-box">
            <i class="fas fa-check-circle" style="font-size: 2rem; color: #22c55e;"></i>
            <div style="margin-top: 10px; font-size: 0.9rem;">Resultado</div>
          </div>
        </div>
      </div>
    `,
    features: [
      'Economia de tempo',
      'Redução de erros',
      'Processos escaláveis',
      'Integração com sistemas',
      'Relatórios automáticos',
      'ROI comprovado'
    ]
  },
  'integracoes': {
    icon: 'fas fa-plug',
    title: 'Integrações',
    description: 'Conectamos sistemas, APIs e plataformas para seu negócio funcionar integrado',
    animation: `
      <div class="integration-animation">
        <div class="integration-center">
          <i class="fas fa-project-diagram"></i>
        </div>
        <div class="integration-node">
          <i class="fab fa-whatsapp"></i>
        </div>
        <div class="integration-node">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="integration-node">
          <i class="fas fa-database"></i>
        </div>
        <div class="integration-node">
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    `,
    features: [
      'APIs REST e GraphQL',
      'Webhooks personalizados',
      'Sincronização em tempo real',
      'Múltiplas plataformas',
      'Segurança garantida',
      'Documentação completa'
    ]
  },
  'backend': {
    icon: 'fas fa-server',
    title: 'Backend Spring Boot',
    description: 'APIs em Java e Spring Boot, com banco de dados, segurança e integrações que deixam seu sistema pronto para crescer',
    animation: `
      <div class="backend-animation">
        <div class="server-stack">
          <div class="server-layer">
            <i class="fas fa-server server-icon"></i>
            <div class="server-info">
              <div class="server-name">API REST</div>
              <div class="server-status">
                <span class="status-indicator"></span>Online
              </div>
            </div>
          </div>
          <div class="server-layer">
            <i class="fas fa-database server-icon"></i>
            <div class="server-info">
              <div class="server-name">Database</div>
              <div class="server-status">
                <span class="status-indicator"></span>Conectado
              </div>
            </div>
          </div>
          <div class="server-layer">
            <i class="fas fa-shield-alt server-icon"></i>
            <div class="server-info">
              <div class="server-name">Security</div>
              <div class="server-status">
                <span class="status-indicator"></span>Protegido
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    features: [
      'Java Spring Boot',
      'Arquitetura escalável',
      'Microserviços',
      'Segurança avançada',
      'Testes automatizados',
      'Deploy em cloud'
    ]
  },
  'chatbot': {
    icon: 'fas fa-robot',
    title: 'Chatbots Empresariais',
    description: 'Atendimento automatizado 24h para WhatsApp, site e redes sociais',
    animation: `
      <div class="chatbot-animation">
        <div class="chat-window">
          <div class="chat-header">
            <div class="chat-avatar">
              <i class="fas fa-robot"></i>
            </div>
            <div>
              <div style="font-weight: 700;">Assistente Virtual</div>
              <div style="font-size: 0.8rem; opacity: 0.9;">Online</div>
            </div>
          </div>
          <div class="chat-messages">
            <div class="chat-bubble bot">
              Olá! Como posso ajudar?
            </div>
            <div class="chat-bubble user">
              Quero saber sobre os serviços
            </div>
            <div class="chat-bubble bot">
              Temos várias opções! Vou te mostrar...
            </div>
            <div class="typing-indicator">
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    features: [
      'Atendimento 24/7',
      'WhatsApp Business',
      'Respostas inteligentes',
      'Integração com CRM',
      'Múltiplos idiomas',
      'Analytics detalhado'
    ]
  },
  'manutencao': {
    icon: 'fas fa-tools',
    title: 'Manutenção Mensal',
    description: 'Atualizações, segurança, hospedagem e suporte técnico contínuo',
    animation: `
      <div class="maintenance-animation">
        <div class="maintenance-grid">
          <div class="maintenance-card">
            <div class="maintenance-icon">
              <i class="fas fa-sync-alt"></i>
            </div>
            <div class="maintenance-label">Atualizações</div>
          </div>
          <div class="maintenance-card">
            <div class="maintenance-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div class="maintenance-label">Segurança</div>
          </div>
          <div class="maintenance-card">
            <div class="maintenance-icon">
              <i class="fas fa-cloud"></i>
            </div>
            <div class="maintenance-label">Hospedagem</div>
          </div>
          <div class="maintenance-card">
            <div class="maintenance-icon">
              <i class="fas fa-headset"></i>
            </div>
            <div class="maintenance-label">Suporte</div>
          </div>
        </div>
      </div>
    `,
    features: [
      'Backups diários',
      'Atualizações de segurança',
      'Monitoramento 24/7',
      'Suporte prioritário',
      'Hospedagem incluída',
      'Relatórios mensais'
    ]
  }
};

// Criar modal dinamicamente
function createModal(serviceKey) {
  const service = servicesData[serviceKey];
  if (!service) return;

  // Remover modal existente se houver
  const existingModal = document.querySelector('.service-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Criar novo modal
  const modal = document.createElement('div');
  modal.className = 'service-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-close">
        <i class="fas fa-times"></i>
      </div>
      
      <div class="modal-header">
        <div class="modal-icon">
          <i class="${service.icon}"></i>
        </div>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
      </div>
      
      <div class="modal-body">
        <div class="animation-preview">
          ${service.animation}
        </div>
        
        <h3 style="margin-bottom: 20px; font-size: 1.3rem;">O que está incluído:</h3>
        <ul class="features-list">
          ${service.features.map(feature => `
            <li>
              <i class="fas fa-check-circle"></i>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
        
        <div class="modal-cta">
          <a href="https://wa.me/5500000000000?text=Quero%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}" 
             target="_blank" 
             class="btn btn-primary">
            <i class="fab fa-whatsapp"></i> Solicitar Orçamento
          </a>
          <button class="btn btn-outline modal-close-btn">
            Fechar
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Ativar modal com delay para animação
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);

  // Clique de demonstração para templates
  if (serviceKey === 'templates') {
    const templateCards = modal.querySelectorAll('.template-card[data-template]');
    templateCards.forEach(card => {
      card.addEventListener('click', () => {
        const status = card.querySelector('.template-status');
        const label = card.querySelector('.template-label');
        const isEditing = card.classList.toggle('editing');

        if (isEditing) {
          status.textContent = 'Editando…';
          label.textContent = 'Pronto para customizar';
        } else {
          status.textContent = 'Clique para editar';
          label.textContent = card.dataset.template;
        }
      });
    });
  }

  // Event listeners para fechar
  const closeButtons = modal.querySelectorAll('.modal-close, .modal-close-btn');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });

  // Fechar ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // Fechar com ESC
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// Fechar modal
function closeModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.remove();
  }, 300);
}

// Adicionar event listeners aos cards de serviço
document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    // Mapear índice para chave do serviço
    const serviceKeys = ['templates', 'personalizados', 'landing', 'automacoes', 'integracoes', 'backend', 'chatbot', 'manutencao'];
    const serviceKey = serviceKeys[index];
    
    // Adicionar cursor pointer
    card.style.cursor = 'pointer';
    
    // Adicionar evento de clique no card inteiro
    card.addEventListener('click', (e) => {
      // Não abrir modal se clicar no link "Saiba mais"
      if (e.target.closest('.btn-link')) {
        return;
      }
      createModal(serviceKey);
    });
    
    // Adicionar indicador visual de que é clicável
    const cardTitle = card.querySelector('h3');
    if (cardTitle) {
      cardTitle.style.transition = 'color 0.3s';
      card.addEventListener('mouseenter', () => {
        cardTitle.style.color = 'var(--primary)';
      });
      card.addEventListener('mouseleave', () => {
        cardTitle.style.color = '';
      });
    }
  });
});

// Prevenir scroll do body quando modal está aberto
const style = document.createElement('style');
style.textContent = `
  body.modal-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Adicionar/remover classe ao abrir/fechar modal
const originalCreateModal = createModal;
createModal = function(serviceKey) {
  document.body.classList.add('modal-open');
  originalCreateModal(serviceKey);
};

const originalCloseModal = closeModal;
closeModal = function(modal) {
  document.body.classList.remove('modal-open');
  originalCloseModal(modal);
};
