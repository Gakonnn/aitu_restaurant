function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const savedUserData = localStorage.getItem(username);
    if (savedUserData) {
        const userData = JSON.parse(savedUserData);

        if (userData.password === password) {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("phoneNumber", userData.phoneNumber);
            localStorage.setItem("isLoggedIn", "true"); 
            alert(`Добро пожаловать, ${username}!`);
            window.location.href = "home.html"; 
        } else {
            alert("Неверное имя пользователя или пароль.");
        }
    } else {
        alert("Пользователь не найден.");
    }
}
