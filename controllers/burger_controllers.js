var express = require("express");
// var burger = require("../models");
var db = require("../models");

var app = express.Router();

// Create all our routes and set up logic within those routes where required.
module.exports = function (app) {
  app.get("/", function (req, res) {

    db.burgers.findAll({}).then(function (dbburgers) {
      // res.json(dbburgers);
      var burgerNames = [];
      // console.log("DATA!!!", dbburgers);

      for (var i = 0; i< dbburgers.length; i++){
        // console.log(i, dbburgers[i].dataValues.burger_name);
        burgerNames.push({
          burger_name: dbburgers[i].dataValues.burger_name, 
          id: dbburgers[i].dataValues.id, devoured: dbburgers[i].dataValues.devoured});
        // console.log(i, dbburgers[i].dataValues.id);
        // burgerNames.push({burger_name: dbburgers[i].dataValues.id});
      }
      var hbsObject = {
        // burgers:  [{burger_name: dbburgers}]
        burgers: burgerNames
      }
    
      ;
      console.log("OBJECT IN GET", hbsObject);
      res.render("index", hbsObject);
    });
    // burger.selectAll(function(data) {

  });

  app.post("/api/burgers", function (req, res) {
      
    db.burgers.create({
      burger_name: req.body.burger_name
    }).then(function (result) {
      console.log("POSTED", result);

      res.json({id: result.dataValues.insertId});
      console.log("id: result", result.dataValues.id);
      // res.send(result);
    })
    // burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    	// console.log("POSTED:", result);
    // });
  });

  app.put("/api/burgers/:id", function (req, res) {


    var condition = "id = " + req.params.id;

    console.log("condition in app", condition);
    console.log("Devoured in UPDATEONE", req.body);
    
    db.burgers.update({
      
      // burger_name: req.body.burger_name,
      devoured: req.body.devoured
    },{
    where: {
          id: req.params.id
    }
    }).then(function(dbburgers){
      console.log(dbburgers);
      res.json(dbburgers);

    });

    // burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {

    //     if (result.changedRows === 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     }
    //     res.status(200).end();

    //   }
    // );
  });
}


