# Wireframe D8 — WFSystems

Status: **direção estrutural aprovada por Willy Fernandes**, com explicação integrada à demonstração e espaço reservado para sua foto na seção Sobre. É um esquema de posição, hierarquia e interação, ainda sem acabamento de cores, fontes ou imagens. Baseado na arquitetura D5 e no texto D6–D7 aprovados.

## Objetivo da primeira tela

Em poucos segundos o visitante deve entender que a WFSystems oferece **uma plataforma para o negócio dele** — catálogo, pedidos, PDV e relatório — e saber como pedir uma conversa. Produtos fictícios aparecem apenas como conteúdo da tela Catálogo, nunca como oferta da WFSystems.

## Computador — primeira tela

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ WFSystems                 Solução  Como funciona  Sobre      [Vamos conversar]│
├──────────────────────────────────────┬─────────────────────────────────────┤
│ Plataforma para pequenos negócios    │ PRÉVIA DA PLATAFORMA               │
│                                      │ Demonstração ilustrativa            │
│ Seu catálogo, seus pedidos e suas    │ [Catálogo] [Pedidos] [PDV] [Relat.] │
│ vendas em uma plataforma com a sua   │ ┌─────────────────────────────────┐ │
│ marca.                               │ │ Busca  ·  Categorias             │ │
│                                      │ │ Produtos fictícios com preço     │ │
│ Apoio em tom pessoal: reconhece a    │ │ (dentro da tela do catálogo)     │ │
│ rotina e explica o sistema.          │ └─────────────────────────────────┘ │
│                                      │ Indicador / controles manuais       │
│ [Conversar sobre minha plataforma]  │                                     │
└──────────────────────────────────────┴─────────────────────────────────────┘
                 ↓ problema do catálogo disperso e das vendas
```

- Título, resumo estático dos quatro módulos e CTA ficam legíveis sem interação. A explicação detalhada vem depois, junto da demonstração. A prévia mostra primeiro a estrutura do software, não uma foto de perfume ampliada.
- A navegação entre os quatro módulos pode ser acionada manualmente. Movimento automático, se houver, não pode esconder a oferta nem impedir pausa; no celular, a proposta é não usar rotação automática.
- O CTA do cabeçalho permanece acessível durante a rolagem; comportamento exato será testado no protótipo para não encobrir conteúdo.

## Celular — primeira tela

```text
┌──────────────────────────────┐
│ WFSystems             [Menu] │
├──────────────────────────────┤
│ Plataforma para pequenos     │
│ negócios                     │
│                              │
│ Seu catálogo, seus pedidos   │
│ e suas vendas em uma         │
│ plataforma com a sua marca.  │
│                              │
│ Texto de apoio mais curto.   │
│ [Conversar sobre a plataforma]│
│                              │
│ Demonstração ilustrativa     │
│ [Cat.] [Pedidos] [PDV] [Rel.] │
│ ┌──────────────────────────┐ │
│ │ Prévia do sistema        │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

- A abertura se empilha: primeiro oferta e botão, depois prévia. Não exigir que o visitante role até a animação para entender o produto.
- A navegação dos módulos deve caber sem textos ilegíveis; se necessário, permitir rolagem horizontal **apenas nas abas**, com indicação visível. Não prender a rolagem da página.
- Um botão compacto de contato poderá permanecer disponível durante o restante da página, desde que não cubra texto, controles ou o formulário. A forma final será definida no design e testada no celular.

## Ordem das seções

