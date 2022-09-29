var express = require('express');
var router = express.Router();
var connnection = require('../db_config')


/* GET users listing. */
router.get('/', function(req, res, next) {
  var getStudents = " select * from student where (age = 21)  "
  connnection.query(getStudents,(err,result)=>{
     if(err) console.log(' there is an error ');
     else res.send({result})
  })
});

router.post('/add-user',(req,res)=>{
     var addUser = " INSERT INTO student (firstName,lastName,age) VALUES ('sofien', 'hedjazi',35) "
     connnection.query(addUser,(err,result)=>{
      if(err) console.log(' there is an error ');
      else res.send({result})
     })
})

module.exports = router;
