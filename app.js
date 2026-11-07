(() => {
  const cards = [...document.querySelectorAll('.book-card')];
  const searchInput = document.querySelector('#search-input');
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const resultsStatus = document.querySelector('#results-status');
  const emptyState = document.querySelector('#empty-state');
  let activeFilter = 'all';

  const updateCatalog = () => {
    const query = searchInput.value.trim().toLocaleLowerCase('id');
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesQuery = card.dataset.search.toLocaleLowerCase('id').includes(query);
      const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
      const visible = matchesQuery && matchesFilter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    resultsStatus.textContent = `Menampilkan ${visibleCount} bacaan`;
    emptyState.hidden = visibleCount !== 0;
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      updateCatalog();
    });
  });

  searchInput.addEventListener('input', updateCatalog);
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      updateCatalog();
      searchInput.blur();
    }
  });
})();
