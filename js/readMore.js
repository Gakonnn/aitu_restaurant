
const readMoreBtn = document.getElementById('read-more-btn');
const extraContent = document.getElementById('extra-content');
const paragraph = document.getElementById('more-text');

readMoreBtn.addEventListener('click', function() {
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'inline';
        paragraph.classList.add('show');
        readMoreBtn.textContent = 'Read Less';
    } else {
        paragraph.classList.remove('show');
        extraContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});
