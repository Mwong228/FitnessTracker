const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

app.use(logger("dev"))

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


require("./routes/api-routes")(app)
require("./routes/html-routes")(app)

app.listen(PORT, function(){
    console.log(`Listening on PORT: ${PORT}`)
})