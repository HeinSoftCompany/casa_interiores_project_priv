// src/main.js — mantém layout/classe/id originais
import './styles/main.scss';

// =========================
// Utils
// =========================
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const norm = (s) =>
  (s || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');

// Recalcula se a coluna deve ficar oculta (aplica .d-none baseado nas flags)
function recomputeVisibility(scope = document) {
  $('#grid [class*="col-"]', scope).each(function () {
    const $col = $(this);
    const hide = $col.hasClass('ci-hide-cat') || $col.hasClass('ci-hide-text');
    $col.toggleClass('d-none', hide);
  });
}

// Debounce
const debounce = (fn, d = 180) => {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), d);
  };
};

// =========================
// Estado
// =========================
let currentCat = null;

// =========================
// Título dinâmico (Móveis ↔ Voltar ao início)
// =========================
function updatePageTitle(cat) {
  const $titleLink = $('.page-title .reset-home');
  if ($titleLink.length === 0) return;
  if (cat) {
    $titleLink.text('Voltar ao início');
  } else {
    $titleLink.text('Móveis');
  }
}

// =========================
/* Categoria (preserva seu comportamento; usa flags para coexistir com filtro de texto) */
// =========================
function applyCategory(cat) {
  currentCat = cat;

  $('.cat-link').removeClass('active');
  $(`.cat-link[data-cat="${cat}"]`).addClass('active');

  const $grid = $('#grid');
  const $cols = $grid.find('[class*="col-"]');

  // limpa flag de categoria
  $cols.removeClass('ci-hide-cat');

  // aplica flag de categoria nos que não batem
  $grid.find('.product-card').each(function () {
    const c = $(this).data('cat');
    if (c !== cat) $(this).closest('[class*="col-"]').addClass('ci-hide-cat');
  });

  // reavalia visibilidade considerando categoria + texto
  recomputeVisibility();

  // scroll para o primeiro da categoria
  const $first = $grid.find(`.product-card[data-cat="${cat}"]`).first();
  if ($first.length) {
    const y = $first.offset().top - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // mantém filtro de texto, se houver algo digitado
  const term = $('.search-input').val() || '';
  if (term.trim()) applyTextFilter(term);

  // título dinâmico
  updatePageTitle(cat);
}

// =========================
// Reset (limpa categoria; busca é reaplicada se houver)
// =========================
function resetHome() {
  currentCat = null;
  $('.cat-link').removeClass('active');

  const $grid = $('#grid');
  $grid.find('[class*="col-"]').removeClass('ci-hide-cat');
  recomputeVisibility();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const term = $('.search-input').val() || '';
  if (term.trim()) applyTextFilter(term);

  // título dinâmico
  updatePageTitle(null);
}

// =========================
// Filtro de texto (flag separada para não conflitar com categoria)
// =========================
function applyTextFilter(termRaw) {
  const term = norm(termRaw);
  const $grid = $('#grid');

  $grid.find('[class*="col-"]').each(function () {
    const $col = $(this);
    const $card = $col.find('.product-card');

    if (!term) {
      // campo vazio → remove filtro de texto
      $col.removeClass('ci-hide-text');
      return;
    }

    const title = norm($card.find('.product-title').text());
    const matchesText = title.includes(term);

    // aplica/limpa SOMENTE a flag de texto
    $col.toggleClass('ci-hide-text', !matchesText);
  });

  // aplica d-none conforme flags
  recomputeVisibility();
}

// =========================
// WhatsApp links (número ofuscado) — injeta <a> dentro da .pix
// =========================
function setupWhatsAppLinks() {
  // Número: 81 99320-1501 → 5581993201501 (ofuscado em partes)
  const PHONE = ['5581', '9932', '01501'].join('');

  $('#grid .product-card .pix').each(function () {
    const $pix = $(this);
    const name = $pix.closest('.product-card').find('.product-title').text().trim();

    const url = new URL('https://wa.me/' + PHONE);
    url.searchParams.set(
      'text',
      `Olá! Tenho interesse no produto: ${name}. Pode me enviar mais detalhes?`
    );

    // Mantém a div .pix e injeta o link dentro (não remove classes/ids)
    $pix.html(
      `<a class="text-success-emphasis text-decoration-none" target="_blank" rel="noopener" href="${url.toString()}">Falar no whatsapp</a>`
    );
  });
}

// =========================
// Boot
// =========================
document.addEventListener('DOMContentLoaded', () => {
  // ano no footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Toggle "Ver mais"
  $(document).on('click', '.sidebar-toggle', function (e) {
    e.preventDefault();
    const $btn = $(this);
    const targetId = $btn.attr('aria-controls'); // ex: "catList"
    const $box = $('#' + targetId);
    const isOpen = $btn.attr('aria-expanded') === 'true';

    $btn.attr('aria-expanded', String(!isOpen));
    $box.toggleClass('is-open', !isOpen);
    $btn.find('span').text(!isOpen ? 'Ver menos' : 'Ver mais');

    if (!isOpen) {
      setTimeout(() => {
        const top = $btn.offset().top - 120;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);
    }
  });

  // Clique nas categorias (SEM reload) + fecha offcanvas no mobile
  $(document).on('click', '.cat-link', function (e) {
    const cat = $(this).data('cat');
    if (!cat) return;
    e.preventDefault();

    const url = new URL(window.location.href);
    url.searchParams.set('cat', cat);
    history.pushState({ cat }, '', url);

    applyCategory(cat);

    const offcanvasEl = document.getElementById('mobileFilters');
    if (offcanvasEl && window.bootstrap) {
      const off = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      off.hide();
    }
  });

  // Logo e "Móveis" → reset
  $(document).on('click', '.reset-home', function (e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.search = '';
    history.pushState({}, '', url);
    resetHome();
  });

  // Voltar do navegador
  window.addEventListener('popstate', () => {
    const cat = getParam('cat');
    if (cat) applyCategory(cat);
    else resetHome();

    const term = $('.search-input').val() || '';
    applyTextFilter(term);

    // garante título correto ao navegar
    updatePageTitle(cat || null);
  });

  // Estado inicial: ?cat=...
  const initialCat = getParam('cat');
  if (initialCat) applyCategory(initialCat);
  else updatePageTitle(null);
  recomputeVisibility(); // garante estado consistente

  // Clona o sidebar pro offcanvas mobile
  const $desk = $('#sidebarDesktop nav').clone(true, true);
  $desk.find('#catList').attr('id', 'catListMobile');
  $desk.find('.sidebar-toggle').attr('aria-controls', 'catListMobile');
  $('#mobileFiltersBody').empty().append($desk);

  // ===== Busca por texto =====
  const runSearch = debounce(() => {
    const term = $('.search-input').val() || '';
    applyTextFilter(term);
  }, 180);

  // enquanto digita
  $(document).on('input', '.search-input', runSearch);

  // enter no campo
  $(document).on('keydown', '.search-input', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      runSearch();
    }
  });

  // clique na lupa
  $(document).on('click', '.search-wrap .btn', function (e) {
    e.preventDefault();
    runSearch();
  });

  // ===== WhatsApp por produto =====
  setupWhatsAppLinks();
});
