const express = require('express');
const app = express();//create our server
const port = 8000;
require("./database")
const userRouter=require("./routes/user");
app.use(express.json()); //read only json files

app.use("/users", userRouter)


app.listen(port, () => {
    console.log("listining to port" +port)
})