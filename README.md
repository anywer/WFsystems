# WFSystems — landing page

Este é um projeto independente do **RA_GMSTORE / GM Store**. A página apresenta a oferta da WFSystems para pequenos negócios: catálogo online personalizado, acompanhamento de pedidos, PDV para registro de vendas e relatório mensal. Não depende do código, Firebase, catálogo ou dados da loja.

## Ver a primeira versão

Abra `index.html` em um navegador. A página usa apenas HTML, CSS e JavaScript locais; não precisa instalar dependências. A demonstração do sistema usa produtos e dados fictícios. O formulário é um protótipo funcional de perguntas e resumo, com o WhatsApp comercial confirmado pelo proprietário; ele apenas abre uma mensagem preparada, e o visitante decide se a envia.

## Comece por aqui

1. Leia [o briefing e cronograma](docs/identidade-e-cronograma-landing-page.md).
2. Acompanhe [o registro de decisões](docs/registro-de-decisoes.md), que separa escolhas confirmadas de propostas e pendências.
3. Revise os estudos de logo [claro](docs/brand/wfsystems-logo-claro-conceito.svg) e [escuro](docs/brand/wfsystems-logo-escuro-conceito.svg). O nome **WFSystems** está confirmado; o desenho visual e a tipografia ainda dependem de aprovação.
4. Revise a implementação inicial em `index.html`, `styles.css` e `script.js`. A seção Sobre usa temporariamente uma foto **gerada e ilustrativa**, com legenda explícita; substitua pela foto real de Willy antes da publicação.
5. Revise as alternativas de resposta do formulário e escolha hospedagem e domínio em etapas próprias, antes da publicação.

Para conduzir as etapas em conversa, a skill `equipe-landing-page` está em [skills/equipe-landing-page/SKILL.md](skills/equipe-landing-page/SKILL.md).

O arquivo `docs/brand/wf-logo-horizontal.svg` mantém a grafia antiga apenas como registro histórico; não deve ser usado na página publicada.

## Escopo do primeiro lançamento

Uma página responsiva que apresenta a plataforma e a história de Willy Fernandes, demonstra o fluxo comprador → lojista com dados fictícios e convida o visitante a iniciar uma conversa por meio de perguntas guiadas. O objetivo principal é gerar contatos qualificados. Usar dados e resultados apenas quando forem comprovados e autorizados.

## Estado atual

- Nome: **WFSystems**, confirmado (antes WFSistens).
- Identidade: direção visual e progressão claro → escuro aprovadas; estudos vetoriais e acabamento ainda não são identidade definitiva.
- Conteúdo: mensagem, história pessoal, wireframe e direção visual aprovados. Primeira implementação local em revisão.
- Contato: quatro temas de perguntas aprovados, resumo implementado e número comercial confirmado em `+55 17 98122-1449`, habilitado apenas ao fim das respostas. A redação das alternativas ainda pode ser refinada.
- Domínio, hospedagem e analytics: não definidos nem ativados.
- Prazo-base: 20 dias úteis, sujeito a materiais e aprovações.

Este pacote pode ser movido para outra pasta ou repositório e aberto como um projeto novo. Não coloque sua implementação dentro da pasta RA_GMSTORE.
