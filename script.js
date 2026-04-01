const API_CANDIDATES = [
  'https://api.brawlapi.com/v1/brawlers',
  'https://api.brawlapi.com/v1/brawlers/'
];


function normalizeNameKey(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}


const CANONICAL_RARITIES = {
  'Shelly': 'Starting Brawler',
  'Colt': 'Rare', 'Bull': 'Rare', 'Brock': 'Rare', 'Barley': 'Rare', 'Nita': 'Rare', 'El Primo': 'Rare', 'Poco': 'Rare', 'Rosa': 'Rare',
  'Rico': 'Super Rare', 'Jessie': 'Super Rare', 'Dynamike': 'Super Rare', 'Darryl': 'Super Rare', 'Penny': 'Super Rare', 'Tick': 'Super Rare', 'Carl': 'Super Rare', '8-BIT': 'Super Rare', 'Jacky': 'Super Rare', 'Gus': 'Super Rare',
  'Bo': 'Epic', 'Piper': 'Epic', 'Pam': 'Epic', 'Frank': 'Epic', 'Bibi': 'Epic', 'Bea': 'Epic', 'Emz': 'Epic', 'Gale': 'Epic', 'Nani': 'Epic', 'Colette': 'Epic', 'Edgar': 'Epic', 'Stu': 'Epic', 'Belle': 'Epic', 'Grom': 'Epic', 'Griff': 'Epic', 'Ash': 'Epic', 'Lola': 'Epic', 'Bonnie': 'Epic', 'Sam': 'Epic', 'Mandy': 'Epic', 'Maisie': 'Epic', 'Hank': 'Epic', 'Pearl': 'Epic', 'Larry & Lawrie': 'Epic', 'Angelo': 'Epic', 'Berry': 'Epic', 'Shade': 'Epic', 'Meeple': 'Epic', 'Trunk': 'Epic',
  'Mortis': 'Mythic', 'Tara': 'Mythic', 'Gene': 'Mythic', 'Mr. P': 'Mythic', 'Max': 'Mythic', 'Sprout': 'Mythic', 'Lou': 'Mythic', 'Byron': 'Mythic', 'Ruffs': 'Mythic', 'Squeak': 'Mythic', 'Buzz': 'Mythic', 'Fang': 'Mythic', 'Eve': 'Mythic', 'Janet': 'Mythic', 'Otis': 'Mythic', 'Buster': 'Mythic', 'Gray': 'Mythic', 'R-T': 'Mythic', 'Willow': 'Mythic', 'Doug': 'Mythic', 'Chuck': 'Mythic', 'Charlie': 'Mythic', 'Mico': 'Mythic', 'Melodie': 'Mythic', 'Lily': 'Mythic', 'Clancy': 'Mythic', 'Moe': 'Mythic', 'Juju': 'Mythic', 'Ollie': 'Mythic', 'Lumi': 'Mythic', 'Finx': 'Mythic', 'Jae-Yong': 'Mythic', 'Alli': 'Mythic', 'Mina': 'Mythic', 'Ziggy': 'Mythic', 'Gigi': 'Mythic', 'Glowbert': 'Mythic', 'Najia': 'Mythic',
  'Spike': 'Legendary', 'Crow': 'Legendary', 'Leon': 'Legendary', 'Sandy': 'Legendary', 'Surge': 'Legendary', 'Amber': 'Legendary', 'Meg': 'Legendary', 'Chester': 'Legendary', 'Cordelius': 'Legendary', 'Kit': 'Legendary', 'Draco': 'Legendary', 'Kenji': 'Legendary', 'Pierce': 'Legendary',
  'Kaze': 'Ultra Legendary', 'Sirius': 'Ultra Legendary'
};

const CANONICAL_NAME_MAP = Object.fromEntries(
  Object.keys(CANONICAL_RARITIES).map(name => [normalizeNameKey(name), name])
);

function canonicalNameFor(name) {
  return CANONICAL_NAME_MAP[normalizeNameKey(name)] || null;
}


const RARITY_LABELS = {
  es: {'Starting Brawler':'Brawler inicial','Rare':'Especial','Super Rare':'Superespecial','Epic':'Épico','Mythic':'Mítico','Legendary':'Legendario','Ultra Legendary':'Ultralegendario'},
  en: {'Starting Brawler':'Starting Brawler','Rare':'Rare','Super Rare':'Super Rare','Epic':'Epic','Mythic':'Mythic','Legendary':'Legendary','Ultra Legendary':'Ultra Legendary'}
};
const RARITY_ORDER = ['Starting Brawler','Rare','Super Rare','Epic','Mythic','Legendary','Ultra Legendary'];
function canonicalizeRarity(name, rarity) {
  const canonicalName = canonicalNameFor(name);
  if (canonicalName && CANONICAL_RARITIES[canonicalName]) return CANONICAL_RARITIES[canonicalName];
  const normalized = String(rarity || '').trim().toLowerCase();
  if (normalized === 'common' || normalized === 'starting brawler' || normalized === 'starter') return 'Starting Brawler';
  if (normalized === 'rare') return 'Rare';
  if (normalized === 'super rare' || normalized === 'superrare') return 'Super Rare';
  if (normalized === 'epic') return 'Epic';
  if (normalized === 'mythic') return 'Mythic';
  if (normalized === 'legendary') return 'Legendary';
  if (normalized === 'ultra legendary' || normalized === 'ultralegendary') return 'Ultra Legendary';
  return rarity || 'Unknown';
}
function rarityLabel(rarity) { return RARITY_LABELS[state.lang]?.[rarity] || rarity; }

