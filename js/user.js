document.addEventListener("DOMContentLoaded", () => {
    // Проверяем, вошел ли пользователь
    const username = sessionStorage.getItem("username");
    const phoneNumber = sessionStorage.getItem("phoneNumber");

    if (username && phoneNumber) {
        // Отображаем данные пользователя
        document.getElementById("userName").textContent = username;
        document.getElementById("profileUsername").textContent = username;
        document.getElementById("profilePhone").textContent = phoneNumber;
    } else {
        // Если данных нет, перенаправляем на страницу входа
        alert("You are not logged in.");
        window.location.href = "login.html";
    }

    // Обработчик кнопки выхода
    document.getElementById("logout").addEventListener("click", () => {
        // Удаляем информацию о пользователе из sessionStorage
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("phoneNumber");
        localStorage.setItem("isLoggedIn", "false"); // Можно обновить статус логина в localStorage
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
});
