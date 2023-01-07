const express = require("express")
const verifyAuth = require("./authen")
const app = express()
const authen = require("./authen")
const port = 5000
app.use(verifyAuth)
app.use(express.static("page"))


// app.get('/' ,function (req , res)  {
   
//     });
app.listen(port , function() {
    console.log("the server in running,"+ ' please, open your browser at http://localhost:%s',  port)

})
