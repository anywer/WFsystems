const scenes = {
  catalogo: {
    kicker: 'Visão do comprador · Catálogo',
    heading: 'Encontre os produtos',
    image: 'assets/demo/gm-catalogo-home-real.png',
    alt: 'Catálogo real da GM Perfumaria em funcionamento',
    note: 'Tela real do catálogo demonstrativo',
  },
  pedido: {
    kicker: 'Visão do comprador · Pedido',
    heading: 'Confira os itens',
    image: 'assets/demo/gm-carrinho-real.png',
    alt: 'Carrinho real da GM Perfumaria com dois produtos',
    note: 'Tela real do carrinho demonstrativo',
  },
  whatsapp: {
    kicker: 'Visão do comprador · WhatsApp',
    heading: 'Mensagem preparada',
    image: 'assets/demo/gm-whatsapp-real.png',
    alt: 'Página real de continuação no WhatsApp com a mensagem do pedido preparada',
    note: 'Tela real da continuação do pedido no WhatsApp',
    focusMessage: true,
  },
  painel: {
    kicker: 'Visão do lojista · Painel',
    heading: 'Acompanhe o pedido',
    image: 'assets/demo/gm-pedidos-real.png',
    alt: 'Painel real de pedidos online com pedido de demonstração e status',
    note: 'Tela real do painel com um pedido de demonstração',
  },
  pdv: {
    kicker: 'Visão do lojista · PDV',
    heading: 'Registre a venda',
    image: 'assets/demo/gm-pdv-real.png',
    alt: 'PDV real com produtos, forma de pagamento e total da venda',
    note: 'Tela real do PDV com uma venda de demonstração',
  },
  relatorio: {
    kicker: 'Visão do lojista · Relatório',
    heading: 'Consulte o mês',
    image: 'assets/demo/gm-relatorio-mensal-real.png',
    alt: 'Relatório mensal real com filtros, indicadores e tabela de registros',
    note: 'Tela real do relatório mensal com filtro por origem',
  },
};

const revealTargets = [...document.querySelectorAll('.problem [data-reveal]')];
if (revealTargets.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
  document.documentElement.classList.add('has-motion-js');
  revealTargets.forEach((target) => revealObserver.observe(target));
}

const storySteps = [...document.querySelectorAll('[data-step]')];
const storySection = document.querySelector('#como-funciona');
const sceneKicker = document.querySelector('#scene-kicker');
const sceneHeading = document.querySelector('#scene-heading');
const sceneImage = document.querySelector('#scene-image');
const sceneNote = document.querySelector('#scene-note');

function showScene(key) {
  const scene = scenes[key];
  if (!scene || !sceneKicker || !sceneHeading || !sceneImage || !sceneNote) return;

  sceneKicker.textContent = scene.kicker;
  sceneHeading.textContent = scene.heading;
  sceneNote.textContent = scene.note;
  sceneImage.src = scene.image;
  sceneImage.alt = scene.alt;
  sceneImage.classList.toggle('capture-focus-message', Boolean(scene.focusMessage));

  storySteps.forEach((step) => step.classList.toggle('is-active', step.dataset.step === key));
}

if (storySection && storySteps.length) {
  const desktop = window.matchMedia('(min-width: 901px)');
  let frame = 0;
  let currentScene = 'catalogo';

  function updateSceneFromScroll() {
    frame = 0;
    if (!desktop.matches) return;
    const section = storySection.getBoundingClientRect();
    if (section.bottom < 0 || section.top > window.innerHeight) return;

    const threshold = window.innerHeight * .45;
    let nextScene = storySteps[0].dataset.step;
    for (const step of storySteps) {
      if (step.getBoundingClientRect().top > threshold) break;
      nextScene = step.dataset.step;
    }
    if (nextScene !== currentScene) {
      currentScene = nextScene;
      showScene(nextScene);
    }
  }

  function scheduleSceneUpdate() {
    if (!frame) frame = window.requestAnimationFrame(updateSceneFromScroll);
  }

  window.addEventListener('scroll', scheduleSceneUpdate, { passive: true });
  window.addEventListener('resize', scheduleSceneUpdate);
  desktop.addEventListener('change', scheduleSceneUpdate);
  scheduleSceneUpdate();
}

