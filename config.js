const mysql = require('mysql');

const connection = mysql.createConnection({
  debug: true,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_db',
});

connection.connect(function(err){
  if(err) {
    console.log('error: ' + err/stack);
  }

  console.log('connected as id' + connection.threadId);
});

module.exports = connection;
