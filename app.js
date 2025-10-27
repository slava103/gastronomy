/* ZOZh Kitchen — client-side app (no dates, no counters) */

// Data model: recipes with detailed instructions and nutrition
const recipeCatalog = [
  {
    id: 'ovsyanoblini-banan',
    title: 'Овсяноблины с бананом',
    cover: 'images/recipes/ovsyanoblini.svg',
    timeMinutes: 15,
    caloriesPerServing: 320,
    difficulty: 'легко',
    servings: 2,
    diet: ['вегетарианская'],
    allergens: ['глютен', 'яйцо', 'молоко'],
    tags: ['завтрак', 'быстро', 'низкосахарное'],
    ingredients: [
      { name: 'Овсяные хлопья', qty: 100, unit: 'г' },
      { name: 'Банан спелый', qty: 1, unit: 'шт' },
      { name: 'Яйцо куриное', qty: 1, unit: 'шт' },
      { name: 'Молоко (или растительное)', qty: 120, unit: 'мл' },
      { name: 'Разрыхлитель', qty: 0.5, unit: 'ч.л.' },
      { name: 'Щепотка соли', qty: 1, unit: 'щепотка' },
      { name: 'Масло для жарки', qty: 1, unit: 'ч.л.' }
    ],
    steps: [
      'Смолоть овсяные хлопья в муку (или использовать готовую овсяную муку).',
      'В блендере смешать банан, яйцо, молоко, соль и разрыхлитель.',
      'Добавить овсяную муку, пробить до однородности. Оставить на 3–5 минут.',
      'Разогреть сковороду, смазать маслом. Вылить порцию теста, жарить по 1–2 минуты с каждой стороны.',
      'Подавать с греческим йогуртом и ягодами по желанию.'
    ],
    nutrition: { protein: 14, fat: 9, carbs: 48, fiber: 7 },
  },
  {
    id: 'kinoa-bowl-losos',
    title: 'Боул с киноа и лососем',
    cover: 'images/recipes/kinoa-bowl.svg',
    timeMinutes: 25,
    caloriesPerServing: 520,
    difficulty: 'средне',
    servings: 2,
    diet: [],
    allergens: ['рыба'],
    tags: ['обед', 'омега-3', 'сбалансированное'],
    ingredients: [
      { name: 'Киноа', qty: 140, unit: 'г' },
      { name: 'Лосось филе', qty: 250, unit: 'г' },
      { name: 'Авокадо', qty: 1, unit: 'шт' },
      { name: 'Огурец', qty: 1, unit: 'шт' },
      { name: 'Шпинат', qty: 60, unit: 'г' },
      { name: 'Соус: оливковое масло', qty: 1.5, unit: 'ст.л.' },
      { name: 'Соус: лимонный сок', qty: 1, unit: 'ст.л.' },
      { name: 'Соус: дижонская горчица', qty: 1, unit: 'ч.л.' },
      { name: 'Соль, перец', qty: 1, unit: 'по вкусу' }
    ],
    steps: [
      'Отварить киноа до готовности (вдвое больше воды, 12–15 минут).',
      'Обжарить лосось на антипригарной сковороде 3–4 минуты с каждой стороны или запечь.',
      'Нарезать авокадо и огурец, промыть шпинат.',
      'Смешать соус. Собрать боулы: киноа, шпинат, овощи, лосось. Полить соусом.'
    ],
    nutrition: { protein: 36, fat: 26, carbs: 35, fiber: 8 },
  },
  {
    id: 'sup-pyure-tykva-kokos',
    title: 'Тыквенный суп-пюре с кокосом',
    cover: 'images/recipes/soup-tykva.svg',
    timeMinutes: 30,
    caloriesPerServing: 290,
    difficulty: 'легко',
    servings: 3,
    diet: ['веган', 'безлактозная', 'безглютеновая'],
    allergens: [],
    tags: ['ужин', 'крем-суп', 'безглютеновое', 'веган'],
    ingredients: [
      { name: 'Тыква', qty: 700, unit: 'г' },
      { name: 'Лук', qty: 1, unit: 'шт' },
      { name: 'Чеснок', qty: 2, unit: 'зубчика' },
      { name: 'Кокосовое молоко', qty: 200, unit: 'мл' },
      { name: 'Овощной бульон/вода', qty: 500, unit: 'мл' },
      { name: 'Оливковое масло', qty: 1, unit: 'ст.л.' },
      { name: 'Паприка, карри, соль, перец', qty: 1, unit: 'по вкусу' }
    ],
    steps: [
      'Обжарить лук и чеснок на оливковом масле.',
      'Добавить тыкву кубиками, специи, влить бульон. Варить до мягкости.',
      'Снять с огня, влить кокосовое молоко и пробить блендером до кремовой текстуры.'
    ],
    nutrition: { protein: 5, fat: 13, carbs: 34, fiber: 6 },
  },
  {
    id: 'salat-hrust-kapusta-yabloko',
    title: 'Хрустящий салат: капуста, яблоко, орехи',
    cover: 'images/recipes/salad-hrust.svg',
    timeMinutes: 10,
    caloriesPerServing: 210,
    difficulty: 'легко',
    servings: 2,
    diet: ['веган', 'безглютеновая', 'безлактозная'],
    allergens: ['орехи'],
    tags: ['перекус', 'низкокалорийное', 'клетчатка'],
    ingredients: [
      { name: 'Капуста белокочанная', qty: 250, unit: 'г' },
      { name: 'Яблоко', qty: 1, unit: 'шт' },
      { name: 'Грецкие орехи', qty: 30, unit: 'г' },
      { name: 'Изюм', qty: 20, unit: 'г' },
      { name: 'Лимонный сок', qty: 1, unit: 'ст.л.' },
      { name: 'Оливковое масло', qty: 1, unit: 'ст.л.' },
      { name: 'Соль, перец', qty: 1, unit: 'по вкусу' }
    ],
    steps: [
      'Нашинковать капусту, растереть с солью.',
      'Добавить яблоко соломкой, орехи, изюм. Заправить лимонным соком и маслом.'
    ],
    nutrition: { protein: 5, fat: 14, carbs: 18, fiber: 6 },
  },
  {
    id: 'treska-parovaya-travy',
    title: 'Треска на пару с травами',
    cover: 'images/recipes/treska-par.svg',
    timeMinutes: 20,
    caloriesPerServing: 240,
    difficulty: 'легко',
    servings: 2,
    diet: ['безглютеновая', 'безлактозная'],
    allergens: ['рыба'],
    tags: ['ужин', 'низкокалорийное', 'белок'],
    ingredients: [
      { name: 'Филе трески', qty: 300, unit: 'г' },
      { name: 'Лимон', qty: 0.5, unit: 'шт' },
      { name: 'Чеснок', qty: 1, unit: 'зубчик' },
      { name: 'Оливковое масло', qty: 1, unit: 'ч.л.' },
      { name: 'Соль, перец, сушёные травы', qty: 1, unit: 'по вкусу' }
    ],
    steps: [
      'Натереть треску солью, перцем, травами. Сбрызнуть лимоном и маслом.',
      'Готовить на пару 8–10 минут до сочности.'
    ],
    nutrition: { protein: 32, fat: 8, carbs: 3, fiber: 0 },
  },
  {
    id: 'humus-klassic',
    title: 'Хумус классический',
    cover: 'images/recipes/hummus.svg',
    timeMinutes: 12,
    caloriesPerServing: 180,
    difficulty: 'легко',
    servings: 4,
    diet: ['веган', 'безглютеновая', 'безлактозная'],
    allergens: ['кунжут'],
    tags: ['закуска', 'клетчатка', 'белок'],
    ingredients: [
      { name: 'Нут консервированный (слить)', qty: 400, unit: 'г' },
      { name: 'Тахини', qty: 2, unit: 'ст.л.' },
      { name: 'Лимонный сок', qty: 2, unit: 'ст.л.' },
      { name: 'Чеснок', qty: 1, unit: 'зубчик' },
      { name: 'Оливковое масло', qty: 1, unit: 'ст.л.' },
      { name: 'Соль, паприка, зира', qty: 1, unit: 'по вкусу' }
    ],
    steps: [
      'Взбить все в блендере до кремовой текстуры, при необходимости добавить ледяную воду.',
      'Подавать с овощами и цельнозерновыми хлебцами.'
    ],
    nutrition: { protein: 7, fat: 10, carbs: 14, fiber: 4 },
  }
];

