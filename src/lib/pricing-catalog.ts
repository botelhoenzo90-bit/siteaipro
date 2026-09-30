export type PricingTier = {
  id: string;
  name: string;
  price: number;
  description: string;
  bestFor: string;
  items: string[];
};

export const pricingTiers: PricingTier[] = [
  { id: 'start', name: 'Página inicial', price: 350, description: 'Uma página direta para apresentar e receber contatos.', bestFor: 'Autônomos e validação de oferta', items: ['1 página', 'Contato por WhatsApp', 'Versão para celular'] },
  { id: 'simple', name: 'Site simples', price: 590, description: 'Presença profissional com as informações essenciais.', bestFor: 'Negócios locais pequenos', items: ['Até 3 páginas', 'Serviços e contato', 'SEO inicial'] },
  { id: 'intermediate', name: 'Intermediário', price: 750, description: 'Estrutura comercial para explicar, gerar confiança e converter.', bestFor: 'Clínicas, salões e prestadores', items: ['Até 5 páginas', 'Provas e perguntas frequentes', 'Formulário ou WhatsApp'] },
  { id: 'professional', name: 'Profissional', price: 990, description: 'Site completo para uma empresa com oferta mais ampla.', bestFor: 'Empresas em crescimento', items: ['Até 7 páginas', 'Estrutura personalizada', 'Integrações essenciais'] },
  { id: 'authority', name: 'Autoridade', price: 1450, description: 'Projeto mais estratégico, com maior volume e refinamento.', bestFor: 'Imobiliárias, advocacia e alto valor', items: ['Até 10 páginas', 'Conteúdo estratégico', 'Recursos avançados'] },
];

export const nicheAdjustments = [
  { id: 'local', name: 'Negócio local', amount: 0 },
  { id: 'health', name: 'Saúde e estética', amount: 100 },
  { id: 'professional', name: 'Serviços profissionais', amount: 150 },
  { id: 'real-estate', name: 'Imobiliária e construção', amount: 250 },
  { id: 'commerce', name: 'Catálogo ou comércio', amount: 300 },
];

export const pricingExtras = [
  { id: 'copy', name: 'Criação dos textos', price: 120 },
  { id: 'booking', name: 'Agendamento', price: 180 },
  { id: 'catalog', name: 'Catálogo', price: 250 },
  { id: 'rush', name: 'Entrega urgente', price: 200 },
];

export const formatMoney = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);