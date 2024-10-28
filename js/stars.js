// JavaScript for star rating system
const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating');

stars.forEach((star, index) => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');

        ratingDisplay.textContent = `Rating: ${rating}`;


        stars.forEach(s => s.style.color = '');


        for (let i = 0; i <= index; i++) {
            stars[i].style.color = 'gold';
        }
    });
});
