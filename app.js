const express = require('express')
const app = express()

app.set('views', './views')
app.use(express.static('./public'))

//Routing
app.use('/', (req, res) => {
  res.send('Hello World')
})

let run_app = app.listen(9000,
     () => console.log(`The app is running and listening on port ${run_app.address().port}`))