// State
const state = {
  searchText: '',
  dietFilters: new Set(),
  allergensExclude: new Set(),
  timeMin: 10,
  timeMax: 60,
  calMin: 100,
  calMax: 700,
  difficulty: '',
  favorites: new Set(loadFromStorage('favorites', [])),
  planner: loadFromStorage('planner', {}),
  shopping: loadFromStorage('shopping', []),
  selectedRecipeId: null,
};

// Helpers: storage
function saveToStorage(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch (_) {}
}
function loadFromStorage(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (_) { return fallback; }
}

// DOM refs
const refs = {};
document.addEventListener('DOMContentLoaded', () => {
  refs.searchInput = document.querySelector('#searchInput');
  refs.clearSearchBtn = document.querySelector('#clearSearchBtn');
  refs.chips = [...document.querySelectorAll('.chip')];

  refs.timeMin = document.querySelector('#timeMin');
  refs.timeMax = document.querySelector('#timeMax');
  refs.timeMinOut = document.querySelector('#timeMinOut');
  refs.timeMaxOut = document.querySelector('#timeMaxOut');
  refs.calMin = document.querySelector('#calMin');
  refs.calMax = document.querySelector('#calMax');
  refs.calMinOut = document.querySelector('#calMinOut');
  refs.calMaxOut = document.querySelector('#calMaxOut');
  refs.difficultySelect = document.querySelector('#difficultySelect');
  refs.filtersForm = document.querySelector('#filtersForm');
  refs.applyFiltersBtn = document.querySelector('#applyFiltersBtn');
  refs.resetFiltersBtn = document.querySelector('#resetFiltersBtn');

  refs.recipesGrid = document.querySelector('#recipesGrid');

  refs.dayPicker = document.querySelector('#dayPicker');
  refs.plannerGrid = document.querySelector('#plannerGrid');
  refs.clearPlannerBtn = document.querySelector('#clearPlannerBtn');

  refs.shoppingList = document.querySelector('#shoppingList');
  refs.generateListBtn = document.querySelector('#generateListBtn');
  refs.copyListBtn = document.querySelector('#copyListBtn');
  refs.exportListBtn = document.querySelector('#exportListBtn');
  refs.clearListBtn = document.querySelector('#clearListBtn');

  refs.dialog = document.querySelector('#recipeDialog');
  refs.dialogTitle = document.querySelector('#dialogTitle');
  refs.dialogBody = document.querySelector('#dialogBody');
  refs.dialogAddBtn = document.querySelector('#dialogAddBtn');
  refs.dialogFavBtn = document.querySelector('#dialogFavBtn');
  refs.closeDialogBtn = document.querySelector('#closeDialogBtn');

  bindEvents();
  renderAll();
});

