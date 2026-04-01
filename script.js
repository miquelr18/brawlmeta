const API_URL = 'https://api.brawlapi.com/v1/brawlers';

const I18N = {
  es: {
    navHome:'Inicio', navAll:'Todos los brawlers', navBuilds:'Best builds', navTier:'Tier list', navTop10:'Top 10',
    pagesEyebrow:'Páginas', pagesTitle:'Explora la tier list y el Top 10 de win rates', homeBuildCopy:'Mejor build con gadget, habilidad estelar y gears recomendados.', viewBuild:'Ver build',
    heroEyebrow:'WEB REAL · SEO + TIER LIST', heroTitle:'Brawl Meta',
    heroText:'Consulta todos los brawlers y revisa su mejor build con gadget, habilidad estelar y gears recomendados.',
    ctaAll:'Ver todos los brawlers', ctaBuilds:'Ver best builds', ctaTier:'Ver tier list', ctaTop10:'Ver top 10',
    liveMode:'Modo', liveApi:'Live API', totalBrawlers:'Brawlers',
    search:'Buscar brawler', searchPlaceholder:'Ej: Spike, Trunk, Janet…',
    rarityFilter:'Filtrar por rareza', allRarities:'Todas',
    allBrawlersEyebrow:'TODOS LOS BRAWLERS', allBrawlersTitle:'Todos los brawlers en una sola web', allBrawlersText:'Cada ficha está pensada para posicionar en Google y llevar tráfico por búsquedas como best build, gadgets, star powers o tier list.', buildsEyebrow:'BEST BUILDS', buildsTitle:'Best builds para cada brawler', buildsText:'Aquí aparecen todos los brawlers con su mejor build: gadget, habilidad estelar y gears recomendados. La tier list y el Top 10 están en páginas separadas.',
    topEyebrow:'TOP 10 WIN RATES', topTitle:'Top meta actual', topText:'Top 10 con adjusted win rate y pick rate.', topPageTitle:'Top 10 de brawlers con mejor win rate', topPageText:'Página dedicada al Top 10 del meta actual con porcentajes de win rate y pick rate. Aquí aparecen todos los porcentajes, separados de la tier list.',
    tierEyebrow:'TIER LIST', tierTitle:'Brawl Stars Tier List', tierText:'Página optimizada para búsquedas tipo “brawl tier list”, “brawl stars tier list” y variaciones relacionadas.',
    readBuild:'Abrir build', bestBuild:'Build recomendado', bestGadget:'Mejor gadget', bestStar:'Mejor habilidad estelar', bestGears:'Mejores gears', overview:'Resumen', rarity:'Rareza', visitTier:'Ir a Tier List', allAbilities:'Todos los gadgets y estelares', recommendedGears:'Gears recomendados', notFound:'No se encontró este brawler.',
    tierPageTitle:'Brawl Stars Tier List', tierPageText:'Esta página de tier list está pensada para posicionar por búsquedas como “brawl tier list” y “brawl stars tier list”. Aquí solo aparece la distribución por tiers, separada del Top 10 con porcentajes.',
    updatedRealTime:'Actualizado', top10Current:'Top 10 del meta actual', browseAll:'Directorio completo de brawlers', tierS:'S Tier', tierA:'A Tier', tierB:'B Tier', tierC:'C Tier', tierD:'D Tier',
    footerCopy:'Fan website. No afiliada a Supercell.', adjustedWR:'Win rate', pickRate:'Pick rate',
    fallbackBuild:'Build por rol', liveBuild:'Build live'
  },
  en: {
    navHome:'Home', navAll:'All brawlers', navBuilds:'Best builds', navTier:'Tier list', navTop10:'Top 10',
    pagesEyebrow:'Pages', pagesTitle:'Explore the tier list and Top 10 win rates', homeBuildCopy:'Best build with recommended gadget, star power and gears.', viewBuild:'View build',
    heroEyebrow:'REAL WEBSITE · SEO + TIER LIST', heroTitle:'Brawl Meta',
    heroText:'Browse all brawlers and review the best build for each one with gadget, star power and recommended gears.',
    ctaAll:'See all brawlers', ctaBuilds:'See best builds', ctaTier:'See tier list', ctaTop10:'See top 10',
    liveMode:'Mode', liveApi:'Live API', totalBrawlers:'Brawlers',
    search:'Search brawler', searchPlaceholder:'Ex: Spike, Trunk, Janet…',
    rarityFilter:'Filter by rarity', allRarities:'All',
    allBrawlersEyebrow:'ALL BRAWLERS', allBrawlersTitle:'Every brawler on one website', allBrawlersText:'Each page is built to rank in Google for searches like best build, gadgets, star powers or tier list.', buildsEyebrow:'BEST BUILDS', buildsTitle:'Best builds for every brawler', buildsText:'Every brawler appears here with the best build: gadget, star power and recommended gears. The tier list and Top 10 stay on separate pages.',
    topEyebrow:'TOP 10 WIN RATES', topTitle:'Current top meta', topText:'Top 10 with adjusted win rate and pick rate.', topPageTitle:'Top 10 highest win rate brawlers', topPageText:'Dedicated page for the current Top 10 with win rate and pick rate percentages. All percentages live here, separate from the tier list.',
    tierEyebrow:'TIER LIST', tierTitle:'Brawl Stars Tier List', tierText:'This page is optimized for searches like “brawl tier list”, “brawl stars tier list” and related variations.',
    readBuild:'Open build', bestBuild:'Recommended build', bestGadget:'Best gadget', bestStar:'Best star power', bestGears:'Best gears', overview:'Overview', rarity:'Rarity', visitTier:'Go to Tier List', allAbilities:'All gadgets and star powers', recommendedGears:'Recommended gears', notFound:'This brawler was not found.',
    tierPageTitle:'Brawl Stars Tier List', tierPageText:'This tier list page is built to rank for searches like “brawl tier list” and “brawl stars tier list”. It only shows the tier distribution, separate from the Top 10 page with percentages.',
    updatedRealTime:'Updated', top10Current:'Current meta top 10', browseAll:'Full brawler directory', tierS:'S Tier', tierA:'A Tier', tierB:'B Tier', tierC:'C Tier', tierD:'D Tier',
    footerCopy:'Fan website. Not affiliated with Supercell.', adjustedWR:'Win rate', pickRate:'Pick rate',
    fallbackBuild:'Role-based build', liveBuild:'Live build'
  }
};

