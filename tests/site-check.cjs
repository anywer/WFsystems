const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

test('apresenta a plataforma e identifica os dados de demonstração', () => {
  for (const moduleName of ['Catálogo', 'Pedidos', 'PDV', 'Relatório']) {
    assert.ok(html.includes(moduleName), `${moduleName} ausente`);
  }
  assert.match(html, /Plataforma em funcionamento/);
  assert.match(html, /sete telas são capturas do projeto em funcionamento com dados de demonstração/);
  assert.doesNotMatch(html, /GM Store|RA_GMSTORE/i);
});

test('a abertura apresenta a dor antes da solução sem linguagem acusatória', () => {
  const painIndex = html.indexOf('id="inicio"');
  const solutionIndex = html.indexOf('id="plataforma"');
  assert.ok(painIndex >= 0, 'abertura de dor ausente');
  assert.ok(solutionIndex > painIndex, 'a solução deve vir depois da dor');
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /Cansado de procurar seus produtos/);
  assert.match(html, /O problema não é divulgar/);
  for (const pain of ['Catálogo', 'Pedidos', 'Vendas']) assert.ok(html.includes(pain), `${pain} ausente da abertura`);
  assert.doesNotMatch(html.slice(painIndex, solutionIndex), /você não tem/i);
  assert.match(html, /href="#plataforma">Solução/);
});