function bindEvents() {
  refs.searchInput.addEventListener('input', (e) => {
    state.searchText = e.target.value.trim().toLowerCase();
    renderRecipes();
  });
  refs.clearSearchBtn.addEventListener('click', () => {
    refs.searchInput.value = '';
    state.searchText = '';
    renderRecipes();
  });
  refs.chips.forEach(ch => ch.addEventListener('click', () => {
    const tag = ch.dataset.chip;
    const currentlyActive = ch.classList.toggle('active');
    if (currentlyActive) {
      state.searchText = `${state.searchText} ${tag}`.trim();
    } else {
      state.searchText = state.searchText.split(' ').filter(t => t !== tag).join(' ');
    }
    refs.searchInput.value = state.searchText;
    renderRecipes();
  }));

  const dietInputs = refs.filtersForm.querySelectorAll('input[name="diet"]');
  dietInputs.forEach(inp => inp.addEventListener('change', () => {
    state.dietFilters = new Set([...dietInputs].filter(i => i.checked).map(i => i.value));
  }));
  const allergenInputs = refs.filtersForm.querySelectorAll('input[name="allergen"]');
  allergenInputs.forEach(inp => inp.addEventListener('change', () => {
    state.allergensExclude = new Set([...allergenInputs].filter(i => i.checked).map(i => i.value));
  }));

  const rangeUpdate = () => {
    state.timeMin = Number(refs.timeMin.value);
    state.timeMax = Number(refs.timeMax.value);
    refs.timeMinOut.value = String(state.timeMin);
    refs.timeMaxOut.value = String(state.timeMax);
    state.calMin = Number(refs.calMin.value);
    state.calMax = Number(refs.calMax.value);
    refs.calMinOut.value = String(state.calMin);
    refs.calMaxOut.value = String(state.calMax);
  };
  ['input', 'change'].forEach(evt => {
    refs.timeMin.addEventListener(evt, rangeUpdate);
    refs.timeMax.addEventListener(evt, rangeUpdate);
    refs.calMin.addEventListener(evt, rangeUpdate);
    refs.calMax.addEventListener(evt, rangeUpdate);
  });

  refs.difficultySelect.addEventListener('change', () => {
    state.difficulty = refs.difficultySelect.value;
  });

  refs.applyFiltersBtn.addEventListener('click', () => renderRecipes());
  refs.resetFiltersBtn.addEventListener('click', () => {
    refs.filtersForm.reset();
    state.dietFilters.clear();
    state.allergensExclude.clear();
    refs.timeMin.value = 10; refs.timeMax.value = 60; refs.calMin.value = 100; refs.calMax.value = 700; 
    refs.timeMinOut.value = '10'; refs.timeMaxOut.value = '60'; refs.calMinOut.value = '100'; refs.calMaxOut.value = '700';
    refs.difficultySelect.value = '';
    state.difficulty = '';
    renderRecipes();
  });

  refs.clearPlannerBtn.addEventListener('click', () => {
    state.planner = {};
    saveToStorage('planner', state.planner);
    renderPlanner();
  });

  refs.generateListBtn.addEventListener('click', () => {
    const items = [];
    Object.values(state.planner).flat().forEach(({ recipeId }) => {
      const r = recipeCatalog.find(x => x.id === recipeId);
      if (!r) return;
      r.ingredients.forEach(ing => items.push({ name: ing.name, qty: ing.qty, unit: ing.unit }));
    });
    // merge by name+unit
    const merged = Object.values(items.reduce((acc, it) => {
      const key = `${it.name}__${it.unit}`;
      if (!acc[key]) acc[key] = { name: it.name, qty: 0, unit: it.unit, done: false };
      acc[key].qty += Number(it.qty) || 0;
      return acc;
    }, {}));
    state.shopping = merged;
    saveToStorage('shopping', state.shopping);
    renderShopping();
  });

  refs.copyListBtn.addEventListener('click', async () => {
    const text = state.shopping.map(i => `- ${i.name}: ${i.qty} ${i.unit || ''}`.trim()).join('\n');
    try { await navigator.clipboard.writeText(text); } catch (_) {}
  });

  refs.exportListBtn.addEventListener('click', () => {
    const text = state.shopping.map(i => `- ${i.name}: ${i.qty} ${i.unit || ''}`.trim()).join('\n');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'shopping-list.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  refs.clearListBtn.addEventListener('click', () => {
    state.shopping = [];
    saveToStorage('shopping', state.shopping);
    renderShopping();
  });

  // dialog actions
  refs.closeDialogBtn.addEventListener('click', () => refs.dialog.close());
  refs.dialogAddBtn.addEventListener('click', () => {
    if (!state.selectedRecipeId) return;
    const day = refs.dayPicker.value || 'Понедельник';
    if (!state.planner[day]) state.planner[day] = [];
    state.planner[day].push({ recipeId: state.selectedRecipeId });
    saveToStorage('planner', state.planner);
    renderPlanner();
    refs.dialog.close();
  });
  refs.dialogFavBtn.addEventListener('click', () => {
    if (!state.selectedRecipeId) return;
    toggleFavorite(state.selectedRecipeId);
    renderRecipes();
  });
}

