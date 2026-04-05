const darkModeBtn = document.getElementById('darkModeBtn');
const bodyEl = document.body;
const DARK_MODE_KEY = 'darkModeEnabled';

function updateDarkModeState(active) {
    if (active) {
        bodyEl.classList.add('dark-mode');
        darkModeBtn.classList.add('active');
        darkModeBtn.style.background = '#ff4a4a';
        darkModeBtn.style.color = '#fff';
        darkModeBtn.setAttribute('aria-pressed', 'true');
        darkModeBtn.textContent = 'Modo Escuro Ativado';
    } else {
        bodyEl.classList.remove('dark-mode');
        darkModeBtn.classList.remove('active');
        darkModeBtn.style.background = '#fff';
        darkModeBtn.style.color = '#111';
        darkModeBtn.setAttribute('aria-pressed', 'false');
        darkModeBtn.textContent = 'Modo Escuro';
    }
}

const persistedMode = localStorage.getItem(DARK_MODE_KEY);
const isDarkModeSaved = persistedMode === 'true';

updateDarkModeState(isDarkModeSaved);

darkModeBtn.addEventListener('click', () => {
    const active = !bodyEl.classList.contains('dark-mode');
    updateDarkModeState(active);
    localStorage.setItem(DARK_MODE_KEY, active.toString());
});