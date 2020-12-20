const express = require("express");
const mongoose = require("mongoose");
const app = express()
;
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT)

})