const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))

//Routing
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/index.html'))
})

let run_app = app.listen(9000,
     () => console.log(`The app is running and listening on port ${run_app.address().port}`))