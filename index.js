const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

//connecting static folder
app.use(express.static("./assets"));

//import of layouts for use
app.use(expressLayouts);

//extract styles and scripts from sub pages into the layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);


//use express router
app.use("/", require("./routes"));

//setup the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running well on port : ${port}`);
});