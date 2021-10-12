const express = require('express');
const path = require('path');
const app = express();
const port = 8000 ;

//for static file
const static_path = path.join(__dirname,'//public');
app.use(express.static(static_path));

//routing
app.get("",(req,res)=>{
    res.send("welcome to web-developing");
});
app.get("*",(req,res)=>{
    res.send('ERROR 404');
});
app.listen(port,()=>{
    console.log(`listening to port at ${port}`);
});