var express = require('express');
var router = express.Router();
var connnection = require('../db_config')


/* GET users listing. */
router.get('/', function(req, res, next) {
  var getStudents = " select * from student"
  connnection.query(getStudents,(err,result)=>{
     if(err) console.log(' there is an error ');
     else res.send({result})
  })
});

module.exports = router;
