const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const app = express()
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
;
const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.use(htmlRoutes);
app.use(apiRoutes);

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

});

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT)

})