function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark mode functionality
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Update button text
    const buttons = document.querySelectorAll('.dark-mode-btn');
    buttons.forEach(btn => {
        btn.textContent = isDarkMode ? '☀️' : '🌙';
    });
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    
    if (savedDarkMode) {
        body.classList.add('dark-mode');
        const buttons = document.querySelectorAll('.dark-mode-btn');
        buttons.forEach(btn => {
            btn.textContent = '☀️';
        });
    }
    
    // Add event listeners to both desktop and mobile buttons
    const desktopToggle = document.getElementById('dark-mode-toggle');
    const mobileToggle = document.getElementById('dark-mode-toggle-mobile');
    
    if (desktopToggle) {
        desktopToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleDarkMode);
    }
});