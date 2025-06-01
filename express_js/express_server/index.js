import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hey! I am Pranavi!</h1>");
});

// example of giving an endpoint
app.get("/newpage", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hey! I am Pranavi! This is a new endpoint page called newpage</h1>");
});

// the app is listening on port 3000 and the callback function is anonymous "()"
app.listen(port, () => {
    console.log("Server running on port "+ port);
});

