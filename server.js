const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

require('./routes/bamRoutes')(app)

require('./models').sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))})
