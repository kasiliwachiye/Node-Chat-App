// step 1: requiring
var express = require("express")
// step 2: setting referennce to express
var app = express()

// step 4: using the html file
app.use(express.static(__dirname))

// step 3: listening to port
// step 5: setting app.listen to a variable
var server = app.listen(3000, function(){
    console.log("Server is running on port", server.address().port)
})