function toggleFavorite(recipeId) {
  if (state.favorites.has(recipeId)) state.favorites.delete(recipeId);
  else state.favorites.add(recipeId);
  saveToStorage('favorites', [...state.favorites]);
}

// Rendering
function renderAll() {
  renderRecipes();
  renderPlanner();
  renderShopping();
}

function recipeMatchesFilters(r) {
  // search over title, ingredients, tags
  const q = state.searchText;
  if (q) {
    const hay = [
      r.title,
      r.tags.join(' '),
      r.ingredients.map(i => i.name).join(' ')
    ].join(' ').toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    for (const term of terms) if (!hay.includes(term)) return false;
  }

  if (state.dietFilters.size) {
    if (![...state.dietFilters].every(df => r.diet.includes(df))) return false;
  }
  if (state.allergensExclude.size) {
    if ([...state.allergensExclude].some(al => r.allergens.includes(al))) return false;
  }
  if (r.timeMinutes < state.timeMin || r.timeMinutes > state.timeMax) return false;
  if (r.caloriesPerServing < state.calMin || r.caloriesPerServing > state.calMax) return false;
  if (state.difficulty && r.difficulty !== state.difficulty) return false;
  return true;
}

function recipeCardTemplate(r) {
  const fav = state.favorites.has(r.id);
  const tags = [
    ...r.tags,
    ...r.diet,
    r.difficulty
  ].filter(Boolean);
  const coverSrc = r.cover && typeof r.cover === 'string' ? r.cover : 'images/placeholder.svg';
  return `
    <article class="card" role="listitem">
      <div class="card-cover">
        <img src="${coverSrc}" alt="${r.title}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg';" />
      </div>
      <div class="card-body">
        <h3>${r.title}</h3>
        <div class="meta">⏱️ ${r.timeMinutes} мин • 🔥 ${r.caloriesPerServing} ккал/порц • 🍽️ ${r.servings} порц</div>
        <div class="tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-actions">
          <button data-action="details" data-id="${r.id}">Подробнее</button>
          <button class="fav-toggle ${fav ? '' : ''}" aria-pressed="${fav}" data-action="fav" data-id="${r.id}">${fav ? 'Избранное' : 'В избранное'}</button>
          <button data-action="plan" data-id="${r.id}">В план</button>
        </div>
      </div>
    </article>
  `;
}

