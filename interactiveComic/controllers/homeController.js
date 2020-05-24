"use strict";

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

exports.showMaker = (req, res) => {
  res.render("maker", {
    offeredCourses: courses
  });
};

exports.showComic = (req, res) => {
  res.render("comic");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};