const previewSlides = [...document.querySelectorAll('[data-preview-slide]')];
const preview = document.querySelector('.hero-preview');
if (preview && previewSlides.length) {
  const count = document.querySelector('#preview-count');
  const previewIndex = document.querySelector('#preview-index');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let timer;
  let visible = true;

  function showPreview(index) {
    current = (index + previewSlides.length) % previewSlides.length;
    previewSlides.forEach((slide, slideIndex) => {
      const selected = slideIndex === current;
      slide.hidden = !selected;
      slide.classList.toggle('is-current', selected);
    });
    if (count) count.textContent = `${current + 1} / ${previewSlides.length}`;
    if (previewIndex) {
      previewIndex.classList.remove('is-visible');
      previewIndex.textContent = String(current + 1);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => previewIndex.classList.add('is-visible')));
    }
  }

  function stopPreview() {
    window.clearInterval(timer);
    timer = undefined;
  }

  function startPreview() {
    stopPreview();
    if (visible && !reducedMotion.matches && !document.hidden && !preview.matches(':hover') && !preview.contains(document.activeElement)) {
      timer = window.setInterval(() => showPreview(current + 1), 6000);
    }
  }

  document.querySelector('#preview-prev')?.addEventListener('click', () => { showPreview(current - 1); startPreview(); });
  document.querySelector('#preview-next')?.addEventListener('click', () => { showPreview(current + 1); startPreview(); });
  preview.addEventListener('mouseenter', stopPreview);
  preview.addEventListener('mouseleave', startPreview);
  preview.addEventListener('focusin', stopPreview);
  preview.addEventListener('focusout', (event) => { if (!preview.contains(event.relatedTarget)) startPreview(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopPreview(); else startPreview(); });
  reducedMotion.addEventListener('change', startPreview);
  if ('IntersectionObserver' in window) {
    const previewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) startPreview();
      else stopPreview();
    });
    previewObserver.observe(preview);
  }
  showPreview(0);
  startPreview();
}

const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu?.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});

const leadForm = document.querySelector('#lead-form');
if (leadForm) {
  const formSteps = [...leadForm.querySelectorAll('[data-form-step]')];
  const progress = leadForm.querySelector('#form-progress');
  const error = leadForm.querySelector('#form-error');
  const back = leadForm.querySelector('#form-back');
  const next = leadForm.querySelector('#form-next');
  const send = leadForm.querySelector('#form-send');
  const summary = leadForm.querySelector('#lead-summary');
  const fields = [leadForm.elements.tipo, leadForm.elements.divulgacao, leadForm.elements.dificuldade, leadForm.elements.nome];
  const aboutBusiness = leadForm.elements.sobreNegocio;
  const labels = ['Negócio', 'Divulgação atual', 'Maior dificuldade', 'Nome'];
  const whatsapp = (leadForm.dataset.whatsapp || '').replace(/\D/g, '');
  const validWhatsapp = /^55[1-9]{2}9\d{8}$/.test(whatsapp);
  let currentStep = 0;

  function setError(message) {
    error.textContent = message;
    error.hidden = !message;
  }

  function renderSummary() {
    const entries = fields.map((field, index) => [labels[index], field.value.trim()]);
    if (aboutBusiness.value.trim()) entries.push(['Sobre o negócio', aboutBusiness.value.trim()]);
    summary.replaceChildren(...entries.flatMap(([label, answer]) => {
      const term = document.createElement('dt');
      term.textContent = label;
      const value = document.createElement('dd');
      value.textContent = answer;
      return [term, value];
    }));
  }

  function showFormStep(index) {
    currentStep = index;
    formSteps.forEach((step, stepIndex) => step.classList.toggle('is-current', stepIndex === index));
    progress.textContent = index < fields.length ? `${index + 1}–${fields.length}` : 'Confira seu resumo';
    back.hidden = index === 0;
    next.hidden = index !== fields.length - 1;
    send.hidden = index !== fields.length;
    if (index === fields.length) {
      renderSummary();
      send.disabled = !validWhatsapp;
      send.textContent = validWhatsapp ? 'Continuar no WhatsApp' : 'WhatsApp em configuração';
    }
    setError('');
  }

  function advance() {
    if (currentStep >= fields.length) return;
    const field = fields[currentStep];
    if (!field.value.trim() || !field.checkValidity()) {
      setError('Responda esta pergunta para continuar.');
      field.focus();
      return;
    }
    showFormStep(currentStep + 1);
    if (currentStep < fields.length) fields[currentStep].focus();
    else progress.focus();
  }

  next.addEventListener('click', advance);
  fields.slice(0, -1).forEach((field, index) => {
    field.addEventListener('change', () => {
      if (currentStep === index && field.value.trim() && field.checkValidity()) advance();
    });
  });
  back.addEventListener('click', () => {
    showFormStep(Math.max(0, currentStep - 1));
    fields[currentStep].focus();
  });
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    advance();
  });
  send.addEventListener('click', () => {
    if (!validWhatsapp || currentStep !== fields.length) return;
    const message = [
      `Olá, sou ${fields[3].value.trim()} e gostaria de conversar sobre uma plataforma para meu negócio.`,
      `Negócio: ${fields[0].value}`,
      `Como divulgo hoje: ${fields[1].value}`,
      `Maior dificuldade: ${fields[2].value}`,
    ];
    if (aboutBusiness.value.trim()) message.push(`Um pouco mais sobre mim e o negócio: ${aboutBusiness.value.trim()}`);
    window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message.join('\n'))}`;
  });

  showFormStep(0);
}
