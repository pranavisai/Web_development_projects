import express from "express";
import bodyParser from "body-parser";

const today = new Date();
const dayOfWeek = today.getDay();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        day_number : dayOfWeek
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});