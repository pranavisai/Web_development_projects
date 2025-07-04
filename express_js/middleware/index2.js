import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// testing logging middleware morgan
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
