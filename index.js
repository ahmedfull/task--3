const express = require('express');
const router = require("./router/router")
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use(router)
app.listen(1500 , ()=> {

     console.log("listening on port 1500🚀🚀")

});