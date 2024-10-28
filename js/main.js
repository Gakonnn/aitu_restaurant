document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailField = document.getElementById("email");
    const seatsField = document.getElementById("seats");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        let errorMessage = "";

        // Check required fields
        const restaurant = document.getElementById("restaurant").value;
        const date = document.getElementById("date").value;
        const email = document.getElementById("emal").value;
        const seats = seatsField.value;

        if (!restaurant) {
            isValid = false;
            errorMessage += "Please select a restaurant.\n";
        }

        if (!date) {
            isValid = false;
            errorMessage += "Please select a reservation date.\n";
        }

        if (!seats || seats < 1 || seats > 20) {
            isValid = false;
            errorMessage += "Please enter a valid number of seats (1-20).\n";
        }


        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";

        }


        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {

        const faqItems = document.querySelectorAll('.faq-question');
        faqItems.forEach(item => {
            item.addEventListener('click', function () {
                const answer = this.nextElementSibling;
                if (answer.style.display === "block") {
                    answer.style.display = "none";
                } else {
                    answer.style.display = "block";
                }
            });
        });

        const faqButton = document.getElementById('faqButton');
        const faqSection = document.getElementById('faqSection');

        faqButton.addEventListener('click', function () {
            if (faqSection.style.display === "none") {
                faqSection.style.display = "block";
            } else {
                faqSection.style.display = "none";
            }
        });

        faqSection.style.display = 'none';
    });

document.addEventListener("DOMContentLoaded", function() {
        const popupForm = document.getElementById("popupForm");
        const popupOverlay = document.getElementById("popupOverlay");
        const openPopupButton = document.getElementById("openPopup");
        const closePopupButton = document.getElementById("closePopup");


        openPopupButton.addEventListener("click", function() {
            popupForm.style.display = "block";
            popupOverlay.style.display = "block";
        });

        closePopupButton.addEventListener("click", function() {
            popupForm.style.display = "none";
            popupOverlay.style.display = "none";
        });

        popupOverlay.addEventListener("click", function() {
            popupForm.style.display = "none";
            popupOverlay.style.display = "none";
        });
    });


function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filterValue = document.getElementById('filter').value;
    const products = document.querySelectorAll('.product');
    let count = 0;

    products.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase();
        const productCategory = product.classList.contains(filterValue) || filterValue === 'all';

        if (productName.includes(searchInput) && productCategory) {
            product.style.display = 'block';
            count++;
        } else {
            product.style.display = 'none';
        }
    });

    document.getElementById('productCount').textContent = count + " product(s) found";
}

function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const products = Array.from(document.querySelectorAll('.product'));

    if (sortValue === 'asc') {
        products.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
    } else if (sortValue === 'desc') {
        products.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
    }

    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        productList.appendChild(product);
    });
}

document.getElementById('openPopup').onclick = function() {
    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById('popupForm').style.display = 'block';
};

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupForm').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('popupOverlay')) {
        document.getElementById('popupOverlay').style.display = 'none';
        document.getElementById('popupForm').style.display = 'none';
    }
};

let intervalId;
let isTimeDisplayed = false;
let timeButton = document.getElementById('myButton');

document.getElementById('showTimeBtn').addEventListener('click', function () {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');

    if (isTimeDisplayed) {

        dateTimeDisplay.classList.remove('fade-in');
        dateTimeDisplay.classList.add('fade-out');
        setTimeout(() => {
            dateTimeDisplay.textContent = '';
            clearInterval(intervalId);
        }, 1000);
    } else {

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













