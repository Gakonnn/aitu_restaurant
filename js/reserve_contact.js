document.addEventListener("DOMContentLoaded", () => {
    const contactFormSection = document.getElementById("contactFormSection");
    const toggleButton = document.getElementById("toggleContactForm");

    toggleButton.addEventListener("click", () => {
        // Переключаем класс hidden/visible
        if (contactFormSection.classList.contains("hidden")) {
            contactFormSection.classList.remove("hidden");
            contactFormSection.classList.add("visible");
            toggleButton.textContent = "Hide Contact Us";
        } else {
            contactFormSection.classList.remove("visible");
            contactFormSection.classList.add("hidden");
            toggleButton.textContent = "Show Contact Us";
        }
    });
});
