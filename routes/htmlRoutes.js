const express = require("express");
const router = express.Router();
const path = require("path");

//route to display the home html
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//route to display the excercise html
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
});

//route to display the stats html
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;