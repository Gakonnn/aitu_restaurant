function registerUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    // Check if all fields are filled
    if (!username || !password || !phoneNumber) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate username (at least 3 characters)
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return;
    }

    // Validate password (at least 8 characters, with a number, uppercase, and lowercase letter)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include a number, an uppercase, and a lowercase letter.");
        return;
    }

    // Validate phone number (only digits, between 10 and 15 characters)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert("Phone number must be between 10 and 15 digits and contain only numbers.");
        return;
    }

    // Check if username already exists
    if (localStorage.getItem(username)) {
        alert("Such user already exists.");
    } else {
        // Save user data in localStorage
        const userData = JSON.stringify({ password, phoneNumber });
        localStorage.setItem(username, userData);
        alert("Registration successful! Now you can log in.");
        window.location.href = "login.html";
    }
}
