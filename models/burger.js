var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	}, 

	insertOne: function(col, val, cb){
		console.log(col, val);
		orm.insertOne("burgers", col, val, function(res){
			console.log("InsertOne:", res);
			cb(res);
		});
	},

	updateOne: function(ob, condition, cb){
		orm.updateOne("burgers", ob, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;