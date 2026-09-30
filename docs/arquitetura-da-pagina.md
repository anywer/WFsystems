# Arquitetura da landing page WFSystems — proposta D5

Status: **arquitetura D5 aprovada e refinada no wireframe D8**. A explicação dos módulos acompanha a demonstração guiada pelo scroll; não há seção longa de explicação antes dela. Este documento define a ordem e a função das seções, não o layout visual final.

## Jornada principal

O visitante entende imediatamente que a WFSystems oferece **uma plataforma online personalizada para pequenos negócios**, composta por catálogo pesquisável, acompanhamento de pedidos, PDV para registrar vendas e relatório. A prévia visual mostra essas partes conectadas, com produtos fictícios apenas dentro do catálogo. Depois o visitante reconhece a dor do catálogo disperso e do controle de pedidos/vendas, entende o processo e responde a um formulário curto. Ao final, confere o resumo e escolhe continuar no WhatsApp com a mensagem pronta para enviar. O site não deve alegar que a mensagem foi enviada automaticamente.

**Dois níveis que não podem se confundir:** esta landing page é da **WFSystems** e oferece a criação/adaptação de uma plataforma com página-catálogo, pedidos, PDV e relatório. Os cartões de perfume, cosmético e roupa representam apenas **o catálogo de um cliente hipotético**, dentro da prévia da plataforma. São dados fictícios, não produtos vendidos pela WFSystems nem produtos reais de um cliente. O formulário da landing page serve para conversar sobre contratar a plataforma, não para comprar os itens demonstrativos. Na comunicação para o público leigo, preferir “plataforma” ou “sistema” a depender de “SaaS” como explicação principal; o modelo comercial ainda não foi definido.

## Ordem proposta

| Ordem | Seção | Pergunta que ela responde | Ação |
| --- | --- | --- | --- |
| 1 | Cabeçalho | Onde estou? | Logo WFSystems, navegação curta e botão “Falar do meu projeto” que leva ao formulário. |
| 2 | Abertura com prévia da plataforma | O que a WFSystems oferece? É para meu negócio? | Categoria explícita (“Plataforma para pequenos negócios”), título que nomeia catálogo, pedidos e vendas, apoio que menciona PDV e relatório, e CTA “Conversar sobre minha plataforma”. Ao lado/abaixo, uma prévia identificada como demonstração ilustrativa, com navegação visível **Catálogo · Pedidos · PDV · Relatórios**. Produtos fictícios aparecem apenas dentro da tela Catálogo. |
| 3 | Problema atual | Por que ter um catálogo próprio se já uso Stories? | Mostrar que Stories continuam como divulgação, enquanto o catálogo oferece um endereço fixo para pesquisar por nome/categoria e comparar vários produtos com preços. Em paralelo, mostrar a dificuldade de acompanhar pedidos, pagamentos, entregas/retiradas e vendas dispersas. Tratar dores como hipótese relatada pelo proprietário, não pesquisa validada. |
| 4 | Solução em ação | O que recebo e como funciona no dia a dia? | Frases curtas acompanham cada ação da demonstração guiada pelo scroll: comprador vê catálogo, escolhe e registra pedido, abre a mensagem pronta no WhatsApp e a envia manualmente; depois muda-se explicitamente para a visão do lojista, que acompanha o pedido, abre no PDV, registra a venda e consulta o relatório. A explicação dos módulos acontece junto da apresentação. |
| 5 | Resumo estático do fluxo | Consigo rever o que acabei de ver? | Dar acesso direto e legível às quatro funções da plataforma sem depender de animação; não repetir uma galeria de produtos. Usar somente marca e dados fictícios, claramente identificados; não exibir nome, dados ou imagens incompletas da GM Store. |
| 6 | Personalização e processo | Como isso se adapta ao meu negócio? | Diagnóstico, identidade visual/domínio, configuração e revisão conjunta. Escopo, suporte e custos ainda precisam ser definidos. |
| 7 | Sobre | Quem está por trás? | História aprovada de **Willy Fernandes**, com seis anos em vendas, e espaço reservado para uma foto real. Vídeo pessoal curto é possibilidade futura, não requisito do primeiro lançamento. |
| 8 | Perguntas frequentes | O que preciso saber antes de conversar? | Escopo, prazo, domínio, manutenção, pagamentos e o que o PDV registra — sem prometer nota fiscal ou estoque automático. |
| 9 | Formulário guiado | Quero conversar; o que acontece agora? | Poucas perguntas, resumo, botão “Continuar no WhatsApp” e aviso de privacidade adequado ao fluxo final. |
| 10 | Rodapé | Como encontro os dados essenciais? | Identidade, canais autorizados e documentos necessários. |

## Navegação proposta

Âncoras curtas: **Solução**, **Como funciona**, **Exemplo**, **Sobre** e **Contato**. O botão principal aponta sempre para o formulário. A futura expansão para outros públicos pode ganhar uma seção ou página própria; não criar uma aba vazia no primeiro lançamento.

