const db = require('../models')

module.exports = app => {
  app.get('/products', (req, res) => {
    db.products.findAll({})
    .then(r => res.json(r))
    .catch(e => console.log(e))
  })
  app.get('/products/:name', (req, res) => {
    db.products.findOne({ where: { name: req.params.name } })
    .then(r => res.json(r))
    .catch(e => console.log(e))
  })
  app.post('/products', (req, res) => {
    db.products.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
  app.put('/products/:name', (req, res) => {
    db.products.update(req.body, { where: { name: req.params.name } })
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
  app.delete('/products/:name', (req, res) => {
    db.products.destroy({ where: { name: req.params.name } })
    .then(() => sendStatus(200))
    .catch(e => console.log(e))
  })
  app.delete('/products/', (req, res) => {
    db.products.destroy({ where: {}, truncate: true })
    .then(() => sendStatus(200))
    .catch(e => console.log(e))
  })
}