const themeToggleBtn = document.getElementById('theme-toggle');
const themeImage = document.getElementById('logo-image');
const footerImage = document.getElementById('animate-image');
const thememImage = document.getElementById('logo-image2');

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Change the image source based on the new theme
    if (newTheme === 'dark') {
        themeImage.src = 'https://i.ibb.co.com/WP9H174/Group-2.png';
        footerImage.src = 'https://i.ibb.co.com/WP9H174/Group-2.png';
        thememImage.src = 'https://i.ibb.co.com/WP9H174/Group-2.png';
    } else {
        themeImage.src = 'https://i.ibb.co/Xxv4w6d/Group-2.png';
        footerImage.src = 'https://i.ibb.co/Xxv4w6d/Group-2.png';
        thememImage.src = 'https://i.ibb.co/Xxv4w6d/Group-2.png';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Set the correct image for the saved theme
    if (savedTheme === 'dark') {
        themeImage.src = 'https://i.ibb.co.com/WP9H174/Group-2.png';
        footerImage.src = 'https://i.ibb.co.com/WP9H174/Group-2.png';
        thememImage.src = 'https://i.ibb.co.com/WP9H174/Group-2.png';
    } else {
        themeImage.src = 'https://i.ibb.co/Xxv4w6d/Group-2.png';
        footerImage.src = 'https://i.ibb.co/Xxv4w6d/Group-2.png';
        thememImage.src = 'https://i.ibb.co/Xxv4w6d/Group-2.png';
    }
}

themeToggleBtn.addEventListener('click', switchTheme);
loadTheme();