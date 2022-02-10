const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const food = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")


nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res) {
  return res.render("start", { items: food })

})

server.get("/about", function (req, res) {
  return res.render("about")

})

server.get("/recipes", function (req, res) {
  return res.render("recipes", { items: food })
})

server.get("/recipes/:id", function (req, res) {
  const id = req.params.id;
  console.log(id)

  const food = food.find(function (food) {
    // console.log(food)
    return food.id == id
  })
  if (!food) {
    return res.send("Recipe not found! :(")
  }

  return res.render("food", { item: food })
});

server.listen(5000, function () {
  console.log("server is running")
})

server.use(function (req, res) {
  res.status(404).render("not-found");
})
