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


    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();


        document.getElementById('successMessage').style.display = 'block';

        document.getElementById('contactForm').reset();
    });

    document.getElementById('reservationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        alert('Your reservation has been made successfully!');

        document.getElementById('reservationForm').reset();
    });

