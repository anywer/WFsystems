const scenes = {
  catalogo: {
    kicker: 'Visão do comprador · Catálogo',
    heading: 'Encontre os produtos',
    rows: [['⌕  Buscar produto ou categoria'], ['Brisa Floral', 'R$ 39,00'], ['Essência Verde', 'R$ 47,00']],
    note: 'Exemplo fictício · sem compras nesta página',
  },
  pedido: {
    kicker: 'Visão do comprador · Pedido',
    heading: 'Confira os itens',
    rows: [['1 × Brisa Floral', 'R$ 39,00'], ['1 × Essência Verde', 'R$ 47,00'], ['Total', 'R$ 86,00']],
    note: 'Os nomes e valores são apenas ilustrativos',
  },
  whatsapp: {
    kicker: 'Visão do comprador · WhatsApp',
    heading: 'Mensagem preparada',
    rows: [['Pedido com 2 itens'], ['Resumo e total preenchidos'], ['O comprador toca em Enviar']],
    note: 'Nenhuma mensagem é enviada automaticamente',
  },
  painel: {
    kicker: 'Visão do lojista · Painel',
    heading: 'Acompanhe o pedido',
    rows: [['Pedido fictício #EX-104'], ['Status visível no painel'], ['Ação conferida pelo lojista']],
    note: 'A mudança para a visão administrativa é ilustrativa',
  },
  pdv: {
    kicker: 'Visão do lojista · PDV',
    heading: 'Registre a venda',
    rows: [['Pedido aberto no PDV'], ['Pagamento conferido manualmente'], ['Venda registrada']],
    note: 'Não representa cobrança automática ou nota fiscal',
  },
  relatorio: {
    kicker: 'Visão do lojista · Relatório',
    heading: 'Consulte o mês',
    rows: [['Registros do mês'], ['Origem online'], ['Origem presencial']],
    note: 'Exemplo fictício, sem resultados comerciais reais',
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
const sceneContent = document.querySelector('#scene-content');
const sceneNote = document.querySelector('#scene-note');

function showScene(key) {
  const scene = scenes[key];
  if (!scene || !sceneKicker || !sceneHeading || !sceneContent || !sceneNote) return;

  sceneKicker.textContent = scene.kicker;
  sceneHeading.textContent = scene.heading;
  sceneNote.textContent = scene.note;
  sceneContent.replaceChildren(...scene.rows.map(([label, value]) => {
    const row = document.createElement('div');
    row.className = 'scene-row';
    const name = document.createElement('span');
    name.textContent = label;
    row.append(name);
    if (value) {
      const amount = document.createElement('strong');
      amount.textContent = value;
      row.append(amount);
    }
    return row;
  }));

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
const previewDots = [...document.querySelectorAll('[data-preview-dot]')];
const preview = document.querySelector('.hero-preview');
if (preview && previewSlides.length && previewDots.length === previewSlides.length) {
  const count = document.querySelector('#preview-count');
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
    previewDots.forEach((dot, dotIndex) => {
      const selected = dotIndex === current;
      dot.classList.toggle('is-current', selected);
      if (selected) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (count) count.textContent = `${current + 1} / ${previewSlides.length}`;
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
  previewDots.forEach((dot, index) => dot.addEventListener('click', () => { showPreview(index); startPreview(); }));
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
  const labels = ['Negócio', 'Divulgação atual', 'Maior dificuldade', 'Nome'];
  const whatsapp = (leadForm.dataset.whatsapp || '').replace(/\D/g, '');
  const validWhatsapp = /^55[1-9]{2}9\d{8}$/.test(whatsapp);
  let currentStep = 0;

  function setError(message) {
    error.textContent = message;
    error.hidden = !message;
  }

  function renderSummary() {
    summary.replaceChildren(...fields.flatMap((field, index) => {
      const term = document.createElement('dt');
      term.textContent = labels[index];
      const value = document.createElement('dd');
      value.textContent = field.value.trim();
      return [term, value];
    }));
  }

  function showFormStep(index) {
    currentStep = index;
    formSteps.forEach((step, stepIndex) => step.classList.toggle('is-current', stepIndex === index));
    progress.textContent = index < fields.length ? `Pergunta ${index + 1} de ${fields.length}` : 'Confira seu resumo';
    back.hidden = index === 0;
    next.hidden = index === fields.length;
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
    ].join('\n');
    window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  });

  showFormStep(0);
}
