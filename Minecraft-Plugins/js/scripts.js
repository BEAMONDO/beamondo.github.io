document.addEventListener('DOMContentLoaded', () => {
    // Maneja el clic en el contenedor de la imagen para abrir la imagen grande
    document.querySelectorAll('.plugin-item').forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = item.getAttribute('data-link');
        });
    });

    // Maneja el clic en la imagen para mostrarla en grande
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);

    document.querySelectorAll('.plugin-image-container img').forEach(img => {
        img.addEventListener('click', (e) => {
            overlayImg.src = e.target.src;
            overlay.classList.add('show');
            e.stopPropagation(); // Evita que el clic en la imagen redirija al plugin
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.replace(/(\/es|\/en)/, '/');
        const newUrl = baseUrl + '/' + selectedLanguage;

        window.location.href = newUrl;
    });
});
