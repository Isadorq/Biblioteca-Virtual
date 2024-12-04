document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.navbar'); // Seleciona a navbar

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        sidebar.classList.toggle('open'); // Alterna a classe "open" da sidebar
        navbar.classList.toggle('shift'); // Alterna a classe "shift" da navbar
    });
});

// Selecionando os elementos
const skullToggle = document.getElementById('skull-toggle');
const popup = document.getElementById('popup');

// Função para alternar a visibilidade do popup
skullToggle.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});
