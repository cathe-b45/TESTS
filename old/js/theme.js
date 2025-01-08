// Aplicar el tema almacenado al cargar la página
const savedTheme = localStorage.getItem('theme');
const htmlElement = document.documentElement;

if (savedTheme) {
    htmlElement.setAttribute('data-bs-theme', savedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        // Función para actualizar el ícono del botón
        const actualizarIcono = (theme) => {
            toggleButton.innerHTML = theme === 'dark'
                ? '<i class="bi bi-sun"></i>' // Icono de sol para modo claro
                : '<i class="bi bi-moon-stars"></i>'; // Icono de luna para modo oscuro
            toggleButton.classList.toggle('btn-light', theme === 'dark');
            toggleButton.classList.toggle('btn-dark', theme !== 'dark');
        };

        // Actualizar el ícono al cargar la página
        actualizarIcono(savedTheme || 'light');

        // Alternar entre modos
        toggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            actualizarIcono(newTheme);
        });
    }
});
