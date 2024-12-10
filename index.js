import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (res,req)=>{
    req.render("index.ejs")
})

app.listen((port), () =>{
    console.log(`Server running on port ${port}`);
})