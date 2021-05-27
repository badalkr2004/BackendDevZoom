const { json } = require("body-parser");
const express = require("express");
const router = express.Router()

// get route for home page 
router.get("/", (req, res) => {
    res.render("index", {
        navbar_brand: "Zoom Computer Center"
    })
});


// get route for courses page 
router
    .get("/courses", (req, res) => {
        res.render("courses")
    })



//get route for Login Pages
router.get("/login", (req, res) => {
    res.render("login")
})

// get route for contact page 
router.get("/contact", (req, res) => {
    res.render("contact")
})

// get route for contact page 
router.get("/about", (req, res) => {
    res.render("about")
})

module.exports = router;