| Seção | Conteúdo principal | Função |
| --- | --- | --- |
| 1. Abertura | Oferta + quatro módulos + prévia rotulada | Deixar claro o que está à venda. |
| 2. A dor | Stories como divulgação, falta de catálogo pesquisável e pedidos dispersos | Mostrar compreensão sem atacar o canal que o lojista já usa. |
| 3. Solução em ação | Catálogo → pedido → WhatsApp → painel → PDV → relatório, com frases curtas sincronizadas com cada ação | Explicar o que está incluído ao mesmo tempo que demonstra o uso. |
| 4. Resumo do sistema | Quatro funções em cartões estáticos | Permitir rever sem depender da animação. |
| 5. Personalização | Conversa inicial, identidade da marca e adaptação | Mostrar a abordagem sem prometer escopo não definido. |
| 6. Sobre Willy | História aprovada de seis anos em vendas + espaço para foto real | Criar vínculo entre experiência pessoal e solução. |
| 7. Perguntas frequentes | Somente respostas operacionais confirmadas | Tirar dúvidas antes do contato. |
| 8. Formulário | Perguntas guiadas → resumo → WhatsApp | Converter interesse em conversa iniciada pelo visitante. |
| 9. Rodapé | Marca, contato aprovado e informações necessárias | Encerrar e permitir retorno. |

## Demonstração: como o scroll conta a história

No computador, propor uma frase curta por etapa à esquerda e uma janela de interface à direita. Cada frase descreve a ação visível naquele momento, enquanto o visitante rola **normalmente** e o quadro da direita muda de estado. A explicação dos módulos acontece aqui, não em uma seção extensa anterior. A janela pode permanecer visível por parte da seção; não deve prender a página. O CTA continua alcançável.

```text
COMPRADOR                                 LOJISTA
Catálogo → Carrinho/pedido → WhatsApp    Painel → PDV → Relatório
           pedido registrado  mensagem   acompanha  registra  consulta
                              pronta;
                              cliente envia
```

1. **Catálogo:** busca por nome/categoria e preços de itens fictícios.
2. **Pedido:** o comprador escolhe produtos e registra o pedido.
3. **WhatsApp:** a conversa abre com o resumo preparado; a interface mostra que o comprador precisa tocar em **Enviar**.
4. **Troca de perspectiva:** um marcador explícito “Agora, a visão do lojista” evita confusão entre comprador e administrador.
5. **Painel e PDV:** lojista acompanha o pedido, abre no PDV, confere o pagamento e registra a venda; pode registrar venda presencial separadamente.
6. **Relatório:** consulta os registros mensais por origem online/presencial.

No celular, os mesmos seis quadros aparecem em sequência vertical, com a frase curta junto da ação correspondente. Sem tela presa ao scroll nem movimento obrigatório. Para quem prefere movimento reduzido ou usa navegador sem o efeito, a sequência continua legível e navegável. O resumo estático dos quatro módulos após a demonstração serve como segunda forma de consulta.

## Sobre — reserva da foto

No computador, reservar uma área para a **foto real de Willy** ao lado da história aprovada. No celular, a foto vem antes ou depois do texto conforme a legibilidade do protótipo, sem reduzir demais o espaço da narrativa. Até Willy fornecer a imagem, usar um espaço reservado neutro no design; não inventar retrato nem publicar um marcador vazio. Vídeo segue como possibilidade futura, fora do primeiro lançamento.

## Formulário — esboço de fluxo, não perguntas finais

```text
Começar → poucas perguntas de escolha → resumo editável → Continuar no WhatsApp
                                              (visitante toca em Enviar)
```

Uma pergunta por vez, com opção de voltar. Primeira hipótese de temas: tipo de negócio, como apresenta produtos hoje, principal dificuldade e interesse no combo catálogo + sistema. As alternativas, eventual campo livre, texto de privacidade e tratamento dos dados ainda serão decididos com Willy. Não pressupor armazenamento nem envio automático.

## Resultado do D8 e próxima etapa

Willy aprovou unir explicação e demonstração, com frases curtas que acompanham as ações, e reservar espaço para sua foto na seção Sobre. Permanecem os critérios já estabelecidos: primeira tela clara sobre a oferta, distinção comprador → lojista, CTA acessível e fluxo de contato sem envio automático. A próxima etapa é D9–D10: desenhar a aparência responsiva com a identidade provisoriamente aprovada.
