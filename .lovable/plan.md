# Plano de Modernização e Expansão - SiteAI Pro

Melhoria do motor de IA, criação do módulo de Prospecção Ativa (Google Maps/Instagram) e refinamento estético global.

## Alterações Propostas

### 1. Motor de IA Inteligente (AI Builder)
- **Correção do Contexto:** Alterar a lógica do `AIBuilderPage` para integrar efetivamente o campo de "Explique seu Negócio" no prompt gerado.
- **Prompt Dinâmico:** Substituir a simulação estática por um gerador de prompts que concatena nicho, objetivo, estilo e contexto detalhado para evitar resultados genéricos.

### 2. Módulo de Prospecção Ativa (Novo)
- **Nova Rota:** Criar `src/routes/_authenticated.prospecting.tsx`.
- **Funcionalidades:**
    - **Busca por Nicho (Maps):** Interface para pesquisar empresas no Google Maps por categoria e localização (links diretos com parâmetros de busca).
    - **Painel de Redes Sociais:** Atalhos para prospecção no Instagram e LinkedIn.
    - **Guia de Estratégias:** Dicas práticas de "onde e como prospectar" integradas na página.

### 3. Melhoria Visual e UX
- **Design Moderno:** Aplicar efeitos de glassmorphism mais profundos, animações de entrada em todos os módulos e feedback visual aprimorado.
- **Navegação:** Adicionar o link "Prospecção" na barra lateral em `src/routes/_authenticated.tsx`.

## Detalhes Técnicos

### Backend e Dados
- Nenhuma alteração de esquema necessária no momento, foco em lógica de UI e integração de ferramentas externas.

### Frontend
- **Framer Motion:** Uso extensivo para transições suaves.
- **Lucide-React:** Novos ícones para o módulo de prospecção (MapPin, Instagram, Search).
- **Zod:** Validação aprimorada nos formulários de IA.
