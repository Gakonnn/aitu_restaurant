let isTimeDisplayed = false; // Flag to track the display state of the time

    document.getElementById('showTimeBtn').addEventListener('click', function () {
        const dateTimeDisplay = document.getElementById('dateTimeDisplay');

        if (isTimeDisplayed) {
            // Hide time with animation
            dateTimeDisplay.classList.remove('fade-in');
            dateTimeDisplay.classList.add('fade-out');
            setTimeout(() => {
                dateTimeDisplay.textContent = '';
                clearInterval(intervalId);
            }, 1000); // Wait for the animation to finish
        } else {
            // Show time with animation and start interval for updates
            intervalId = setInterval(() => {
                const now = new Date();
                const currentTime = now.toLocaleTimeString();
                dateTimeDisplay.textContent = currentTime;
            }, 1000);

            dateTimeDisplay.classList.remove('fade-out');
            dateTimeDisplay.classList.add('fade-in');
        }

        isTimeDisplayed = !isTimeDisplayed;
    });

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

