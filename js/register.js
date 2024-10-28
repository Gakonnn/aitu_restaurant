function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Проверка на заполненность полей
    if (!username || !password || !phoneNumber) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Проверка на существующего пользователя
    if (localStorage.getItem(username)) {
        alert("Такой пользователь уже существует.");
    } else {
        // Сохранение данных пользователя
        const userData = JSON.stringify({ password, phoneNumber });
        localStorage.setItem(username, userData);
        alert("Регистрация успешна! Теперь вы можете войти.");
        window.location.href = "login.html"; // Перенаправление на страницу входа
    }
}
