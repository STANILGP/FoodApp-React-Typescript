const mysql = require(`mysql`);
 const connection = mysql.createConnection({
    host: '127.0.0.1:12345', 
    user: 'root', 
    password: '1212', 
    database: 'food'
 });

 connection.connect((err) => {
    if (err) {
        console.error('Грешка при свързване с базата данни: ', err);
        return;
    }
    console.log('Свързан с базата данни!');
});
module.exports = connection;