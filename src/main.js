import './styles/main.scss';

// util: ler query param
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// aplica visual "ativo" no menu + filtra grid (ESCOPADO EM #grid)
function applyCategory(cat) {
  $('.cat-link').removeClass('active');
  $(`.cat-link[data-cat="${cat}"]`).addClass('active');

  const $grid = $('#grid'); // escopo apenas no grid de produtos
  const $cols = $grid.find('[class*="col-"]');
  $cols.removeClass('d-none');

  $grid.find('.product-card').each(function () {
    const c = $(this).data('cat');
    if (c !== cat) $(this).closest('[class*="col-"]').addClass('d-none');
  });

  const $first = $grid.find(`.product-card[data-cat="${cat}"]`).first();
  if ($first.length) {
    const y = $first.offset().top - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// volta ao estado inicial (ESCOPADO EM #grid)
function resetHome() {
  $('.cat-link').removeClass('active');
  const $grid = $('#grid');
  $grid.find('[class*="col-"].d-none').removeClass('d-none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  // ano do footer
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

    // atualiza URL sem recarregar
    const url = new URL(window.location.href);
    url.searchParams.set('cat', cat);
    history.pushState({ cat }, '', url);

    // aplica filtro
    applyCategory(cat);

    // fecha o offcanvas, se aberto (mobile)
    const offcanvasEl = document.getElementById('mobileFilters');
    if (offcanvasEl) {
      const off = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      off.hide();
    }
  });

  // Logo e "Móveis" → reset (SEM reload)
  $(document).on('click', '.reset-home', function (e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.search = '';
    history.pushState({}, '', url);
    resetHome();
  });

  // Botão voltar do navegador
  window.addEventListener('popstate', () => {
    const cat = getParam('cat');
    if (cat) applyCategory(cat);
    else resetHome();
  });

  // Estado inicial: se abrir já com ?cat=...
  const initialCat = getParam('cat');
  if (initialCat) applyCategory(initialCat);

  // Clona o conteúdo do sidebar desktop para o offcanvas mobile
  const $desk = $('#sidebarDesktop nav').clone(true, true);
  $desk.find('#catList').attr('id', 'catListMobile');
  $desk.find('.sidebar-toggle').attr('aria-controls', 'catListMobile');
  $('#mobileFiltersBody').empty().append($desk);
});
