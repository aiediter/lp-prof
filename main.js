document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleProfile');
  const fullProfile = document.getElementById('fullProfile');

  if (toggleBtn && fullProfile) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = fullProfile.hidden;
      fullProfile.hidden = !isHidden;
      toggleBtn.setAttribute('aria-expanded', isHidden);
      toggleBtn.textContent = isHidden ? '閉じる' : 'もっと読む';
    });
  }
});
