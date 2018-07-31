var connection = require("./connnection.js");

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " +tableInput+ ";";
		connection.query(queryString, function(err, res){
			if (err) throw err;
			cb(res);
		})
	},
	insertOne: function(table, col, vals, cb){
	
	},
	updateOne: function(){

	}
}

module.exports = orm;