function loginUser() { 
    var username1 = document.getElementById("username").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const savedUserData = localStorage.getItem(username);
    if (savedUserData) {
        const userData = JSON.parse(savedUserData);

        if (userData.password === password) {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("phoneNumber", userData.phoneNumber);
            localStorage.setItem("isLoggedIn", "true"); 
            alert(`Welcome, ${username}!`);
            window.location.href = "user.html"; 
        } else {
            alert("Incorrect username or password.");
        }
    } else {
        alert("User not found.");
    }
}