const I18N = {
  es: {
    nav: { home: 'Inicio', all: 'Todos los brawlers', tier: 'Tier list' },
    hero: {
      eyebrow: 'WEB REAL · DATOS DINÁMICOS',
      copy: `Consulta todos los brawlers, entra en cada ficha y mira sus <strong>2 gadgets</strong> y sus <strong>2 habilidades estelares</strong>. Entra a cada brawler y mira rápidamente su mejor gadget, su mejor estelar y los 2 gears recomendados.`,
      ctaAll: 'Ver todos los brawlers',
      ctaAbout: 'Ver tier list'
    },
    stats: { mode: 'Modo', tier: 'Tier list', updated: 'Actualizado' },
    controls: {
      searchLabel: 'Buscar brawler',
      searchPlaceholder: 'Ej: Spike, Trunk, Janet...',
      rarityLabel: 'Filtrar por rareza',
      allRarities: 'Todas'
    },
    sections: { allEyebrow: 'TODOS LOS BRAWLERS' },
    seo: {
      title: 'Mejores builds de Brawl Stars',
      copy: 'Brawl Meta te ayuda a encontrar el mejor gadget, la mejor estelar y los mejores refuerzos para cada brawler. Abre cada perfil, compara las dos opciones y usa la tier list para ver qué picks son más fuertes en el meta actual.'
    },
    detail: {
      back: '← Volver',
      gadgetsEyebrow: 'GADGETS',
      gadgetsTitle: 'Los 2 gadgets',
      starEyebrow: 'HABILIDADES ESTELARES',
      starTitle: 'Las 2 estelares',
      brawlerSheet: 'FICHA DE BRAWLER',
      buildEyebrow: 'MEJOR BUILD',
      buildTitle: 'Build recomendado'
    },
    about: {
      eyebrow: 'METODOLOGÍA',
      title: 'Cómo está montada esta versión',
      copy: 'Esta versión ya no depende de una lista escrita a mano. Carga los brawlers desde una API pública e intenta usar la imagen real del brawler, de los 2 gadgets y de las 2 habilidades estelares. Cuando una ruta concreta no responde, hace fallback sin romper la ficha.',
      li1: 'Home con todos los brawlers y buscador',
      li2: 'Ficha individual con gadgets y estelares',
      li3: 'Imágenes reales cuando la API las devuelve directamente',
      li4: 'Fallback a rutas CDN por ID o path'
    },
    ui: {
      loading: 'Cargando...',
      loadingBrawlers: 'Cargando brawlers...',
      allLoaded: 'Lista completa cargada.',
      filteredOf: 'Filtrados de {total}.',
      countBrawlers: '{count} brawlers',
      abilitiesSummary: '2 gadgets + 2 estelares',
      openCard: 'Abrir ficha →',
      gadgetsCount: '{gadgets} gadgets · {stars} estelares',
      detailTagsGadgets: '{count} gadgets',
      detailTagsStars: '{count} estelares',
      noAbilities: 'No se han encontrado {type} para este brawler.',
      noDescription: 'Sin descripción disponible en la respuesta actual.',
      apiErrorTitle: 'Error cargando datos',
      apiErrorBody: 'No he podido cargar los brawlers desde la API pública. Prueba a abrir la web con Live Server en VS Code o vuelve a intentarlo más tarde.',
      apiErrorStatus: 'La base visual está hecha, pero la API no ha respondido desde este entorno.'
    },
    labels: {
      gadget: 'Gadget',
      starPower: 'Habilidad estelar',
      gearDamage: 'Daño',
      gearShield: 'Escudo',
      gearSpeed: 'Velocidad',
      gearVision: 'Visión',
      gearHealth: 'Salud',
      gearReload: 'Recarga',
      buildReasonBest: 'Recomendado como opción principal',
      buildReasonAlt: 'Alternativa útil según mapa o modo',
      allLabel: 'Habilidades'
    }
  },
  en: {
    nav: { home: 'Home', all: 'All brawlers', tier: 'Tier list' },
    hero: {
      eyebrow: 'REAL WEBSITE · LIVE DATA',
      copy: `Browse all brawlers, open each profile and check the <strong>2 gadgets</strong> and <strong>2 star powers</strong>. Open each brawler and quickly see the best gadget, best star power and the 2 recommended gears.`,
      ctaAll: 'See all brawlers',
      ctaAbout: 'View tier list'
    },
    stats: { mode: 'Mode', tier: 'Tier list', updated: 'Updated' },
    controls: {
      searchLabel: 'Search brawler',
      searchPlaceholder: 'Ex: Spike, Trunk, Janet...',
      rarityLabel: 'Filter by rarity',
      allRarities: 'All'
    },
    sections: { allEyebrow: 'ALL BRAWLERS' },
    seo: {
      title: 'Best Brawl Stars Builds',
      copy: 'Brawl Meta helps you find the best gadget, star power and gears for each brawler. Open each profile, compare both options and use the tier list to see which picks are strongest in the current meta.'
    },
    detail: {
      back: '← Back',
      gadgetsEyebrow: 'GADGETS',
      gadgetsTitle: 'The 2 gadgets',
      starEyebrow: 'STAR POWERS',
      starTitle: 'The 2 star powers',
      brawlerSheet: 'BRAWLER PROFILE',
      buildEyebrow: 'BEST BUILD',
      buildTitle: 'Recommended build'
    },
    about: {
      eyebrow: 'METHODOLOGY',
      title: 'How this version is built',
      copy: 'This version no longer depends on a hand-written list. It loads brawlers from a public API and tries to use the real image for the brawler, the 2 gadgets and the 2 star powers. When a specific route fails, it falls back without breaking the profile.',
      li1: 'Home with all brawlers and search',
      li2: 'Individual profile with gadgets and star powers',
      li3: 'Real images when the API returns them directly',
      li4: 'Fallback to CDN routes by ID or path'
    },
    ui: {
      loading: 'Loading...',
      loadingBrawlers: 'Loading brawlers...',
      allLoaded: 'Full list loaded.',
      filteredOf: 'Filtered from {total}.',
      countBrawlers: '{count} brawlers',
      abilitiesSummary: '2 gadgets + 2 star powers',
      openCard: 'Open profile →',
      gadgetsCount: '{gadgets} gadgets · {stars} star powers',
      detailTagsGadgets: '{count} gadgets',
      detailTagsStars: '{count} star powers',
      noAbilities: 'No {type} were found for this brawler.',
      noDescription: 'No description available in the current response.',
      apiErrorTitle: 'Error loading data',
      apiErrorBody: 'I could not load the brawlers from the public API. Try opening the site with Live Server in VS Code or try again later.',
      apiErrorStatus: 'The visual base is ready, but the API did not respond from this environment.'
    },
    labels: {
      gadget: 'Gadget',
      starPower: 'Star power',
      gearDamage: 'Damage',
      gearShield: 'Shield',
      gearSpeed: 'Speed',
      gearVision: 'Vision',
      gearHealth: 'Health',
      gearReload: 'Reload',
      buildReasonBest: 'Recommended main option',
      buildReasonAlt: 'Useful alternative depending on map or mode',
      allLabel: 'Habilidades'
    }
  }
};


