// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
const axios = require("axios").default;

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { default: Axios } = require("axios");

module.exports = function (app) {

  //Home page (Log in or sign up)
  // app.get("/", function (req, res) {
  //   if (req.user){
  //     res.render("login");
  //   }
  //   res.render("signup");
  // });

  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    let url =  req.headers.host

    if (url.includes(":")){
      url = url.split(":")[0];
    }

    db.Videos.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(videos){
      console.log(url);

      res.render("clips", {
        videos: videos.map(video => video.toJSON()),
        url: url
      });
    })
  })
};