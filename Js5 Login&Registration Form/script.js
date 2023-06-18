document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    
    // Выполняем вход пользователя
    login(username, password);
});

document.getElementById('registerButton').addEventListener('click', function() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    
    // Регистрируем нового пользователя
    register(username, password);
});
