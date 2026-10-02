# Revisão de qualidade do frontend — WFSystems

Data da revisão: 02/10/2026.
Status: **Aprovado com observações**.

## Escopo revisado

Revisão das 28 anotações aplicadas em `index.html`, `styles.css` e `script.js`, incluindo a nova abertura pela dor do cliente, capturas reais, carrossel, comparação entre Instagram e catálogo, resumo dos módulos, apresentação de Willy, formulário guiado e rodapé.

## Validações executadas

- `node --check script.js`: passou.
- `node --test tests/site-check.cjs`: 14 de 14 testes passaram.
- `git diff --check`: passou; apenas avisos de conversão LF/CRLF do Git.
- Busca por `innerHTML`, `outerHTML`, `eval`, `new Function`, armazenamento local, cookies, requisições e WebSocket no frontend: nenhum uso encontrado.
- Navegador real em 1440 × 1000 e 390 × 844: abertura, carrossel, formulário, resumo, rodapé e adaptação móvel verificados.
- As quatro novas capturas foram verificadas no carrossel e nas etapas por rolagem; no celular, as seis etapas exibem as capturas correspondentes em vez dos antigos cartões ilustrativos.
- Console do navegador: nenhum erro ou aviso durante a revisão.

## Resultado visual e funcional

- A abertura apresenta a dor antes da solução e mantém apenas um `h1`.
- Os três cartões da operação têm destaque por hover apenas em dispositivos que suportam hover; toque não depende desse efeito.
- O carrossel usa área visual com proporção fixa, setas redesenhadas e indicador numérico com transição de opacidade. As telas reais verificadas mantiveram a mesma altura (aproximadamente 582 px no painel e 317,5 px na área da imagem no viewport de teste).
- As sete telas do carrossel são capturas do projeto em funcionamento com dados de demonstração: catálogo, carrinho, acesso ao painel, pedidos, continuação no WhatsApp, PDV e relatório mensal. A comparação com os Stories usa um perfil comercial inteiramente fictício, sem arroba, pessoas, métricas, links ou marca de uma conta existente.
- A seção “O que você vai receber” foi simplificada para uma lista em duas colunas no computador e uma coluna em telas pequenas.
- O formulário avança automaticamente nas três perguntas de seleção. A quarta etapa mostra nome, campo opcional sobre o negócio e botão “Avançar”. O texto opcional entra no resumo e na mensagem somente quando preenchido.
- O rodapé agora reúne posicionamento, navegação, WhatsApp, responsável pelo atendimento e direitos autorais.

## Acessibilidade e responsividade

- Hierarquia de títulos, rótulos de formulário, link de salto, foco visível, botões com nomes acessíveis e aviso dinâmico do progresso foram preservados.
- O fluxo funciona por teclado; pressionar Enter na última pergunta abre o resumo sem enviar dados.
- `prefers-reduced-motion` continua reduzindo animações e transições.
- Não foi observada rolagem horizontal nos viewports testados.

## Performance e manutenção

- As novas imagens usam dimensões explícitas e carregamento tardio quando estão fora da primeira tela.
- A nova composição do perfil fictício foi otimizada de 1.705.177 bytes em PNG para 196.306 bytes em JPEG antes de ser ligada à página.
- A troca de cenas reutiliza um único elemento de imagem; o carrossel pausa fora da área visível, quando a aba está oculta, durante hover/foco e quando o usuário prefere menos movimento.
- Não foram adicionadas bibliotecas externas. O utilitário local `tools/capture-server.cjs` existe apenas para repetir capturas da demonstração e não é carregado pelo site.

## Observação conhecida

As capturas de pedidos, WhatsApp, PDV e relatório usam dados de demonstração fornecidos por Willy. O relatório está em um estado vazio, com os indicadores zerados; ele comprova a estrutura e os filtros da tela, mas não demonstra uma venda registrada no período.
