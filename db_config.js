const mysql = require('mysql')

var connection = mysql.createConnection(
    {
        host : 'localhost',
        user :'root',
        password :'', 
        database : 'express_tuto_mysql'
    }
)

connection.connect(
    (err)=>{
        if(err) console.log(' connection failed');
        else console.log(' connected to the database with success');
    }
)

module.exports = connection