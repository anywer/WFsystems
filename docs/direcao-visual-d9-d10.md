# Direção visual D9–D10 — proposta para revisão

Status: **direção visual para computador e celular aprovada por Willy Fernandes, inclusive transição orgânica como névoa**. Aplicação da identidade provisória ao wireframe D8; o conceito foi usado como base da primeira implementação, mas o acabamento ainda poderá ser refinado após revisão no navegador.

## Ideia central

Uma página tecnológica, mas acolhedora para o pequeno comerciante. O software aparece como ferramenta prática, não como vitrine de efeitos. A escrita pessoal de Willy fica em áreas com leitura tranquila; a demonstração recebe o contraste visual mais forte.

## Composição proposta

- **Primeira tela clara:** fundo branco suave `#F5F8F7`, texto azul-marinho `#112238`, título com presença e bastante espaço para leitura. Logo horizontal na versão para fundo claro. Esta é a primeira impressão escolhida por Willy.
- **Janela da plataforma escura:** moldura azul-marinho com detalhes turquesa `#48D6CE`. Os quatro módulos têm nomes sempre visíveis. Dentro da tela Catálogo, produtos fictícios aparecem em cartões discretos, subordinados à interface.
- **Coral `#FF866A` como acento:** destacar uma ação ou ponto de atenção por vez; não colorir todos os elementos para evitar ruído.
- **Progressão ao rolar:** abertura clara e humana → seção da dor em tons claros ligeiramente mais frios → demonstração em azul-marinho profundo com detalhes turquesa. A passagem foi refinada a pedido de Willy para parecer **mais orgânica, quase como fumaça**: camadas irregulares e suaves de cor atrás do conteúdo, combinadas a um degradê discreto. O texto permanece nítido e a transição não depende de animação para existir.
- **Seção Sobre:** espaço reservado para foto real de Willy ao lado da história aprovada. Fundo e moldura devem valorizar a pessoa, sem parecer depoimento de cliente nem retrato gerado.
- **Versão escura:** os mesmos componentes terão variação sobre fundo azul-marinho para a parte tecnológica e para estudo da marca. Isso não pressupõe um seletor de tema no primeiro lançamento.

## Tratamento da demonstração

- Interface principal como uma janela de sistema com abas **Catálogo · Pedidos · PDV · Relatórios**.
- Uma frase curta ao lado de cada ação, acompanhando a mudança de quadro. A passagem “Visão do comprador” → “Visão do lojista” deve ser claramente marcada.
- Transições suaves e breves, sem impedir rolagem normal. O conteúdo funciona estático em celular e com movimento reduzido.
- Controles manuais e CTA sempre fáceis de encontrar; nenhum produto fictício terá botão que pareça uma compra real na página da WFSystems.

## Primeira visualização

O conceito em `design-conceito-progressao.svg` mostra três momentos em uma prancha vertical: abertura clara, dor em transição orgânica e solução em ação sobre fundo escuro. É uma ilustração de direção visual, não a captura do produto real nem o layout responsivo final. Um eventual movimento da névoa será decidido e testado depois; o efeito deve continuar bonito e compreensível parado, sem prejudicar desempenho ou quem prefere movimento reduzido. Ainda será necessário desenhar celular, estados de interação e validar contraste e legibilidade.

## Adaptação para celular — aprovada

O estudo `design-conceito-mobile.svg` mantém a progressão clara → névoa → escura, mas empilha conteúdo e prévia do sistema. Cada frase da demonstração fica próxima da ação que descreve; a pessoa rola naturalmente em vez de ter um painel preso à tela. O título e o botão de contato aparecem antes da prévia, e os módulos do software continuam nomeados. Não há carrossel automático no celular. A seção Sobre manterá espaço para foto real de Willy; a prancha mostra apenas o começo da jornada, não toda a página.
