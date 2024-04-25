// Function to save theme settings
function saveThemeSettings() {
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.value;

    // Save selected theme to localStorage
    localStorage.setItem('theme', selectedTheme);
}

// Define language options and translations
const translations = {
    'en': {
        'theme': 'Theme',
        'dark': 'Dark',
        'light': 'Light',
        'language': 'Language',
        'english': 'English',
        'spanish': 'Spanish',
        'french': 'French'
    },
    'es': {
        'theme': 'Tema',
        'dark': 'Oscuro',
        'light': 'Claro',
        'language': 'Idioma',
        'english': 'Inglés',
        'spanish': 'Español',
        'french': 'Francés'
    },
    'fr': {
        'theme': 'Thème',
        'dark': 'Sombre',
        'light': 'Clair',
        'language': 'Langue',
        'english': 'Anglais',
        'spanish': 'Espagnol',
        'french': 'Français'
    }
};

// Function to toggle between light and dark themes
function toggleTheme(theme) {
    // Toggle between light and dark theme classes
    document.body.classList.toggle('dark-theme', theme === 'dark');
}

// Function to switch between languages
function changeLanguage(lang) {
    // Update text content on the page with translations for the selected language
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}

// Add event listeners to theme and language selectors
document.getElementById('theme-select').addEventListener('change', (event) => {
    toggleTheme(event.target.value);
});

document.getElementById('language-select').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

// Initialize page with default theme and language
toggleTheme('light');
changeLanguage('en');

// Function to save language settings
function saveLanguageSettings() {
    const languageSelect = document.getElementById('language-select');
    const selectedLanguage = languageSelect.value;

    // Save selected language to localStorage
    localStorage.setItem('language', selectedLanguage);
}

// Add event listeners to save settings when the form is submitted
document.getElementById('theme-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    saveThemeSettings();
    // Optionally, you can display a success message or perform other actions
});

document.getElementById('language-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    saveLanguageSettings();
    // Optionally, you can display a success message or perform other actions
});
// Load saved theme and language settings when the page loads
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('theme-select').value = savedTheme;
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        document.getElementById('language-select').value = savedLanguage;
    }
});
// Select the theme selector dropdown
const themeSelect = document.getElementById('theme-select');

// Add event listener for theme change
themeSelect.addEventListener('change', function() {
    // Get the selected theme value
    const selectedTheme = themeSelect.value;

    // Update the class attribute of the body element
    document.body.className = selectedTheme + '-theme';
});

