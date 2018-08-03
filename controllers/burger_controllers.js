var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log("DATA!!!", data);
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("POSTED");
  console.log("REQ:", req.body.burger_name);
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {

	  res.json({ id: result.insertId });
  	console.log("POSTED:", result);
  // res.send(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {

      console.log("Devoured in UPDATEONE", req.body.devoured);
      console.log(result);
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;