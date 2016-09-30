var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

//connect database
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});
db.on("error", function(err) {
  console.log("DB ERROR :", err);
});

//view setting
app.set("view engine",'ejs');

//set middlewares
app.use(express.static(path.join(__dirname + 'public')));

//setart server
app.listen(3000, function() {
  console.log('server on');
})
