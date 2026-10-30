/* Reveal references inside collapsed supplements, including direct deep links. */
(() => {
  function reveal(hash) {
    if (!hash || hash === '#') return;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    let opened = false;
    for (let ancestor = target.parentElement; ancestor; ancestor = ancestor.parentElement) {
      if (ancestor.tagName === 'DETAILS' && !ancestor.open) {
        ancestor.open = true;
        opened = true;
      }
    }
    if (opened) target.scrollIntoView({ block: 'start' });
  }
  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a[href^="#"]');
    if (anchor) reveal(anchor.getAttribute('href'));
  });
  window.addEventListener('hashchange', () => reveal(location.hash));
  reveal(location.hash);
})();
