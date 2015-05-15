var express = require('express');
var router = express.Router();
var jf = require('jsonfile');
var util = require('util');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(path.normalize(path.join(__dirname,'..' ,'data','menu.json')));
	var file = path.normalize(path.join(__dirname,'..' ,'data','menu.json'));

	jf.readFile(file, function(err, obj) {
		console.log(err);
  		console.log(util.inspect(obj));
  		res.render('index', {menu: obj});
	});
	
});

module.exports = router;