function renderRecipes() {
  const items = recipeCatalog.filter(recipeMatchesFilters);
  if (!items.length) {
    refs.recipesGrid.innerHTML = '<div class="guide">Ничего не найдено. Попробуйте изменить фильтры или запрос.</div>';
    return;
  }
  refs.recipesGrid.innerHTML = items.map(recipeCardTemplate).join('');
  refs.recipesGrid.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const action = e.currentTarget.getAttribute('data-action');
      if (action === 'details') openRecipeDialog(id);
      if (action === 'fav') { toggleFavorite(id); renderRecipes(); }
      if (action === 'plan') { state.selectedRecipeId = id; refs.dialogTitle.textContent = 'Добавление рецепта в план'; refs.dialogBody.innerHTML = `<p>Выберите день недели в блоке Планировщик и подтвердите.</p>`; refs.dialog.showModal(); }
    });
  });
}

function openRecipeDialog(id) {
  const r = recipeCatalog.find(x => x.id === id);
  if (!r) return;
  state.selectedRecipeId = id;
  refs.dialogTitle.textContent = r.title;
  const ing = r.ingredients.map(i => `<li>${i.name} — <strong>${i.qty} ${i.unit || ''}</strong></li>`).join('');
  const steps = r.steps.map(s => `<li>${s}</li>`).join('');
  const nutr = r.nutrition ? `<div class="tags"><span class="tag">Белки: ${r.nutrition.protein} г</span><span class="tag">Жиры: ${r.nutrition.fat} г</span><span class="tag">Углеводы: ${r.nutrition.carbs} г</span><span class="tag">Клетчатка: ${r.nutrition.fiber} г</span></div>` : '';
  refs.dialogBody.innerHTML = `
    <div class="guide">
      <div class="meta">⏱️ ${r.timeMinutes} мин • 🔥 ${r.caloriesPerServing} ккал/порц • 🍽️ ${r.servings} порц • Сложность: ${r.difficulty}</div>
      ${nutr}
      <h4>Ингредиенты</h4>
      <ul>${ing}</ul>
      <h4>Как готовить</h4>
      <ol>${steps}</ol>
      <p class="meta">Совет: регулируйте соль и специи по вкусу. Для экономии времени заготавливайте крупы заранее.</p>
    </div>
  `;
  refs.dialogFavBtn.textContent = state.favorites.has(id) ? 'В избранном' : 'В избранное';
  refs.dialog.showModal();
}