test('usa a identidade visual oficial em versões clara e escura', () => {
  assert.match(html, /docs\/brand\/producao\/WF_Systems_Logo_Sem_Slogan\.svg/);
  assert.match(html, /docs\/brand\/producao\/WF_Systems_Logo_Completa_Fundo_Escuro\.svg/);
  assert.match(html, /docs\/brand\/producao\/WF_Systems_Simbolo_Azul\.svg/);
  for (const asset of ['WF_Systems_Logo_Completa_Fundo_Claro.svg', 'WF_Systems_Logo_Completa_Fundo_Escuro.svg', 'WF_Systems_Logo_Sem_Slogan.svg', 'WF_Systems_Monocromatico_Azul.svg', 'WF_Systems_Monocromatico_Branco.svg', 'WF_Systems_Simbolo_Azul.svg', 'WF_Systems_Simbolo_Branco.svg', 'WF_Systems_Simbolo_Colorido.svg']) {
    assert.ok(fs.existsSync(path.join(root, 'docs', 'brand', 'producao', asset)), `${asset} ausente`);
  }
  assert.match(css, /--navy: #0b2d6b/);
  assert.match(css, /--electric: #0066ff/);
  assert.match(css, /--teal-light: #00d4ff/);
  assert.doesNotMatch(css, /#dc674d|#ff866a/i);
});

test('a prévia permite navegar entre sete capturas reais e mantém altura estável', () => {
  assert.equal((html.match(/data-preview-slide/g) || []).length, 7);
  assert.equal((html.match(/data-preview-dot/g) || []).length, 0);
  assert.match(html, /id="preview-index"/);
  assert.doesNotMatch(html, /Captura real/);
  for (const asset of ['gm-catalogo-home-real.png', 'gm-carrinho-real.png', 'gm-acesso-painel.png', 'gm-pedidos-real.png', 'gm-whatsapp-real.png', 'gm-pdv-real.png', 'gm-relatorio-mensal-real.png']) {
    assert.ok(fs.existsSync(path.join(root, 'assets', 'demo', asset)), `${asset} ausente`);
    assert.match(html, new RegExp(asset.replace('.', '\\.')));
  }
  assert.equal((html.match(/class="preview-screen preview-screen-real"/g) || []).length, 7);
  assert.doesNotMatch(html, /mock-chat|mock-pdv|mock-report|preview-list/);
  assert.match(js, /preview-prev/);
  assert.match(js, /preview-next/);
  assert.match(js, /prefers-reduced-motion: reduce/);
  assert.match(css, /aspect-ratio: 1\.44 \/ 1/);
});

test('a comparação apresenta o papel de Stories e catálogo sem prometer resultado', () => {
  assert.match(html, /Stories divulgam\./);
  assert.match(html, /O catálogo FECHA a venda\./);
  assert.ok(fs.existsSync(path.join(root, 'assets', 'demo', 'social-comercial-ficticio.jpg')));
  assert.doesNotMatch(html, /gm-instagram-real\.png/);
  assert.equal((html.match(/data-reveal/g) || []).length, 3);
  assert.match(css, /prefers-reduced-motion: reduce/);
});

test('destaques usam uma lista numerada, leve e incluem cupons sem promessa comercial', () => {
  const highlights = html.slice(html.indexOf('<div class="module-grid">'), html.indexOf('<section class="personal'));
  assert.equal((highlights.match(/class="module-number"/g) || []).length, 6);
  assert.match(highlights, /Cupons de desconto/);
  assert.match(highlights, /pedido mínimo e validade/);
});

test('a história distingue comprador e lojista sem envio automático', () => {
  assert.match(html, /Visão do comprador/);
  assert.match(html, /Agora, a visão do lojista/);
  assert.match(html, /precisa tocar em <strong>Enviar<\/strong>/);
  assert.match(html, /Nenhum dado é salvo em servidor/);
  for (const asset of ['gm-whatsapp-real.png', 'gm-pedidos-real.png', 'gm-pdv-real.png', 'gm-relatorio-mensal-real.png']) {
    assert.match(js, new RegExp(asset.replace('.', '\\.')));
  }
  assert.equal((html.match(/class="mobile-scene\b/g) || []).length, 6);
  assert.doesNotMatch(html, /combina capturas do projeto em funcionamento com prévias ilustrativas/);
});

test('o FAQ mantém somente os tópicos aprovados nesta revisão', () => {
  const faq = html.slice(html.indexOf('<section class="faq'), html.indexOf('<section class="contact'));
  assert.doesNotMatch(faq, /Ranking de produtos mais vendidos/);
  assert.doesNotMatch(faq, /ainda precisa tocar em Enviar/);
  assert.doesNotMatch(faq, /O sistema controla estoque ou emite nota fiscal/);
  assert.equal((faq.match(/<details>/g) || []).length, 5);
});

test('o formulário usa o WhatsApp confirmado e não grava dados', () => {
  assert.match(html, /data-whatsapp="5517981221449"/);
  assert.match(html, /id="form-send"[^>]*disabled/);
  assert.doesNotMatch(js, /localStorage|sessionStorage|fetch\(|XMLHttpRequest/);
  assert.match(js, /encodeURIComponent\(message\.join\('\\n'\)\)/);
});

test('há adaptação móvel, foco visível e preferência de menos movimento', () => {
  assert.match(css, /@media \(max-width: 700px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /:focus-visible/);
  assert.match(html, /class="skip-link"/);
});

test('a foto de Willy existe e não mantém o aviso de imagem ilustrativa', () => {
  assert.ok(fs.existsSync(path.join(root, 'assets', 'profissional-ilustrativo-ajustado.jpg')));
  assert.match(html, /alt="Willy Fernandes em pose profissional/);
  assert.doesNotMatch(html, /Imagem ilustrativa — não é uma foto de Willy Fernandes/);
});

function makeElement() {
  return {
    listeners: new Map(),
    classList: { toggle() {} },
    addEventListener(event, handler) { this.listeners.set(event, handler); },
    focus() {},
    replaceChildren(...children) { this.children = children; },
    append(...children) { this.children = children; },
    value: '',
    checkValidity() { return this.value.trim().length > 0; },
  };
}

function runForm(number = '') {
  const steps = Array.from({ length: 5 }, makeElement);
  const controls = Object.fromEntries(['form-progress', 'form-error', 'form-back', 'form-next', 'form-send', 'lead-summary']
    .map((id) => [id, makeElement()]));
  const elements = Object.fromEntries(['tipo', 'divulgacao', 'dificuldade', 'nome', 'sobreNegocio']
    .map((name) => [name, makeElement()]));
  const form = {
    dataset: { whatsapp: number },
    elements,
    listeners: new Map(),
    querySelectorAll() { return steps; },
    querySelector(selector) { return controls[selector.slice(1)]; },
    addEventListener(event, handler) { this.listeners.set(event, handler); },
  };
  const document = {
    querySelectorAll() { return []; },
    querySelector(selector) { return selector === '#lead-form' ? form : null; },
    createElement() { return makeElement(); },
  };
  const window = { location: { href: '' } };
  vm.runInNewContext(js, { document, window });
  return { form, controls, elements, window };
}

test('o formulário exige cada resposta antes de mostrar o resumo', () => {
  const { controls, elements } = runForm();
  assert.equal(controls['form-progress'].textContent, '1–4');
  for (const [index, name] of ['tipo', 'divulgacao', 'dificuldade'].entries()) {
    elements[name].value = `Resposta ${index + 1}`;
    elements[name].listeners.get('change')();
  }
  controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-error'].hidden, false);
  assert.equal(controls['form-progress'].textContent, '4–4');
  elements.nome.value = 'Resposta 4';
  controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-progress'].textContent, 'Confira seu resumo');
  assert.equal(controls['form-send'].disabled, true);
  assert.equal(controls['form-send'].textContent, 'WhatsApp em configuração');
});

test('com o número confirmado, prepara a conversa sem enviar mensagem', () => {
  const { controls, elements, window } = runForm('55 (17) 98122-1449');
  elements.tipo.value = 'Revenda de produtos';
  elements.divulgacao.value = 'Stories ou redes sociais';
  elements.dificuldade.value = 'Mostrar todos os produtos';
  elements.nome.value = 'Willy';
  elements.sobreNegocio.value = 'Tenho uma pequena loja de perfumes.';
  for (const name of ['tipo', 'divulgacao', 'dificuldade']) elements[name].listeners.get('change')();
  controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-send'].disabled, false);
  controls['form-send'].listeners.get('click')();
  const url = new URL(window.location.href);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5517981221449');
  assert.match(url.searchParams.get('text'), /Olá, sou Willy/);
  assert.match(url.searchParams.get('text'), /Maior dificuldade: Mostrar todos os produtos/);
  assert.match(url.searchParams.get('text'), /Tenho uma pequena loja de perfumes/);
});

test('número brasileiro com dígito a mais não ativa o contato', () => {
  const { controls, elements } = runForm('17 981 223 14 49');
  elements.tipo.value = 'Revenda de produtos';
  elements.divulgacao.value = 'WhatsApp';
  elements.dificuldade.value = 'Registrar as vendas';
  elements.nome.value = 'Teste';
  for (const name of ['tipo', 'divulgacao', 'dificuldade']) elements[name].listeners.get('change')();
  controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-send'].disabled, true);
});