const SUPPLEMENTAL_BRAWLERS = [
  {
    id: 16000102,
    name: 'Sirius',
    rarity: 'Ultra Legendary',
    class: { name: 'Controller' },
    description: 'Sirius is an Ultra Legendary Controller brawler.',
    imageUrl2: 'https://cdn.brawlify.com/brawlers/borderless/16000102.png',
    gadgets: [],
    starPowers: []
  },
  {
    id: 16000103,
    name: 'Najia',
    rarity: 'Mythic',
    class: { name: 'Damage Dealer' },
    description: 'Najia is a Mythic brawler.',
    imageUrl2: 'https://cdn.brawlify.com/brawlers/borderless/16000103.png',
    gadgets: [],
    starPowers: []
  }
];

function mergeSupplementalBrawlers(list) {
  const merged = [...list];
  const existing = new Set(merged.map(item => normalizeNameKey(item.name)));
  for (const raw of SUPPLEMENTAL_BRAWLERS) {
    const key = normalizeNameKey(raw.name);
    if (!existing.has(key)) {
      merged.push(raw);
      existing.add(key);
    }
  }
  return merged;
}


const GEAR_META = {
  damage: { icon: 'images/gears/damage.png', es: 'Daño', en: 'Damage', copyEs: 'Más presión para asegurar eliminaciones.', copyEn: 'More pressure to secure takedowns.' },
  shield: { icon: 'images/gears/shield.png', es: 'Escudo', en: 'Shield', copyEs: 'Más supervivencia en intercambios directos.', copyEn: 'More survivability in direct fights.' },
  speed: { icon: 'images/gears/speed.png', es: 'Velocidad', en: 'Speed', copyEs: 'Mejor entrada, salida y control del espacio.', copyEn: 'Better engages, exits and space control.' },
  vision: { icon: 'images/gears/vision.png', es: 'Visión', en: 'Vision', copyEs: 'Muy fuerte para arbustos y control de mapa.', copyEn: 'Great for bushes and map control.' },
  health: { icon: 'images/gears/health.png', es: 'Salud', en: 'Health', copyEs: 'Recupera vida más rápido y aguanta mejor.', copyEn: 'Recover health faster and stay alive longer.' },
  reload: { icon: 'images/gears/reload.png', es: 'Recarga', en: 'Reload', copyEs: 'Mantiene la presión con más ritmo.', copyEn: 'Keeps pressure up with faster cycling.' }
};