const TOP10_STATS = {
  'Trunk': {wr:'72.5%', pick:'0.42%'},
  'Najia': {wr:'72.0%', pick:'1.91%'},
  'Gigi': {wr:'71.1%', pick:'0.42%'},
  'Ziggy': {wr:'70.7%', pick:'0.71%'},
  'Glowbert': {wr:'70.5%', pick:'1.09%'},
  'Sirius': {wr:'69.7%', pick:'2.92%'},
  'Ollie': {wr:'69.7%', pick:'0.23%'},
  'Jae-yong': {wr:'68.7%', pick:'0.27%'},
  'Finx': {wr:'68.3%', pick:'0.42%'},
  'Rosa': {wr:'67.6%', pick:'0.30%'}
};

const TIER_GROUPS = {
  s: ['Bull','Clancy','Bibi','Najia','Crow','Mortis','Leon','Colt','Sirius'],
  a: ['Trunk','Gigi','Ziggy','Glowbert','Ollie','Jae-yong','Finx','Rosa','Spike','Sandy','Amber','Kit','Cordelius','Meg','Buster'],
  b: ['Surge','Kenji','Draco','Chester','Pearl','Angelo','Berry','Piper','Belle','Sam','Moe','Janet','Alli','Lumi'],
  c: ['Shelly','Colt','Bull','Brock','Barley','Nita','Pam','Frank','Jessie','Rico','Dynamike','Penny'],
  d: ['Tick','Darryl','Jacky','Hank','Doug','Ash','Bonnie','Gus']
};

const IMAGE_OVERRIDES = {
  'sirius':'https://cdn.brawlify.com/brawlers/borderless/16000102.png',
  'najia':'https://cdn.brawlify.com/brawlers/borderless/16000103.png',
  'trunk':'https://cdn.brawlify.com/brawlers/borderless/16000096.png',
  'gigi':'https://cdn.brawlify.com/brawlers/borderless/16000100.png',
  'ziggy':'https://cdn.brawlify.com/brawlers/borderless/16000098.png',
  'glowbert':'https://cdn.brawlify.com/brawlers/borderless/16000101.png',
  'ollie':'https://cdn.brawlify.com/brawlers/borderless/16000090.png',
  'jaeyong':'https://cdn.brawlify.com/brawlers/borderless/16000093.png',
  'finx':'https://cdn.brawlify.com/brawlers/borderless/16000092.png'
};

