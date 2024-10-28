document.addEventListener('DOMContentLoaded', function () {
        const navMenu = document.querySelector('.navbar-nav');
        const navLinks = navMenu.querySelectorAll('.nav-link');
        let currentIndex = 0;
        navLinks[currentIndex].focus();

        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {

                currentIndex = (currentIndex + 1) % navLinks.length;
                navLinks[currentIndex].focus();
                e.preventDefault();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {

                currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
                navLinks[currentIndex].focus();
                e.preventDefault();
            }
        });
    });







    // const button = document.getElementById('theme-toggle');
    // const body = document.body;
    // const faq = document.getElementById('faq');
    // const faqButton = document.getElementById('faqButton');
    // button.addEventListener('click', function () {
    //     const currentBgColor = window.getComputedStyle(body).backgroundColor;
    //
    //     if (currentBgColor === "rgb(255, 255, 255)") {
    //         document.body.style.backgroundColor = "#354a6e";
    //         faq.style.backgroundColor = "#354a6e"
    //         faqButton.style.backgroundColor = "#333333"
    //         var all = document.getElementsByTagName("*");
    //
    //         for (var i=0, max=all.length; i < max; i++) {
    //             all[i].style.color = "#189677";
    //         }
    //     }
    //     else {
    //         document.body.style.backgroundColor = "#ffffff";
    //         faq.style.backgroundColor = "#ffffff";
    //         faqButton.style.backgroundColor = "lightseagreen"
    //         var all = document.getElementsByTagName("*");
    //
    //         for (var i=0, max=all.length; i < max; i++) {
    //             all[i].style.color = "black";
    //         }
    //     }
// }};

// const themeToggleBtn = document.getElementById('theme-toggle');
//
//
//
// function switchTheme() {
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
// }
//
// function loadTheme() {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     document.documentElement.setAttribute('data-theme', savedTheme);
// }
//
// themeToggleBtn.addEventListener('click', switchTheme);
// loadTheme();
