const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        if (req.url === '/login') {
            handleLogin(req, res);
        } else if (req.url === '/register') {
            handleRegister(req, res);
        } else {
            handleNotFound(res);
        }
    } else {
        handleNotFound(res);
    }
});

// Обработчик входа
function handleLogin(req, res) {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
        const data = JSON.parse(body);
        const username = data.username;
        const password = data.password;
        
        // Здесь вы можете выполнить проверку входа
        // и отправить ответ обратно на клиент
        
        const response = {
            success: true,
            message: 'Вход выполнен успешно!'
        };
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    });
}

// Обработчик регистрации
function handleRegister(req, res) {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
        const data = JSON.parse(body);
        const username = data.username;
        const password = data.password;
        
        // Здесь вы можете выполнить проверку регистрации
        // и сохранить данные в файл JSON
        
        const user = {
            username: username,
            password: password
        };
        
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Произошла ошибка при чтении файла:', err);
                const response = {
                    success: false,
                    message: 'Произошла ошибка при регистрации'
                };
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response));
                return;
            }
            
            let users = [];
            if (data) {
                users = JSON.parse(data);
            }
            
            // Проверяем, существует ли пользователь с таким же именем
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                const response = {
                    success: false,
                    message: 'Пользователь с таким именем уже существует'
                };
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response));
                return;
            }
            
            users.push(user);
            
            fs.writeFile('data.json', JSON.stringify(users), 'utf8', err => {
                if (err) {
                    console.log('Произошла ошибка при записи файла:', err);
                    const response = {
                        success: false,
                        message: 'Произошла ошибка при регистрации'
                    };
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(response));
                    return;
                }
                
                const response = {
                    success: true,
                    message: 'Регистрация успешно завершена!'
                };
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response));
            });
        });
    });
}

// Обработчик 404 Not Found
function handleNotFound(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
}

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
