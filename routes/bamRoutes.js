const db = require('../models')

module.exports = app => {
  app.get('/goods', (req, res) => {
    db.goods.findAll({})
    .then(r => res.json(r))
    .catch(e => console.log(e))
  })
  app.get('/goods/:name', (req, res) => {
    db.goods.findOne({ where: { name: req.params.name } })
    .then(r => res.json(r))
    .catch(e => console.log(e))
  })
  app.post('/goods', (req, res) => {
    db.goods.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
  app.put('/goods/:name', (req, res) => {
    db.goods.update(req.body, { where: { name: req.params.name } })
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
  app.delete('/goods/:name', (req, res) => {
    db.goods.destroy({ where: { name: req.params.name } })
    .then(() => sendStatus(200))
    .catch(e => console.log(e))
  })
  app.delete('/goods/', (req, res) => {
    db.goods.destroy({ where: {}, truncate: true })
    .then(() => sendStatus(200))
    .catch(e => console.log(e))
  })
}