function currentLang(){ return localStorage.getItem('bm_lang') || 'es'; }
function t(key){ return (I18N[currentLang()] && I18N[currentLang()][key]) || key; }
function updateMetaLang(){
  const lang = currentLang();
  document.documentElement.lang = lang;
}
function setLang(lang){ localStorage.setItem('bm_lang', lang); updateMetaLang(); updateLangButtons(); applyTranslations(); if(document.body.dataset.page==='home') initHome(); if(document.body.dataset.page==='tier') initTier(); if(document.body.dataset.page==='top10') initTop10(); }
function updateLangButtons(){ document.querySelectorAll('[data-lang-btn]').forEach(btn => btn.classList.toggle('active', btn.dataset.langBtn === currentLang())); }
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
}
function initLang(){ updateMetaLang(); updateLangButtons(); applyTranslations(); document.querySelectorAll('[data-lang-btn]').forEach(btn => btn.addEventListener('click', ()=>setLang(btn.dataset.langBtn))); }

function initials(name){ return String(name||'').split(/\s+/).map(s=>s[0]).join('').slice(0,2).toUpperCase(); }
function rarityClass(r){ return String(r||'').toLowerCase().replace(/[^a-z]+/g,'-'); }
function normalize(name){ return String(name||'').toLowerCase().replace(/[^a-z0-9]+/g,''); }
function assetPrefix(){ return location.pathname.includes('/brawlers/') ? '../' : ''; }

let API_CACHE = null;
async function fetchBrawlers(){
  if(API_CACHE) return API_CACHE;
  try{
    const cached = sessionStorage.getItem('bm_api_cache');
    if(cached){ API_CACHE = JSON.parse(cached); return API_CACHE; }
  }catch{}
  try{
    const res = await fetch(API_URL, {cache:'force-cache'});
    const json = await res.json();
    API_CACHE = (json.list || json.data || []);
    try{ sessionStorage.setItem('bm_api_cache', JSON.stringify(API_CACHE)); }catch{}
    return API_CACHE;
  }catch(err){
    console.warn('API error', err);
    return [];
  }
}
function findApiBrawler(name, apiList){ return apiList.find(b => normalize(b.name) === normalize(name)); }
function fallbackImageFromName(name){ return IMAGE_OVERRIDES[normalize(name)] || ''; }
function getImage(apiBrawler, name){
  if(apiBrawler?.imageUrl2) return apiBrawler.imageUrl2;
  if(apiBrawler?.imageUrl) return apiBrawler.imageUrl;
  if(apiBrawler?.imageUrl3) return apiBrawler.imageUrl3;
  if(apiBrawler?.id) return `https://cdn.brawlify.com/brawlers/borderless/${apiBrawler.id}.png`;
  return fallbackImageFromName(name);
}
function chooseFallbackGears(apiBrawler, staticBrawler){
  const type = String(apiBrawler?.class?.name || apiBrawler?.class || staticBrawler?.class?.name || '').toLowerCase();
  if(type.includes('assassin')) return ['speed','damage'];
  if(type.includes('controller')) return ['vision','damage'];
  if(type.includes('sniper') || type.includes('marksman')) return ['damage','vision'];
  if(type.includes('tank')) return ['health','shield'];
  if(type.includes('support')) return ['reload','shield'];
  if(type.includes('artillery') || type.includes('thrower')) return ['damage','reload'];
  return ['damage','shield'];
}
function gearLabel(key){
  const labels = {damage:{es:'Daño',en:'Damage'}, shield:{es:'Escudo',en:'Shield'}, speed:{es:'Velocidad',en:'Speed'}, vision:{es:'Visión',en:'Vision'}, health:{es:'Salud',en:'Health'}, reload:{es:'Recarga',en:'Reload'}};
  return labels[key]?.[currentLang()] || key;
}
function localGear(key){ return {name: gearLabel(key), imageUrl: `${assetPrefix()}images/gears/${key}.png`, local:true}; }
function getBestBuild(apiBrawler, staticBrawler){
  const gadgets = apiBrawler?.gadgets || [];
  const stars = apiBrawler?.starPowers || apiBrawler?.starpowers || [];
  const apiGears = apiBrawler?.gears || [];
  const roleGears = chooseFallbackGears(apiBrawler, staticBrawler).map(localGear);
  return {
    gadget: gadgets[0] || null,
    star: stars[0] || null,
    gadgetAlt: gadgets[1] || null,
    starAlt: stars[1] || null,
    gears: apiGears.length >= 2 ? apiGears.slice(0,2) : roleGears,
    isLive: Boolean(gadgets[0] || stars[0])
  };
}
function avatarMarkup(name, img){ return img ? `<img src="${img}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'fallback\\'>${initials(name)}</div>'">` : `<div class="fallback">${initials(name)}</div>`; }
function metricMarkup(name){ const s = TOP10_STATS[name]; if(!s) return ''; return `<div class="top-stats"><span>${t('adjustedWR')}: <strong>${s.wr}</strong></span><span>${t('pickRate')}: <strong>${s.pick}</strong></span></div>`; }
function buildBrawlerCard(b, api, showStats=false){
  const img = getImage(api, b.name);
  return `<a class="card" href="${window.location.pathname.includes('/brawlers/') ? '../' : ''}brawlers/${b.slug}.html">
    <div class="avatar">${avatarMarkup(b.name, img)}</div>
    <div class="meta">
      <div class="badge ${rarityClass(b.rarity)}">${b.rarity}</div>
      <h3>${b.name}</h3>
      ${showStats ? metricMarkup(b.name) : `<p>${t('readBuild')}</p>`}
    </div>
  </a>`;
}
function truncateText(text, max=88){
  if(!text) return '';
  return text.length > max ? `${text.slice(0, max-1)}…` : text;
}
function buildMiniAbility(item, label){
  return `<div class="mini-build"><div class="mini-kicker">${label}</div><div class="mini-ability"><div class="ability-icon">${item?.imageUrl ? `<img src="${item.imageUrl}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-weight:900\\'>★</span>'">` : '<span style="font-weight:900">★</span>'}</div><div><div class="name">${item?.name || '—'}</div><div class="desc">${truncateText(item?.description || '')}</div></div></div></div>`;
}
function renderGears(gears){
  if(!gears?.length) gears = [localGear('damage'), localGear('shield')];
  return gears.map(g => `<div class="gear-chip"><img src="${g.imageUrl || `${assetPrefix()}images/gears/damage.png`}" alt="${g.name}" onerror="this.src='${assetPrefix()}images/gears/damage.png'"><span>${g.name}</span></div>`).join('');
}
function buildHomeRow(b, api){
  const img = getImage(api, b.name);
  const build = getBestBuild(api, b);
  return `<article class="build-row">
    <div class="avatar">${avatarMarkup(b.name, img)}</div>
    <div class="build-main">
      <div class="badge ${rarityClass(b.rarity)}">${b.rarity}</div>
      <h3>${b.name}</h3>
      <p>${t('homeBuildCopy')}</p>
    </div>
    ${buildMiniAbility(build.gadget, t('bestGadget'))}
    ${buildMiniAbility(build.star, t('bestStar'))}
    <div class="mini-build gears-box"><div class="mini-kicker">${t('recommendedGears')}</div><div class="mini-gears">${renderGears(build.gears)}</div></div>
    <div class="build-link"><a class="btn primary" href="brawlers/${b.slug}.html">${t('viewBuild')}</a></div>
  </article>`;
}
function fillRaritySelect(select){ if(!select) return; const values = ['All', ...new Set(BRAWLERS.map(b=>b.rarity))]; select.innerHTML = values.map(v => `<option value="${v}">${v === 'All' ? t('allRarities') : v}</option>`).join(''); }

