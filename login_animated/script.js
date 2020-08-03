const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'myka',
    password: '32142970',
    database: 'login'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


function verificar() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    connection.query("INSERT INTO login_usuario(username, password), VALUES (user, password)", function(err, result) {
        if (!err) {
            console.log("Usuario cadastrado com sucesso!");
        } else {
            console.log("Erro ao cadastrar o usuario!");
        }
    });
    window.alert("CADASTRO REALIZADO COM SUCESSO!")
}