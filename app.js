const express =require('express')
var app =express();
const connection = require('./db');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//get api
app.get('/get',(req,res) => {
    res.send("hello there");
})

//post method

app.post('/addUser',(req,res) => {

    console.log(req.body);
    var postData = {
        "name" : req.body.name,
        "age" : req.body.age,
        "mobile_number" : req.body.mobile_number
    };

    connection.query('insert into users.user set ? ', postData, function(err,result){
      if(err)
          console.log(err);
      else{
          console.log("inserted")
          res.send("data added successfully!!")
      }  
    })
    // http put method
app.put('/update/:id',(req,res) => { // path param

    var id = req.params.id;
    connection.query('update users.user set mobile_number = ? where id = ? ', [req.body.mobile_number,id] , function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("upadted");
            res.send("data got updated!");
        }
    })
  })
})
app.listen(8085);