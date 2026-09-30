const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

test('apresenta a plataforma e mantém os exemplos fictícios identificados', () => {
  for (const moduleName of ['Catálogo', 'Pedidos', 'PDV', 'Relatório']) {
    assert.ok(html.includes(moduleName), `${moduleName} ausente`);
  }
  assert.match(html, /Demonstração ilustrativa/);
  assert.match(html, /Produtos e dados fictícios/);
  assert.doesNotMatch(html, /GM Store|RA_GMSTORE/i);
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

test('a prévia permite navegar entre telas e mantém a origem fictícia explícita', () => {
  assert.equal((html.match(/data-preview-slide/g) || []).length, 5);
  assert.equal((html.match(/data-preview-dot/g) || []).length, 5);
  assert.match(html, /Capturas reais anonimizadas serão incluídas/);
  assert.match(js, /preview-prev/);
  assert.match(js, /preview-next/);
  assert.match(js, /prefers-reduced-motion: reduce/);
});

test('a comparação apresenta o papel de Stories e catálogo sem prometer resultado', () => {
  assert.match(html, /Stories divulgam\./);
  assert.match(html, /O catálogo ajuda a fechar a venda\./);
  assert.equal((html.match(/data-reveal/g) || []).length, 3);
  assert.match(css, /prefers-reduced-motion: reduce/);
});

test('destaques não usam números e incluem cupons com ressalva', () => {
  const highlights = html.slice(html.indexOf('<div class="module-grid">'), html.indexOf('<section class="personal'));
  assert.doesNotMatch(highlights, /<span>0[1-9]<\/span>/);
  assert.match(highlights, /Cupons de desconto/);
  assert.match(highlights, /sem promessa de resultado/);
});

test('a história distingue comprador e lojista sem envio automático', () => {
  assert.match(html, /Visão do comprador/);
  assert.match(html, /Agora, a visão do lojista/);
  assert.match(html, /precisa tocar em <strong>Enviar<\/strong>/);
  assert.match(html, /Nenhum dado é salvo em servidor/);
});

test('o formulário usa o WhatsApp confirmado e não grava dados', () => {
  assert.match(html, /data-whatsapp="5517981221449"/);
  assert.match(html, /id="form-send"[^>]*disabled/);
  assert.doesNotMatch(js, /localStorage|sessionStorage|fetch\(|XMLHttpRequest/);
  assert.match(js, /encodeURIComponent\(message\)/);
});

test('há adaptação móvel, foco visível e preferência de menos movimento', () => {
  assert.match(css, /@media \(max-width: 700px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /:focus-visible/);
  assert.match(html, /class="skip-link"/);
});

test('a imagem provisória existe e não se apresenta como Willy', () => {
  assert.ok(fs.existsSync(path.join(root, 'assets', 'profissional-ilustrativo-ajustado.jpg')));
  assert.match(html, /Imagem ilustrativa — não é uma foto de Willy Fernandes/);
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
  const elements = Object.fromEntries(['tipo', 'divulgacao', 'dificuldade', 'nome']
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
  controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-error'].hidden, false);
  assert.equal(controls['form-progress'].textContent, 'Pergunta 1 de 4');
  for (const [index, name] of ['tipo', 'divulgacao', 'dificuldade', 'nome'].entries()) {
    elements[name].value = `Resposta ${index + 1}`;
    controls['form-next'].listeners.get('click')();
  }
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
  for (let index = 0; index < 4; index += 1) controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-send'].disabled, false);
  controls['form-send'].listeners.get('click')();
  const url = new URL(window.location.href);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5517981221449');
  assert.match(url.searchParams.get('text'), /Olá, sou Willy/);
  assert.match(url.searchParams.get('text'), /Maior dificuldade: Mostrar todos os produtos/);
});

test('número brasileiro com dígito a mais não ativa o contato', () => {
  const { controls, elements } = runForm('17 981 223 14 49');
  elements.tipo.value = 'Revenda de produtos';
  elements.divulgacao.value = 'WhatsApp';
  elements.dificuldade.value = 'Registrar as vendas';
  elements.nome.value = 'Teste';
  for (let index = 0; index < 4; index += 1) controls['form-next'].listeners.get('click')();
  assert.equal(controls['form-send'].disabled, true);
});
