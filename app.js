const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const users = require("./Routes/userRoutes");
const { requestLogger } = require("./Services/logger")

app.use('/', users);
app.use(requestLogger);

//display the server is running on port 3000
app.listen(port, () =>{
    console.log(`Server is running on Port ${port}`)
})


app.get('/',(req,res) =>{
    res.send("This is to create AddUser endpoint")
})


//Add logger

