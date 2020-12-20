const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const app = express()
const htmlRoutes = require("./routes/htmlRoutes");
;
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.use(htmlRoutes);

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT)

})