const BUILD_OVERRIDES = {
  'leon': { gears: ['speed','damage'] },
  'sandy': { gears: ['vision','damage'] },
  'crow': { gears: ['damage','shield'] },
  'spike': { gears: ['damage','shield'] },
  'amber': { gears: ['damage','reload'] },
  'chester': { gears: ['damage','shield'] },
  'kit': { gears: ['damage','shield'] },
  'meg': { gears: ['damage','shield'] },
  'cordelius': { gears: ['speed','damage'] },
  'kenji': { gears: ['speed','damage'] },
  'draco': { gears: ['damage','shield'] },
  'rico': { gears: ['damage','reload'] },
  'piper': { gears: ['damage','vision'] },
  'belle': { gears: ['damage','vision'] },
  'mandy': { gears: ['damage','vision'] },
  'angelo': { gears: ['damage','vision'] },
  'gene': { gears: ['vision','damage'] },
  'sirius': { gears: ['vision','damage'] },
  'najia': { gears: ['damage','vision'] },
  'rosa': { gears: ['speed','health'] },
  'bull': { gears: ['health','shield'] },
  'el-primo': { gears: ['health','shield'] },
  'frank': { gears: ['health','shield'] },
  'jacky': { gears: ['health','shield'] },
  'doug': { gears: ['health','shield'] },
  'trunk': { gears: ['damage','shield'] }
};



const ABILITY_KEYWORD_OVERRIDES = {
  'leon': { gadget: ['lollipop', 'clone'], starPower: ['invisiheal', 'smoke trails'] },
  'spike': { gadget: ['life plant'], starPower: ['curveball', 'fertilize'] },
  'crow': { gadget: ['slowing toxin', 'defense booster'], starPower: ['extra toxic', 'carrion crow'] },
  'sandy': { gadget: ['sweet dreams'], starPower: ['rude sands', 'healing winds'] },
  'amber': { gadget: ['fire starters'], starPower: ['wild flames'] },
  'meg': { gadget: ['toolbox'], starPower: ['force field'] },
  'chester': { gadget: ['candy beans'], starPower: ['bellomania'] },
  'cordelius': { gadget: ['replanting'], starPower: ['comboshrooms'] },
  'kit': { gadget: ['cardboard box'], starPower: ['power hungry', 'overly attached'] },
  'kenji': { gadget: ['hosomaki healing'], starPower: ['studied the blade'] },
  'piper': { gadget: ['auto aimer'], starPower: ['snappy sniping'] },
  'belle': { gadget: ['nest egg'], starPower: ['positive feedback'] },
  'mandy': { gadget: ['caramelize'], starPower: ['in my sights'] },
  'gene': { gadget: ['lamp blowout'], starPower: ['magic puffs'] },
  'rosa': { gadget: ['unfriendly bushes'], starPower: ['plant life'] },
  'bull': { gadget: ['t-bone injector'], starPower: ['tough guy'] },
  'el-primo': { gadget: ['suplex supplement'], starPower: ['meteor rush'] },
  'frank': { gadget: ['active noise canceling'], starPower: ['sponge'] },
  'rico': { gadget: ['multiball launcher'], starPower: ['super bouncy'] },
  'sirius': { gadget: ['super', 'vision', 'reveal'], starPower: ['shield', 'control', 'damage'] },
  'najia': { gadget: ['poison', 'jar', 'puddles'], starPower: ['venom', 'poison', 'protector'] },
  'trunk': { gadget: ['worker ants', 'queen'], starPower: ['overlords', 'colony'] }
};

const state = {
  all: [],
  filtered: [],
  loaded: false,
  current: null,
  lang: localStorage.getItem('brawlmeta_lang') || 'es'
};

const els = {
  homeView: document.getElementById('homeView'),
  detailView: document.getElementById('detailView'),
  grid: document.getElementById('grid'),
  searchInput: document.getElementById('searchInput'),
  raritySelect: document.getElementById('raritySelect'),
  gridTitle: document.getElementById('gridTitle'),
  statusText: document.getElementById('statusText'),
  heroCount: document.getElementById('heroCount'),
  detailHero: document.getElementById('detailHero'),
  gadgetsGrid: document.getElementById('gadgetsGrid'),
  starPowersGrid: document.getElementById('starPowersGrid'),
  backButton: document.getElementById('backButton'),
  cardTemplate: document.getElementById('brawlerCardTemplate'),
  abilityTemplate: document.getElementById('abilityCardTemplate'),
  langButtons: [...document.querySelectorAll('.lang-btn')],
  heroTierText: document.getElementById('heroTierText'),
  heroUpdatedText: document.getElementById('heroUpdatedText'),
  recommendedBuild: document.getElementById('recommendedBuild')
};

