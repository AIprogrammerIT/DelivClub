document.addEventListener('DOMContentLoaded', () => {
  // FAQ аккордеон
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      // Закрываем все
      faqButtons.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.hidden = true;
      });
      // Открываем текущий, если он был закрыт
      if (!expanded) {
        button.setAttribute('aria-expanded', 'true');
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        if (panel) panel.hidden = false;
      }
    });
  });
});
