# Plano de Modernização e Recursos Adicionais - SiteAI Pro

O usuário relatou dificuldades para publicar o app e solicitou a correção de erros, melhorias no design e a adição de novos recursos. Este plano detalha as ações para tornar o sistema mais robusto e moderno.

## Objetivos
1.  **Correção Visual:** Garantir que o título da landing page e outros elementos visuais estejam perfeitos.
2.  **Modernização do Design:** Aplicar efeitos de glassmorphism mais intensos, animações refinadas e novos padrões de fundo.
3.  **Novos Recursos:**
    *   **Dashboard Detalhado:** Adicionar widgets de resumo e métricas reais (simuladas).
    *   **Calculadora Pro:** Refinar a calculadora de precificação com mais opções e exportação simples.
    *   **Feedback de Publicação:** Adicionar uma seção clara no painel sobre o status de publicação.
4.  **Estabilização:** Verificar e corrigir erros de tipagem ou lógica em rotas existentes.

## Detalhes Técnicos

### 1. Interface (Frontend)
*   **Landing Page:** Refinar o hero section com `framer-motion` para entrada suave de elementos.
*   **Componentes UI:** Atualizar botões e cartões com bordas coloridas sutis e sombras dinâmicas.
*   **Calculadora:** Implementar lógica para cálculo de impostos e margem de lucro sugerida.

### 2. Rotas e Estrutura
*   `src/routes/_authenticated.dashboard.tsx`: Inserir um "Launch Checklist" para ajudar na publicação.
*   `src/routes/_authenticated.pricing-calculator.tsx`: Adicionar campos para "Custo de Ferramentas" e "Horas Estimadas".

### 3. Guia de Publicação (Instrução ao Usuário)
*   Explicar que o erro de publicação pode ser resolvido verificando o status do build no painel do Lovable e clicando no botão central de deploy.

## Próximos Passos
1.  Atualizar o `src/routes/index.tsx` para um visual ainda mais premium.
2.  Expandir o `src/routes/_authenticated.pricing-calculator.tsx`.
3.  Adicionar o widget de publicação no Dashboard.
