// script.js

const fs = require('fs');

// Класс для работы с формой логина
class LoginForm {
  constructor() {
    this.loginForm = document.getElementById('login-form');
    this.loginForm.addEventListener('submit', this.login.bind(this));
  }

  login(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Чтение данных из JSON файла
    const data = fs.readFileSync('users.json');
    const users = JSON.parse(data);

    // Проверка наличия пользователя и соответствия пароля
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      console.log('Login successful');
    } else {
      console.log('Invalid username or password');
    }

    this.clearForm();
  }

  clearForm() {
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
  }
}

// Класс для работы с формой регистрации
class RegistrationForm {
  constructor() {
    this.registrationForm = document.getElementById('registration-form');
    this.registrationForm.addEventListener('submit', this.register.bind(this));
  }

  register(event) {
    event.preventDefault();

    const username = document.getElementById('registration-username').value;
    const password = document.getElementById('registration-password').value;

    // Чтение данных из JSON файла
    const data = fs.readFileSync('users.json');
    const users = JSON.parse(data);

    // Проверка наличия пользователя с таким же именем
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      console.log('Username already exists');
    } else {
      // Добавление нового пользователя
      const newUser = {
        username: username,
        password: password
      };
      users.push(newUser);
      const jsonData = JSON.stringify(users, null, 2);

      // Запись данных в JSON файл
      fs.writeFileSync('users.json', jsonData);
      console.log('Registration successful');
    }

    this.clearForm();
  }

  clearForm() {
    document.getElementById('registration-username').value = '';
    document.getElementById('registration-password').value = '';
  }
}

// Создаем экземпляры классов для формы логина и регистрации
const loginForm = new LoginForm();
const registrationForm = new RegistrationForm();
