import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
        h1_tag : "<h1>Enter your name 👇</h1>"
    });
});

app.post("/submit", (req, res) => {
        var total_length = req.body["fName"].length + req.body["lName"].length;
        res.render("index.ejs", {
          h1_tag : '<h1>Your name is ' + total_length + " numbers long 🥳!</h1>"
        })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
