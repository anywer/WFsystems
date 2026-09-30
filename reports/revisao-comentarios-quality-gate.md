# Revisão dos oito comentários visuais — WFSystems

## Escopo

**Auditoria profunda** da atualização do cabeçalho, primeira tela, carrossel, transição visual, história guiada por rolagem, destaques, FAQ e acesso móvel ao formulário. A nova marca é uma proposta para revisão de Willy, não uma aprovação final.

## Validações executadas

- Leitura de `index.html`, `styles.css`, `script.js`, testes e ativos associados.
- `node --check script.js`: sem erro de sintaxe.
- `node --test tests\site-check.cjs`: 9 testes aprovados, incluindo estrutura da prévia e fluxo simulado do formulário.
- Conferência estrutural simples das tags principais em HTML: quantidades de abertura/fechamento de `div`, `section`, `button`, `span` e `p` coincidem. Isso não substitui um validador HTML nem renderização real.
- Tentativa de abrir a versão local no navegador integrado: indisponível nesta sessão por falha de inicialização do navegador. Nenhuma verificação visual pós-alteração foi atribuída a ele.

## Achados e correções

- **Importante — oscilação do scroll:** o observador anterior escolhia a cena a partir somente dos elementos incluídos em cada notificação, permitindo alternância na mesma região. A cena agora é escolhida de forma determinística pelo último passo que cruza 45% da altura da janela, com no máximo uma atualização por quadro e sem refazer a cena quando a chave não muda. Falta confirmação visual com rolagem repetida.
- **Importante — transição marcada:** o gradiente anterior escurecia em apenas 190 px a partir da borda reta da seção. A transição agora começa sobrepondo o fim da seção clara, dura mais e usa névoa radial; falta confirmar visualmente que a borda deixou de aparecer nos tamanhos relevantes.
- **Importante — formulário no celular:** os CTAs agora apontam para `#lead-form`, com margem de rolagem para não ficar sob o cabeçalho. O cartão continua após a explicação quando se rola manualmente. Falta testar no navegador móvel se o usuário percebe o formulário pelo caminho esperado.
- **Refinamento — demonstração:** cinco telas ilustrativas navegáveis substituem a vitrine única. Há botões anterior/próximo e indicadores, pausa da rotação ao passar o ponteiro ou focar controles, parada fora da área visível ou na aba oculta e suspensão da rotação automática quando há preferência por menos movimento. São desenhos com dados fictícios, não capturas reais.
- **Refinamento — texto e estrutura:** CTA conforme pedido, quatro módulos apresentados como destaques e FAQ focado no SaaS sem prometer estoque automático, pagamento ou nota fiscal.
- **Refinamento — marca:** nova proposta com monograma e nome na mesma família serifada e no mesmo degradê. Aguarda decisão visual de Willy.

## Qualidade, desempenho e acessibilidade

O carrossel altera somente uma tela visível por vez, mantém dimensões mínimas para reduzir saltos de layout e oferece controles rotulados por teclado. A animação CSS é curta; movimento reduzido desativa rotação automática e transições. A história usa um ouvinte de rolagem passivo e limita a execução com `requestAnimationFrame`; isso é inferência pelo código, não uma medição de fluidez. Não há dependência nova nem cópia de código ou dados da GM Store.

## Regressão e limites

Os 9 testes locais passaram depois dos ajustes. Não foi possível verificar visualmente navegador, celular real, leitor de tela, movimento reduzido aplicado pelo sistema, instabilidade do scroll ou linha do gradiente após a alteração. Também faltam as capturas reais anonimizadas solicitadas pelo proprietário. Esses itens são condições da próxima rodada de revisão.

**Status: Reprovado — correção necessária** antes de considerar os comentários resolvidos visualmente. O código local está preparado para a nova avaliação; a marca e as capturas reais não estão fechadas.