function t(path, vars = {}) {
  const value = path.split('.').reduce((acc, key) => acc?.[key], I18N[state.lang]);
  const text = value ?? path;
  if (typeof text !== 'string') return text;
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    node.innerHTML = t(key);
  });

  els.searchInput.placeholder = t('controls.searchPlaceholder');
  els.backButton.textContent = t('detail.back');
  if (els.heroTierText) els.heroTierText.textContent = state.lang === 'es' ? 'Top meta + S/A/B/C/D' : 'Top meta + S/A/B/C/D';
  if (els.heroUpdatedText) els.heroUpdatedText.textContent = state.lang === 'es' ? 'Diario' : 'Daily';
  document.title = state.lang === 'es'
    ? 'Brawl Meta - Mejores builds, gadgets, estelares y tier list'
    : 'Brawl Meta - Best builds, gadgets, star powers and tier list';

  const allOption = els.raritySelect.querySelector('option[value="all"]');
  if (allOption) allOption.textContent = t('controls.allRarities');

  els.langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function loadBrawlers() {
  let data;
  let lastError;

  for (const url of API_CANDIDATES) {
    try {
      data = await fetchJson(url);
      break;
    } catch (err) {
      lastError = err;
    }
  }

  if (!data) {
    throw lastError || new Error('API unavailable');
  }

  const list = mergeSupplementalBrawlers(Array.isArray(data)
    ? data
    : Array.isArray(data.list)
      ? data.list
      : Array.isArray(data.items)
        ? data.items
        : []);

  if (!list.length) throw new Error('Empty API response');

  const normalized = list
    .map(normalizeBrawler)
    .filter(Boolean);

  const seen = new Set();
  state.all = normalized
    .filter((b) => {
      const key = normalizeNameKey(b.name);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => {
      const rarityCmp = RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity);
      return rarityCmp || a.name.localeCompare(b.name);
    });

  state.filtered = [...state.all];
  state.loaded = true;
}

function normalizeBrawler(raw) {
  const canonicalName = canonicalNameFor(raw.name);
  if (!canonicalName) return null;
  if (canonicalName === 'Buzz Lightyear') return null;

  let rarity = canonicalizeRarity(canonicalName, raw.rarity?.name || raw.rarity || 'Unknown');
  if (canonicalName === 'Sirius' || canonicalName === 'Kaze') rarity = 'Ultra Legendary';
  const bClass = raw.class?.name || raw.class || 'Unknown class';
  const gadgets = normalizeAbilities(raw.gadgets || [], 'gadget');
  const starPowers = normalizeAbilities(raw.starPowers || raw.star_powers || [], 'star-power');
  return {
    id: raw.id,
    name: canonicalName,
    slug: slugify(canonicalName),
    rarity,
    className: bClass,
    description: raw.description || raw.descriptionHtml || `${canonicalName} in Brawl Stars`,
    portrait: pickBrawlerImage(raw),
    gadgets,
    starPowers
  };
}

function normalizeAbilities(items, kind) {
  return items.map((item, index) => ({
    id: item.id || `${kind}-${index}`,
    kind,
    name: item.name || 'Unknown',
    description: stripHtml(item.description || item.descriptionHtml || ''),
    image: pickAbilityImage(item, kind),
    path: item.path || item.hash || item.name || ''
  }));
}

function pickBrawlerImage(raw) {
  return raw.imageUrl2 || raw.imageUrl || raw.imageUrl3 || `https://cdn.brawlify.com/brawlers/borderless/${raw.id}.png`;
}

function pickAbilityImage(item, kind) {
  if (item.imageUrl) return item.imageUrl;
  const folder = kind === 'gadget' ? 'gadgets' : 'star-powers';
  if (item.path) return `https://cdn.brawlify.com/${folder}/${item.path}.png`;
  if (item.name) return `https://cdn.brawlify.com/${folder}/${toPath(item.name)}.png`;
  return '';
}

function stripHtml(value) {
  const tmp = document.createElement('div');
  tmp.innerHTML = value;
  return tmp.textContent?.trim() || '';
}

