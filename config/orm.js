var connection = require("./connnection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
			arr.push(key + "=" + value);
			console.log("ARR", arr);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " +tableInput+ ";";
		connection.query(queryString, function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
	insertOne: function(table, col, vals, cb){

		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
		
		// console.log("INSERTONE ORM:", queryString);
		// console.log("COL:", col);

		connection.query(queryString, vals, function(err, res){
		
			if (err) throw err;

			cb(res);
		});
	},
	updateOne: function(table, ob, condition, cb){
		var queryString = "UPDATE " + table;
		
		queryString += " SET ";
		queryString += objToSql(ob);
		queryString += " WHERE ";
		queryString += condition;
		
		console.log("UPDATEONE ORM:", queryString);
		connection.query(queryString, function(err, res){
			if(err) throw err;
			
			cb(res);
		});	
	}	
};

module.exports = orm;