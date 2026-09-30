# D15 — SEO técnico da landing page WFSystems

Status: **base local revisada; finalização reservada para a última etapa, quando Willy decidir o domínio e a publicação**. SEO facilita a compreensão e descoberta da página, mas não garante posição nem visitas.

## Já presente na implementação

- Idioma principal `pt-BR` e estrutura responsiva com o mesmo conteúdo essencial para computador e celular.
- Um `<title>` descritivo: “WFSystems — catálogo, pedidos e vendas com a sua marca”.
- Descrição da página coerente com a oferta aprovada: catálogo online, pedidos, PDV e relatório mensal para pequenos negócios.
- Um `<h1>` na abertura; seções principais com `<h2>` e etapas internas com `<h3>`.
- Conteúdo principal escrito no HTML. As seis etapas da demonstração continuam legíveis sem depender do efeito de rolagem; a imagem provisória tem descrição e aviso de que não representa Willy.
- Navegação por âncoras com nomes compreensíveis, sem bloquear a rolagem normal.

## O que não será inventado antes da publicação

- **URL canônica:** depende do endereço HTTPS definitivo. Não usar `file://`, endereço local ou domínio hipotético.
- **Open Graph completo para compartilhamento:** `og:url` e `og:image` precisam de URLs públicas e estáveis. A imagem social deverá representar a **plataforma**, não os perfumes fictícios nem a foto provisória de Willy.
- **Sitemap e Search Console:** dependem do domínio e de controle sobre a hospedagem. Não há conta vinculada nem envio feito.
- **Robots/noindex:** não inserir regra que possa permanecer por engano e impedir a indexação final. Se houver prévia pública de testes, a estratégia de indexação dessa prévia deve ser definida na hospedagem.
- **Dados estruturados:** não declarar organização, contato ou serviços com detalhes ainda não confirmados; avaliar `WebSite` após definir o endereço final e a apresentação pública.

## Conferência pré-publicação

1. Confirmar domínio, versão preferida do endereço e redirecionamentos HTTPS.
2. Adicionar URL canônica absoluta e metadados de compartilhamento com imagem publicada em endereço absoluto.
3. Conferir título e descrição no endereço real, inclusive quando o link for compartilhado.
4. Verificar se a página e os recursos podem ser acessados por buscadores; revisar `robots.txt` e eventual `noindex` da prévia.
5. Testar leitura e layout móvel, imagens, links, formulário e velocidade no domínio final.
6. Se Willy quiser acompanhamento de busca, conectar a propriedade no Search Console em uma etapa autorizada.

## Revisão de qualidade nesta etapa

**Verificação rápida, aprovada com observações para o estágio local.** A inspeção de `index.html` confirmou título, descrição, idioma, hierarquia de headings e conteúdo equivalente no celular; os 8 testes locais continuam passando. A aparência no navegador e o comportamento dos metadados em uma URL pública **não foram testados**. Não há medições de ranqueamento ou tráfego.

## Fontes primárias consultadas em 21/09/2026

- [Google Search Central — título de resultados](https://developers.google.com/search/docs/appearance/title-link): recomenda títulos descritivos e concisos e um título principal claro na página.
- [Google Search Central — descrições e snippets](https://developers.google.com/search/docs/appearance/snippet): a descrição pode ajudar a compor o snippet, mas o buscador pode escolher outro trecho do conteúdo.
- [Google Search Central — indexação mobile-first](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing): recomenda design responsivo e conteúdo acessível no celular.
- [Google Search Central — URLs canônicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): orienta a escolha de uma URL preferida estável e o uso de endereço absoluto.
- [The Open Graph protocol](https://ogp.me/): define propriedades como título, tipo, imagem e URL do objeto compartilhado.
