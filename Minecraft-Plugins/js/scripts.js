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

    // Maneja el cambio de idioma
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const targetPage = selectedLanguage === 'es' ? 'index_es.html' : 'index_en.html';
        window.location.href = targetPage;
    });
});

function toggleConfig() {
    var configSection = document.getElementById('config-section');
    var messagesSection = document.getElementById('messages-section');
    if (configSection.style.display === 'none' || configSection.style.display === '') {
        configSection.style.display = 'block';
        messagesSection.style.display = 'none';
    } else {
        configSection.style.display = 'none';
    }
}

function toggleMessages() {
    var configSection = document.getElementById('config-section');
    var messagesSection = document.getElementById('messages-section');
    if (messagesSection.style.display === 'none' || messagesSection.style.display === '') {
        messagesSection.style.display = 'block';
        configSection.style.display = 'none';
    } else {
        messagesSection.style.display = 'none';
    }
}

function goBack() {
    window.history.back();
}