function toPath(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function slugify(value) {
  return toPath(value).toLowerCase();
}

function rarityClassName(rarity) {
  const key = String(rarity).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `rarity-${key}`;
}

function renderFilters() {
  const current = els.raritySelect.value;
  els.raritySelect.innerHTML = `<option value="all">${t('controls.allRarities')}</option>`;
  const rarities = [...new Set(state.all.map(b => b.rarity))].sort((a, b) => (RARITY_ORDER.indexOf(a) - RARITY_ORDER.indexOf(b)) || a.localeCompare(b));
  for (const rarity of rarities) {
    const opt = document.createElement('option');
    opt.value = rarity;
    opt.textContent = rarityLabel(rarity);
    els.raritySelect.appendChild(opt);
  }
  if ([...els.raritySelect.options].some(o => o.value === current)) {
    els.raritySelect.value = current;
  }
}

function applyFilters() {
  const q = els.searchInput.value.trim().toLowerCase();
  const rarity = els.raritySelect.value;
  state.filtered = state.all.filter(b => {
    const matchQ = !q || b.name.toLowerCase().includes(q);
    const matchRarity = rarity === 'all' || b.rarity === rarity;
    return matchQ && matchRarity;
  });
  renderGrid();
}

function renderGrid() {
  els.grid.innerHTML = '';
  els.gridTitle.textContent = t('ui.countBrawlers', { count: state.filtered.length });
  els.statusText.textContent = state.filtered.length === state.all.length
    ? t('ui.allLoaded')
    : t('ui.filteredOf', { total: state.all.length });

  for (const brawler of state.filtered) {
    const node = els.cardTemplate.content.firstElementChild.cloneNode(true);
    const img = node.querySelector('.portrait');
    img.src = brawler.portrait;
    img.alt = brawler.name;
    img.addEventListener('error', () => {
      img.src = makeFallback(brawler.name, '#ff9b5c', '#6c2d12');
      img.classList.add('fallback');
    }, { once: true });

    const pill = node.querySelector('.rarity-pill');
    pill.textContent = rarityLabel(brawler.rarity);
    pill.classList.add(rarityClassName(brawler.rarity));

    node.querySelector('h3').textContent = brawler.name;
    node.querySelector('.class-line').textContent = brawler.className;
    node.querySelector('.ability-count').textContent = t('ui.gadgetsCount', {
      gadgets: brawler.gadgets.length,
      stars: brawler.starPowers.length
    });
    node.querySelector('.open-link').textContent = t('ui.openCard');
    node.addEventListener('click', () => {
      location.hash = `#brawler/${brawler.slug}`;
    });
    els.grid.appendChild(node);
  }
}


function renderDetail(brawler) {
  state.current = brawler;
  const build = recommendBuild(brawler);
  els.detailHero.innerHTML = `
    <div class="detail-portrait"><img id="detailPortrait" alt="${escapeHtml(brawler.name)}" src="${escapeHtml(brawler.portrait)}"></div>
    <div>
      <p class="detail-kicker">${escapeHtml(t('detail.brawlerSheet'))}</p>
      <h2 class="detail-title">${escapeHtml(brawler.name)}</h2>
      <p class="detail-sub">${escapeHtml(brawler.description)}</p>
      <div class="detail-tags">
        <span class="detail-tag ${escapeHtml(rarityClassName(brawler.rarity))}">${escapeHtml(rarityLabel(brawler.rarity))}</span>
        <span class="detail-tag">${escapeHtml(brawler.className)}</span>
        <span class="detail-tag">${escapeHtml(t('ui.detailTagsGadgets', { count: brawler.gadgets.length }))}</span>
        <span class="detail-tag">${escapeHtml(t('ui.detailTagsStars', { count: brawler.starPowers.length }))}</span>
      </div>
    </div>
  `;

  const detailPortrait = document.getElementById('detailPortrait');
  detailPortrait.addEventListener('error', () => {
    detailPortrait.src = makeFallback(brawler.name, '#ff9b5c', '#6c2d12');
    detailPortrait.classList.add('fallback');
  }, { once: true });

  renderRecommendedBuild(build);
  renderAbilityGrid(els.gadgetsGrid, brawler.gadgets, 'gadget', build.bestGadget?.id);
  renderAbilityGrid(els.starPowersGrid, brawler.starPowers, 'starPower', build.bestStarPower?.id);
}



function renderAbilityGrid(container, items, kind, bestId) {
  container.innerHTML = '';
  if (!items.length) {
    container.innerHTML = `<div class="error-card">${escapeHtml(t('ui.noAbilities', { type: kind === 'gadget' ? t('labels.gadget').toLowerCase() : t('labels.starPower').toLowerCase() }))}</div>`;
    return;
  }

  const ordered = [...items].sort((a, b) => {
    const aBest = a.id === bestId ? 1 : 0;
    const bBest = b.id === bestId ? 1 : 0;
    return bBest - aBest;
  });

  for (const item of ordered) {
    const node = els.abilityTemplate.content.firstElementChild.cloneNode(true);
    const img = node.querySelector('.ability-icon');
    img.src = item.image;
    img.alt = item.name;
    img.addEventListener('error', () => {
      const hueA = kind === 'gadget' ? '#4cd97b' : '#ffd166';
      const hueB = kind === 'gadget' ? '#216b42' : '#735015';
      img.src = makeFallback(item.name, hueA, hueB);
      img.classList.add('fallback');
    }, { once: true });

    const isBest = item.id === bestId;
    if (isBest) {
      node.classList.add('is-best');
    }
    const badge = node.querySelector('.best-badge');
    badge.remove();

    node.querySelector('.ability-type').textContent = kind === 'gadget' ? t('labels.gadget') : t('labels.starPower');
    node.querySelector('.ability-name').textContent = item.name;
    node.querySelector('.ability-description').textContent = item.description || t('ui.noDescription');
    container.appendChild(node);
  }
}



function renderRecommendedBuild(build) {
  els.recommendedBuild.innerHTML = '';
  const picks = [
    {
      title: t('labels.gadget'),
      ability: build.bestGadget,
      altText: t('buildReasonBest', {}),
      iconFallbackA: '#4cd97b',
      iconFallbackB: '#216b42'
    },
    {
      title: t('labels.starPower'),
      ability: build.bestStarPower,
      altText: t('buildReasonBest', {}),
      iconFallbackA: '#ffd166',
      iconFallbackB: '#735015'
    }
  ];

  for (const entry of picks) {
    if (!entry.ability) continue;
    const card = document.createElement('article');
    card.className = 'build-pick is-best';
    card.innerHTML = `
      <span class="pick-badge">${escapeHtml(state.lang === 'es' ? 'BEST' : 'BEST')}</span>
      <div class="ability-icon-wrap">
        <img class="ability-icon" alt="${escapeHtml(entry.ability.name)}" src="${escapeHtml(entry.ability.image)}">
      </div>
      <div>
        <p class="build-pick-title">${escapeHtml(entry.title)}</p>
        <h4 class="build-pick-name">${escapeHtml(entry.ability.name)}</h4>
        <p class="build-pick-copy">${escapeHtml(entry.ability.description || t('labels.buildReasonBest'))}</p>
      </div>
    `;
    const img = card.querySelector('img');
    img.addEventListener('error', () => {
      img.src = makeFallback(entry.ability.name, entry.iconFallbackA, entry.iconFallbackB);
      img.classList.add('fallback');
    }, { once: true });
    els.recommendedBuild.appendChild(card);
  }

  const gears = document.createElement('article');
  gears.className = 'build-pick';
  const gearRows = build.gears.map(gearKey => {
    const gear = GEAR_META[gearKey];
    if (!gear) return '';
    const name = state.lang === 'es' ? gear.es : gear.en;
    const copy = state.lang === 'es' ? gear.copyEs : gear.copyEn;
    return `<div class="gear-chip">
      <img src="${escapeHtml(gear.icon)}" alt="${escapeHtml(name)}">
      <div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(copy)}</span></div>
    </div>`;
  }).join('');
  gears.innerHTML = `
    <div class="ability-icon-wrap">
      <img class="ability-icon" alt="Gears" src="${escapeHtml(GEAR_META[build.gears[0]]?.icon || '')}">
    </div>
    <div>
      <p class="build-pick-title">${escapeHtml(state.lang === 'es' ? 'REFUERZOS' : 'GEARS')}</p>
      <h4 class="build-pick-name">${escapeHtml(state.lang === 'es' ? '2 refuerzos recomendados' : '2 recommended gears')}</h4>
      <div class="gears-row">${gearRows}</div>
    </div>
  `;
  const lead = gears.querySelector('.ability-icon');
  if (lead) {
    lead.addEventListener('error', () => {
      lead.src = makeFallback('G', '#76c1ff', '#325bb9');
      lead.classList.add('fallback');
    }, { once: true });
  }
  els.recommendedBuild.appendChild(gears);
}

function recommendBuild(brawler) {
  const role = normalizeRole(brawler.className);
  const slug = brawler.slug;
  const gadgetScores = brawler.gadgets.map(item => ({ item, score: scoreAbility(item, role, 'gadget', brawler) }));
  const starScores = brawler.starPowers.map(item => ({ item, score: scoreAbility(item, role, 'starPower', brawler) }));

  gadgetScores.sort((a,b) => b.score - a.score);
  starScores.sort((a,b) => b.score - a.score);

  const override = BUILD_OVERRIDES[slug];
  const gears = override?.gears || defaultGearsForRole(role, slug);

  return {
    bestGadget: gadgetScores[0]?.item || null,
    bestStarPower: starScores[0]?.item || null,
    gears
  };
}

function normalizeRole(value) {
  const role = String(value || '').toLowerCase();
  if (role.includes('assassin')) return 'assassin';
  if (role.includes('tank')) return 'tank';
  if (role.includes('marksman') || role.includes('sniper')) return 'marksman';
  if (role.includes('controller')) return 'controller';
  if (role.includes('support')) return 'support';
  if (role.includes('artillery') || role.includes('thrower')) return 'artillery';
  return 'damage';
}


function scoreAbility(item, role, kind, brawler) {
  const text = `${item.name || ''} ${item.description || ''}`.toLowerCase();
  let score = 0;
  const add = (n, words) => { if (words.some(w => text.includes(w))) score += n; };

  // Universal value signals
  add(5, ['shield', 'reduce damage', 'immune', 'immunity']);
  add(5, ['heal', 'health', 'recover', 'regener']);
  add(5, ['damage', 'bonus damage', 'extra damage']);
  add(4, ['reload', 'ammo']);
  add(4, ['super', 'charge']);
  add(4, ['speed', 'faster', 'dash', 'jump', 'teleport']);
  add(4, ['slow', 'stun', 'silence', 'knockback', 'poison', 'burn']);
  add(4, ['vision', 'reveal', 'visible', 'bush']);
  add(3, ['range', 'longer', 'pierce', 'projectile']);
  add(3, ['spawn', 'pet', 'turret', 'summon']);
  add(2, ['ally', 'teammate', 'team']);

  // Star powers tend to be more stable than gadgets in many cases
  if (kind === 'starPower') score += 1;

  // Role fit
  switch (role) {
    case 'assassin':
      add(6, ['invis', 'stealth', 'dash', 'jump', 'teleport', 'speed']);
      add(5, ['damage', 'reload', 'burst']);
      add(3, ['shield', 'heal']);
      break;
    case 'tank':
      add(6, ['shield', 'reduce damage', 'heal', 'health', 'resist']);
      add(4, ['stun', 'slow', 'pull', 'speed']);
      add(3, ['damage']);
      break;
    case 'marksman':
      add(6, ['range', 'projectile', 'pierce', 'damage']);
      add(5, ['vision', 'reveal', 'bush']);
      add(4, ['reload', 'ammo']);
      break;
    case 'controller':
      add(6, ['slow', 'stun', 'poison', 'silence', 'reveal', 'vision', 'bush', 'pull']);
      add(4, ['spawn', 'turret', 'super']);
      add(3, ['damage', 'shield']);
      break;
    case 'support':
      add(6, ['heal', 'shield', 'ally', 'teammate']);
      add(4, ['speed', 'vision', 'reveal']);
      break;
    case 'artillery':
      add(6, ['range', 'area', 'explosion', 'bomb']);
      add(5, ['slow', 'stun', 'damage']);
      break;
    default:
      add(5, ['damage', 'reload', 'super', 'range']);
      add(3, ['shield', 'heal', 'speed']);
  }

  // Hand-tuned favorites for well-known builds
  const override = ABILITY_KEYWORD_OVERRIDES[brawler.slug]?.[kind];
  if (override) {
    const hits = override.filter(word => text.includes(word));
    score += hits.length * 4.5;
  }

  // Penalties for very niche or random effects that tend to be less consistent
  add(-2, ['random']);
  add(-1, ['only when']);

  return score;
}


function defaultGearsForRole(role, slug) {
  if (BUILD_OVERRIDES[slug]?.gears) return BUILD_OVERRIDES[slug].gears;
  switch (role) {
    case 'assassin': return ['speed','damage'];
    case 'tank': return ['health','shield'];
    case 'marksman': return ['damage','vision'];
    case 'controller': return ['vision','damage'];
    case 'support': return ['shield','health'];
    case 'artillery': return ['damage','shield'];
    default: return ['damage','shield'];
  }
}
function makeFallback(text, c1, c2) {
  const initials = text.split(/\s+/).slice(0, 2).map(t => t[0] || '').join('').toUpperCase() || '?';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="48" fill="url(#g)"/>
      <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Inter, Arial" font-size="88" font-weight="800" fill="white">${initials}</text>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function showView(which) {
  for (const view of [els.homeView, els.detailView]) if (view) view.classList.remove('active');
  which.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function route() {
  const hash = location.hash || '#home';
  if (hash.startsWith('#brawler/')) {
    const slug = hash.split('/')[1];
    const brawler = state.all.find(b => b.slug === slug);
    if (brawler) {
      renderDetail(brawler);
      showView(els.detailView);
      return;
    }
    location.hash = '#home';
    return;
  }
  showView(els.homeView);
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('brawlmeta_lang', lang);
  applyStaticTranslations();
  if (state.loaded) {
    renderFilters();
    renderGrid();
    if (state.current && location.hash.startsWith('#brawler/')) {
      renderDetail(state.current);
    }
  }
}

async function boot() {
  applyStaticTranslations();
  try {
    await loadBrawlers();
    renderFilters();
    renderGrid();
    route();
  } catch (err) {
    els.grid.innerHTML = `<div class="error-card card">${escapeHtml(t('ui.apiErrorBody'))}<br><br><strong>Error:</strong> ${escapeHtml(err.message || String(err))}</div>`;
    els.gridTitle.textContent = t('ui.apiErrorTitle');
    els.statusText.textContent = t('ui.apiErrorStatus');
  }
}

els.searchInput.addEventListener('input', applyFilters);
els.raritySelect.addEventListener('change', applyFilters);
els.backButton.addEventListener('click', () => history.back());
window.addEventListener('hashchange', route);
els.langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
boot();
