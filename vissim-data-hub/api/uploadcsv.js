const mysql = require('mysql');
const fs = require('fs')


function upload(req, res) {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'insaid',
  });

  
  req = req.body

  con.connect((err) => {
    if (err) {
      res.status(400).send({
        success: false,
        erroer: err,
        message: 'Database Error',
      });
      return 0;
    }
    console.log('Connected!');

    const name = req.name
    const email = req.email 
    const path = req.csv

    console.log(path);


    const sql = 'INSERT INTO user VALUES ?'
    const user = [[name, email, LOAD_FILE(path)]];

    console.log(2)

    con.query(sql, [user], async (erro, result) => {
      console.log(1)
      if (erro) {
        res.status(400).send({
          success: false,
          message: 'Unknown Error',
        });
        console.log(1)
        console.log(erro.message);
        con.end();
        return 0;
      }

      res.send({
        success: true,
        data: {
          
        },
      });
    });

    con.end();
  });

}

exports.execute = upload