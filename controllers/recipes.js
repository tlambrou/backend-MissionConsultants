var db = require('../models')

module.exports = (app) => {

  // CREATE
  app.post('/recipes/create', (req, res) => {
    db.Recipe.create(req.body)
    .then((recipe) => {
      console.log("Response from Recipe/Create: ", recipe)
      res.status(200)
      res.json({
        msg: 'Recipe added successfully!',
        recipe
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // INDEX
  app.get('/recipes', (req, res) => {
    db.Recipe.findAll()
    .then((recipes) => {
      console.log("Response from Recipe/Index: ", recipes)
      res.json(recipes)
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // SHOW
  app.get('/recipes/:id', (req, res) => {
    const recipeId = req.params.id
    db.Recipe.findById(recipeId)
    .then((recipe) => {
      console.log("Response from Recipe/Show: ", recipe)
      res.json(recipe)
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // UPDATE
  app.put('/recipes/:id/update', (req, res) => {
    const recipeId = req.params.id
    const recipe = req.body
    db.Recipe.update(recipe, { where: { id: recipeId } })
    .then((recipe) => {
      console.log("Response from Recipe/Update: ", recipe)
      res.status(200)
      res.json({
        msg: 'Recipe updated successfully!',
        recipe
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // DELETE
  app.delete('/recipes/:id', (req, res) => {
    const recipeId = req.params.id
    db.Recipe.destroy({ where: { id: recipeId } })
    .then((response) => {
      console.log("Response from Recipe/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'Recipe deleted successfully!',
        qty: response
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })


}
