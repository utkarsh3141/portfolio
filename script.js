document.addEventListener('DOMContentLoaded', function() {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const body = document.body;
    const toggleStickerLight = document.querySelector('.toggle-sticker');
    const toggleStickerDark = document.querySelector('.toggle-sticker.dark');
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');


    // Function to set the theme based on localStorage
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeCheckbox.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeCheckbox.checked = false;
        }
    }

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'light'); // Use saved theme or default to light

    // Function to toggle the theme
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }
     // Function to toggle mobile menu
    function toggleMobileMenu() {
         navLinks.classList.toggle('mobile-menu');
        navLinks.classList.toggle('active');
    }


    // Event listener for the theme switch
    themeCheckbox.addEventListener('change', toggleTheme);
    // header scroll functionality
     let prevScrollPos = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
          header.style.transform = 'translateY(0)';
        } else {
           header.style.transform = 'translateY(-100%)';
        }
      prevScrollPos = currentScrollPos;

    });
    // toggle Menu
     menuIcon.addEventListener('click', toggleMobileMenu);
   
    // background cursor effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        body.style.setProperty('--cursor-x', x + 'px');
        body.style.setProperty('--cursor-y', y + 'px');
    });

});
