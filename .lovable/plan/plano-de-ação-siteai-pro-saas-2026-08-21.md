# Plano de Ação: SiteAI Pro SaaS

Criação de um SaaS premium chamado **SiteAI Pro**, focado em criação de sites via IA e prospecção de clientes.

## 1. Design System & Identidade Visual (Premium Dark)
*   **Cores:** Fundo dark sofisticado (`oklch(0.129 0.042 264.695)`), Azul elétrico (`oklch(0.6 0.2 250)`), Roxo (`oklch(0.5 0.2 300)`).
*   **Componentes:** Shadcn UI customizado com bordas sutis, glassmorphism e animações via Framer Motion.
*   **Estilo:** "Start-up moderna", alta fidelidade, tipografia limpa.

## 2. Estrutura de Rotas e Telas
*   `/`: Landing Page (Hero, Benefícios, Planos, CTA).
*   `/auth`: Login e Cadastro.
*   `/_authenticated/dashboard`: Painel principal com estatísticas e acesso rápido.
*   `/_authenticated/ai-builder`: Gerador de prompts para sites.
*   `/_authenticated/copymaster`: Gerador de copy.
*   `/_authenticated/crm`: Central de prospecção (Kanban de leads).
*   `/_authenticated/proposals`: Gerador de propostas comerciais.
*   `/_authenticated/academy`: Área de aprendizado.
*   `/_authenticated/library`: Biblioteca de templates premium.
*   `/_authenticated/profile`: Configurações de perfil e assinatura.

## 3. Implementação Técnica
*   **Backend:** Lovable Cloud (Supabase) para Auth e Banco de Dados.
*   **Frontend:** TanStack Start, React 19, Tailwind CSS v4.
*   **Funcionalidades:** 
    *   Simulação de IA para geração de prompts e copy.
    *   CRM funcional com drag-and-drop.
    *   Gerador de PDF para propostas (simulado).

## Detalhes Técnicos
*   Utilizar `lucide-react` para ícones modernos.
*   Implementar `sonner` para notificações.
*   Criar esquemas Zod para validação de formulários.
*   Estrutura de banco de dados: `profiles`, `projects`, `leads`, `proposals`, `templates`.

---
*Este plano transforma o prompt detalhado em uma aplicação SaaS funcional e elegante.*