## Diretrizes para a prévia animada da plataforma

- A estrutura da prévia deve parecer claramente um **software**, não uma loja da WFSystems: moldura de interface, nome do módulo atual e navegação visível entre Catálogo, Pedidos, PDV e Relatórios. A primeira tela do módulo Catálogo pode mostrar busca, categorias, preços e alguns perfumes, cosméticos e roupas de uma loja fictícia. Não usar marcas de terceiros nem dados da GM Store. O produto-base já exibe preços e filtra por nome/categoria; não sugerir controle automático de estoque.
- **Título, explicação dos quatro módulos e CTA ficam estáticos.** Se houver movimento, ele ocorre dentro da prévia como passagem entre módulos ou destaque de ações, com controle manual e pausa após interação; no celular, priorizar navegação manual sem rotação automática. Respeitar preferência por movimento reduzido e manter conteúdo legível.
- Manter visível “Demonstração ilustrativa”. Os cartões de produtos não devem parecer compráveis na página da WFSystems. A primeira vista deve responder “a WFSystems vende uma plataforma”, não “a WFSystems vende perfumes”.

## Storyboard inicial para testar no wireframe

1. **Abertura estática:** a WFSystems oferece a plataforma; mostrar os quatro módulos e o CTA sem exigir scroll para entender a oferta.
2. **Visão do comprador:** vitrine fictícia com busca por nome/categoria, produtos e preços; seleção e registro de pedido.
3. **Passagem para WhatsApp:** após registrar o pedido, abrir conversa com mensagem quase pronta contendo itens e resumo; o comprador precisa tocar em **Enviar**. Não representar envio automático. A futura impressão térmica não aparece como recurso pronto.
4. **Mudança clara de perspectiva — visão do lojista:** entrada no painel administrativo, acompanhamento do pedido e abertura no PDV. O login pode aparecer como detalhe curto, não como etapa de compra do consumidor.
5. **Venda e visão gerencial:** lojista confere pagamento, registra a venda no PDV e vê o relatório mensal com origem online/física. Não representar processamento de pagamento, nota fiscal, controle de estoque quantitativo ou ranking de produtos.

O conteúdo textual e a sequência devem existir no HTML mesmo sem efeito de scroll. A narrativa não pode sequestrar a rolagem: o visitante mantém a velocidade normal, pode passar pela seção e acessar o formulário a qualquer momento. No celular, em telas estreitas, em navegadores sem o efeito e para quem prefere menos movimento, apresentar os mesmos quadros em sequência estática/acionável.

## Questões para validação

- Nenhum envio automático de pedido está no escopo; o comprador confirma manualmente o envio da mensagem no WhatsApp.
- Definir a descrição curta e a trajetória de Willy Fernandes para a seção Sobre. Foto e vídeo podem ser decididos mais tarde.

## Base para a recomendação do carrossel

- [Baymard Institute, pesquisa de UX sobre carrosséis de homepage (atualizada em 2025)](https://baymard.com/research-articles/homepage-carousel): muitos visitantes não chegam aos slides seguintes; recomenda priorizar o primeiro, manter controles manuais visíveis e evitar informação essencial exclusiva em slides. No celular, recomenda evitar rotação automática.
- [W3C WAI, tutorial de carrosséis](https://www.w3.org/WAI/tutorials/carousels/): requer controle de pausa, operação por teclado e comunicação adequada para tecnologias assistivas.
- [web.dev, boas práticas de desempenho para carrosséis](https://web.dev/articles/carousel-best-practices): o primeiro conteúdo visual deve carregar prontamente; iniciar o carregamento apenas via JavaScript pode prejudicar desempenho.
- [Nielsen Norman Group, diretrizes de usabilidade de homepages](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/): a primeira vista deve comunicar onde o visitante está, o que a empresa faz e o que ele pode fazer no site. Aplicamos essa orientação à página de serviços da WFSystems; não é prova de conversão para esta implementação específica.
- Essas fontes orientam uma **hipótese de design**, não provam qual variante converterá mais para a WFSystems. A decisão visual será prototipada e testada nas etapas de wireframe, UI e QA.

## Referências para o storytelling por scroll

- [Scrollama, de Russell Samora, no GitHub](https://github.com/russellsamora/scrollama): referência pública para narrativa em etapas acionadas por `IntersectionObserver`, com exemplo de painel fixo ao lado do texto; repositório sob licença MIT. Inspiração técnica, não dependência escolhida nem código copiado.
- [MDN, animações dirigidas pelo scroll](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations): alternativa nativa a avaliar com suporte progressivo; não condicionar conteúdo essencial ao efeito.
- [Nielsen Norman Group, pesquisa sobre scrolljacking](https://www.nngroup.com/articles/scrolljacking-101/): alterar o comportamento normal da rolagem pode prejudicar orientação e controle; usar o scroll como gatilho narrativo sem prender o visitante.
- [W3C, animação causada por interação](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions): permitir reduzir/desativar movimento não essencial, inclusive o provocado pelo scroll.
