var mysql = require('mysql');
var express = require('express');
var app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cinema_db"
});


//SELECT TABLE DANS LE TERMINAL CMD
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM film", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });


  
//route vers la table film
app.get('/', function(req, resp){
    con.query('SELECT * FROM film', function(error, rows, fields){
        if(error){
            console.log('error');
        }else{
            console.log('successful\n');
            console.log(rows);
            resp.send(rows);
        }
    })
})


//PORT LISTEN
app.listen(20001, function () {
  console.log('Example app listening on port 20001');
  });