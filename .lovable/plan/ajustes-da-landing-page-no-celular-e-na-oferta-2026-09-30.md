# Ajustes da landing page no celular e na oferta

## O que será alterado
- Corrigir a faixa amarela entre as duas primeiras seções para manter um looping contínuo, sem salto ou travamento.
- Criar no celular um botão de três linhas que abre um menu com atalhos da página e acesso ao login.
- Organizar os benefícios da primeira seção para melhor leitura no celular.
- Garantir uma chamada para a oferta em todas as seções principais, com a mensagem “7 dias de garantia” abaixo dos botões.
- Melhorar o contraste dos ícones nos quatro cards de solução.
- Mover as avaliações para imediatamente antes da oferta.
- Atualizar a oferta com preço anterior riscado em vermelho, preço atual, opção em até 12x e destaque para os 7 dias de garantia.

## Detalhes técnicos
- Preservar a estrutura pública em `src/routes/index.tsx` e concentrar os ajustes visuais finais em `src/landing-patch.css`.
- Usar o componente de botão existente nos controles do menu móvel e manter navegação acessível por teclado.
- Duplicar de forma simétrica o conteúdo da faixa para que a animação percorra exatamente metade da trilha.
- Validar abertura e fechamento do menu, fluxo até a oferta, layout móvel e ausência de erros.
