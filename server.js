const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const recipes = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")


nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res) {
  return res.render("start", { items: recipes })

})

server.get("/about", function (req, res) {
  return res.render("about")

})

server.get("/recipes", function (req, res) {
  return res.render("recipes", { items: recipes })
})

server.get("/recipes/:id", function (req, res) {
  const id = req.params.id;
  console.log("Recipes id sucessfuly read :)") // está falhando corretamente

  const recipe = recipes.find(function (recipe) {
    console.log("Recipes details sucessfuly read :)") // retorna corretamente os detalhes das receitas
    return recipe.id == id
  })
  if (!recipe) {
    return res.send("Recipe not found! :(")
  }

  return res.render("recipe", { item: recipe })
});

server.listen(5000, function () {
  console.log("server is running")
})

server.use(function (req, res) {
  res.status(404).render("not-found");
})
