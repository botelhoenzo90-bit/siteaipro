# Modernização do SiteAI Pro

O objetivo é transformar o SiteAI Pro em uma plataforma de alto nível, com design premium, funcionalidades robustas e uma experiência de usuário impecável.

## Alterações Propostas

### 1. Landing Page Premium
- **Novo Design:** Implementação de seções com glassmorphism, gradientes suaves (brand-blue/brand-purple) e animações Framer Motion.
- **Planos & Preços:** Criação de uma seção de precificação visualmente impactante com 3 níveis (Free, Pro, Agency).
- **Prova Social:** Adição de seção de "Empresas que confiam" e FAQ moderno.
- **Performance:** Otimização de imagens e estrutura semântica.

### 2. Dashboard Renovado
- **Widgets de Negócio:** Substituição dos cards genéricos por KPIs reais: "Meta Mensal", "Prospecções Hoje", "Conversão de Leads".
- **Feed de Atividades:** Lista das últimas ações realizadas no sistema.
- **Gráficos:** Implementação de visualização de dados mais limpa.

### 3. AI Builder (Melhorias de UX)
- **Fluxo Guiado:** Interface dividida em etapas para não sobrecarregar o usuário.
- **Novos Nichos & Contextos:** Expansão da base de dados sem alterar a lógica de geração de prompt já otimizada.
- **Preview em Tempo Real:** Feedback visual conforme os campos são preenchidos.

### 4. Prospecção Avançada
- **Novas Estratégias:** Inclusão de táticas para LinkedIn e prospecção fria por e-mail.
- **Filtros Inteligentes:** Melhoria na interface de busca para segmentação por tamanho de empresa e faturamento estimado.

### 5. Calculadora de Precificação "Preços Sugeridos"
- **Logística de Preços:** Adição de sugestões automáticas baseadas no nível de complexidade e tempo de entrega.
- **Relatório de Custos:** Visão detalhada de impostos, taxas de ferramentas e lucro líquido.

### 6. Biblioteca com Imagens
- **Cards Visuais:** Cada template terá uma imagem de preview (thumbnails profissionais).
- **Categorias:** Melhor organização por nichos e estilo visual.

### 7. Autenticação e Navegação
- **Login Perfeito:** Correção de redirecionamentos e melhoria visual nas páginas de Auth.
- **Limpeza de Navegação:** Remoção definitiva da parte de "Propostas" para simplificar o fluxo de trabalho.

## Detalhes Técnicos
- **Frontend:** React 19 + TanStack Router.
- **Estilo:** Tailwind CSS v4 + OKLCH Colors.
- **Backend:** Supabase Auth & DB.
- **Animações:** Framer Motion para transições de estado.
