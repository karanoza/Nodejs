var express = require("express");
var app = express();
app.get("/:id", function (req, res) {
  res.send("id : " + req.params.id);
});
app.listen(3000, function () {
  console.log("Server Started...");
});