async function initHome(){
  const apiList = await fetchBrawlers();
  const grid = document.getElementById('brawler-grid');
  const search = document.getElementById('search');
  const rarity = document.getElementById('rarity');
  fillRaritySelect(rarity);
  const render = () => {
    const q = normalize(search?.value || '');
    const rv = rarity?.value || 'All';
    const filtered = BRAWLERS.filter(b => (rv === 'All' || b.rarity === rv) && (!q || normalize(b.name).includes(q)));
    grid.innerHTML = filtered.map(b => buildHomeRow(b, findApiBrawler(b.name, apiList))).join('');
  };
  render();
  search?.addEventListener('input', render);
  rarity?.addEventListener('change', render);
  const total = document.getElementById('stat-total'); if(total) total.textContent = `${BRAWLERS.length}`;
}

function buildTierMini(name, apiList){
  const b = BRAWLERS.find(x => x.name === name) || {name, rarity:'Mythic', slug:normalize(name)};
  const api = findApiBrawler(name, apiList);
  return `<a class="tier-mini" href="brawlers/${b.slug}.html">
    <div class="avatar">${avatarMarkup(name, getImage(api, name))}</div>
    <div><div class="badge ${rarityClass(b.rarity)}">${b.rarity}</div><h4>${name}</h4></div>
  </a>`;
}
async function initTier(){
  const apiList = await fetchBrawlers();
  for(const key of Object.keys(TIER_GROUPS)){
    const el = document.getElementById(`tier-${key}`);
    if(el) el.innerHTML = TIER_GROUPS[key].map(name => buildTierMini(name, apiList)).join('');
  }
}
async function initTop10(){
  const apiList = await fetchBrawlers();
  const topGrid = document.getElementById('top-grid');
  if(topGrid) topGrid.innerHTML = Object.keys(TOP10_STATS).map(name => { const b = BRAWLERS.find(x => x.name === name) || {name, rarity:'Mythic', slug:normalize(name)}; const api = findApiBrawler(name, apiList); return buildBrawlerCard(b, api, true); }).join('');
}
function renderAbilityCard(item, label, best){
  return `<div class="build-card ${best ? 'best':''}">${best ? '<div class="best-tag">BEST</div>':''}<div class="kicker">${label}</div><div class="ability"><div class="ability-icon">${item?.imageUrl ? `<img src="${item.imageUrl}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-weight:900\\'>★</span>'">` : '<span style="font-weight:900">★</span>'}</div><div><div class="name">${item?.name || '—'}</div><div class="desc">${item?.description || ''}</div></div></div></div>`;
}
async function initBrawlerPage(){
  const apiList = await fetchBrawlers();
  const slug = document.body.dataset.slug;
  const b = BRAWLERS.find(x => x.slug === slug);
  const root = document.getElementById('brawler-root');
  if(!b){ root.innerHTML = `<div class="panel"><h1>${t('notFound')}</h1></div>`; return; }
  const api = findApiBrawler(b.name, apiList) || {};
  const build = getBestBuild(api, b);
  document.title = `${b.name} Build, Gadgets, Star Powers & Gears | Brawl Meta`;
  const img = getImage(api, b.name);
  root.innerHTML = `
    <div class="breadcrumbs"><a href="../index.html">Brawl Meta</a> / <a href="../tier.html">${t('navTier')}</a> / ${b.name}</div>
    <section class="section">
      <div class="brawler-hero">
        <div class="featured-avatar">${img ? `<img src="${img}" alt="${b.name}" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'big-fallback\\'>${initials(b.name)}</div>'">` : `<div class="big-fallback">${initials(b.name)}</div>`}</div>
        <div class="panel">
          <div class="badge ${rarityClass(b.rarity)}">${b.rarity}</div>
          <h1>${b.name}</h1>
          <p class="text-block">${b.name} appears in the current Brawl Stars roster and this page targets searches like “${b.name.toLowerCase()} build”, “best ${b.name.toLowerCase()} gadget” and “${b.name.toLowerCase()} star power”. It is part of the full Brawl Meta directory built around brawlers, builds and the Brawl Stars tier list.</p>
          <div class="info-blocks">
            <div class="small-card"><div class="label">${t('rarity')}</div><div class="value">${b.rarity}</div></div>
            <div class="small-card"><div class="label">${t('bestBuild')}</div><div class="value">${build.isLive ? t('liveBuild') : t('fallbackBuild')}</div></div>
            <div class="small-card"><div class="label">${t('visitTier')}</div><div class="value"><a href="../tier.html">Tier List</a></div></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><div class="kicker">${t('bestBuild')}</div><h2>${b.name} build</h2></div></div>
      <div class="build-grid">
        ${renderAbilityCard(build.gadget, t('bestGadget'), true)}
        ${renderAbilityCard(build.star, t('bestStar'), true)}
        <div class="build-card"><div class="kicker">${t('recommendedGears')}</div><div class="gears">${renderGears(build.gears)}</div></div>
        <div class="build-card"><div class="kicker">SEO</div><div class="text-block">This page exists so Brawl Meta can rank for <strong>${b.name}</strong> searches while still linking back to the main <a href="../tier.html">Brawl Stars tier list</a> and the full brawler directory.</div></div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><div class="kicker">${t('allAbilities')}</div><h2>${b.name} gadgets & star powers</h2></div></div>
      <div class="build-grid">
        ${renderAbilityCard(build.gadgetAlt || build.gadget, 'Gadget', false)}
        ${renderAbilityCard(build.starAlt || build.star, 'Star Power', false)}
        <div class="build-card"><div class="kicker">Google</div><div class="text-block">Related searches: best ${b.name.toLowerCase()} build, ${b.name.toLowerCase()} gadget, ${b.name.toLowerCase()} star power, ${b.name.toLowerCase()} gears, ${b.name.toLowerCase()} tier list.</div></div>
        <div class="build-card"><div class="kicker">Internal links</div><div class="text-block"><a href="../index.html">Home</a> · <a href="../tier.html">Tier List</a> · <a href="../top10.html">Top 10</a></div></div>
      </div>
    </section>`;
}

window.addEventListener('DOMContentLoaded', async ()=>{
  initLang();
  if(document.body.dataset.page === 'home') await initHome();
  if(document.body.dataset.page === 'tier') await initTier();
  if(document.body.dataset.page === 'top10') await initTop10();
  if(document.body.dataset.page === 'brawler') await initBrawlerPage();
});