function renderPlanner() {
  const days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
  refs.plannerGrid.innerHTML = days.map(day => {
    const items = (state.planner[day] || []).map(({ recipeId }, idx) => {
      const r = recipeCatalog.find(x => x.id === recipeId);
      const title = r ? r.title : 'Рецепт';
      return `<div class="plan-item"><span class="title">${title}</span><div style="display:flex; gap:6px;">
        <button data-day="${day}" data-idx="${idx}" data-action="open">Открыть</button>
        <button class="secondary" data-day="${day}" data-idx="${idx}" data-action="remove">Убрать</button>
      </div></div>`;
    }).join('');
    return `<div class="day-col"><div class="day-title">${day}</div>${items || '<div class="meta">Нет рецептов</div>'}</div>`;
  }).join('');

  refs.plannerGrid.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const day = e.currentTarget.getAttribute('data-day');
      const idx = Number(e.currentTarget.getAttribute('data-idx'));
      const action = e.currentTarget.getAttribute('data-action');
      if (action === 'remove') {
        (state.planner[day] || []).splice(idx, 1);
        saveToStorage('planner', state.planner);
        renderPlanner();
      }
      if (action === 'open') {
        const entry = (state.planner[day] || [])[idx];
        if (!entry) return;
        openRecipeDialog(entry.recipeId);
      }
    });
  });
}

function renderShopping() {
  if (!state.shopping.length) {
    refs.shoppingList.innerHTML = '<div class="guide">Пока пусто. Сформируйте список из плана или добавьте вручную.</div>';
    return;
  }
  refs.shoppingList.innerHTML = state.shopping.map((item, idx) => `
    <div class="shopping-item">
      <input type="checkbox" ${item.done ? 'checked' : ''} data-idx="${idx}" aria-label="Отметить как куплено" />
      <div class="name">${item.name}</div>
      <div class="qty">${item.qty} ${item.unit || ''}</div>
      <button class="secondary" data-idx="${idx}" data-action="minus">–</button>
      <button data-idx="${idx}" data-action="plus">+</button>
      <button class="secondary" data-idx="${idx}" data-action="remove">Удалить</button>
    </div>
  `).join('');

  refs.shoppingList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const idx = Number(e.currentTarget.getAttribute('data-idx'));
      state.shopping[idx].done = e.currentTarget.checked;
      saveToStorage('shopping', state.shopping);
    });
  });
  refs.shoppingList.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.currentTarget.getAttribute('data-idx'));
      const action = e.currentTarget.getAttribute('data-action');
      if (action === 'remove') state.shopping.splice(idx, 1);
      if (action === 'plus') state.shopping[idx].qty = (Number(state.shopping[idx].qty) || 0) + 1;
      if (action === 'minus') state.shopping[idx].qty = Math.max(0, (Number(state.shopping[idx].qty) || 0) - 1);
      saveToStorage('shopping', state.shopping);
      renderShopping();
    });
  });
}

