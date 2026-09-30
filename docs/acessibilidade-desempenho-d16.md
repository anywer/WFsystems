# D16 — acessibilidade e desempenho da página local

## Escopo e nível

**Auditoria profunda** da landing page estática WFSystems: abertura, navegação, demonstração, conteúdo, formulário e adaptação móvel. Esta é uma revisão local, não uma certificação de acessibilidade nem uma medição de velocidade em produção. A escolha e configuração do domínio ficam para a última etapa, por decisão de Willy.

## Validações executadas em 21/09/2026

- Navegador integrado com servidor local em `127.0.0.1`: abertura no computador, telas de 375 × 812 e 320 × 700, teste de menu móvel, verificação de rolagem horizontal, carregamento das duas imagens e console sem erros capturados.
- Formulário no navegador: tentativa de avançar sem resposta mostrou erro; respostas válidas levaram às quatro perguntas e ao resumo esperado. O botão para WhatsApp ficou disponível no resumo. **Não foi clicado**, para não abrir uma conversa externa.
- Leitura de HTML, CSS e JavaScript: hierarquia de títulos, textos alternativos, rótulos do formulário, foco visível, opção de movimento reduzido, funcionamento sem dependência da cena animada e carregamento tardio da foto abaixo da primeira tela.
- Checagem local de contraste de pares relevantes: coral do contorno de foco sobre branco 3,45:1 e sobre fundo claro 3,23:1; texto turquesa escuro sobre branco 5,95:1; texto principal suave sobre fundo claro 6,73:1; texto claro da história sobre azul escuro 11,22:1. Valores calculados das cores declaradas, não uma medição de pixels compostos no navegador.
- `node --check script.js` sem erros e `node --test tests\site-check.cjs` com 8 testes aprovados.

## Achados e tratamento

- **Bloqueador / Importante:** nenhum identificado nas verificações feitas. Isso não exclui problemas em dispositivos e tecnologias assistivas ainda não testados.
- **Refinamento corrigido:** o botão fixo “Contato” no cabeçalho móvel tinha texto de 10,88 px e altura mínima de 40 px na menor largura. Passou a 12,8 px e 44 px; no navegador a altura medida foi 44 px e não surgiu rolagem lateral em 320 px.
- **Observação:** a foto provisória tem 2.021.430 bytes. Está abaixo da abertura e marcada para carregamento tardio, mas sua substituição pela foto real deve incluir otimização de tamanho e nova conferência visual antes da publicação. Não há medida de tempo de carregamento real ou Core Web Vitals.
- **Observação:** a cena guiada pela rolagem foi verificada no código e vista no navegador; não foi ensaiada em leitor de tela nem em aparelho físico. O conteúdo textual permanece no HTML; em celular, cada etapa mostra sua própria cena sem exigir animação.

## Qualidade e regressão

O CSS conserva os estilos aprovados e usa a mesma estrutura responsiva. O JavaScript apenas altera texto da demonstração e conduz o formulário local; não envia respostas a servidor. Após o ajuste móvel, a página foi recarregada, a abertura em 320 px foi revista, sem rolagem horizontal, e os 8 testes locais passaram novamente.

## Limites e próximos cuidados

Não foram testados leitor de tela, teclado completo em todas as seções, aparelho físico, rede lenta ou métricas de desempenho do endereço público. Repetir essas verificações na revisão final e no domínio definitivo. A equipe recomenda trocar a imagem ilustrativa pela foto de Willy antes de publicar.

**Status: Aprovado com observações** para continuar às próximas etapas locais.
