var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexao com bd estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'

    });
}

module.exports = function(){
    console.log('o autoload carregou modulo de conexao com o banco de dados');
    return connMysql;

}
