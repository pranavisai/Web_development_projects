import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "1971",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try{
    const check_if_exists = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    if(check_if_exists.length > 0) {
      res.send("You already have an account. Please log in!")
    }
    else {
    await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
    res.render("secrets.ejs");
    }
  }
  catch(err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try{
    const result = await db.query("SELECT password FROM users WHERE email = $1", [email]);
    if(result.rows.length > 0){
      const fetched_password = result.rows[0].password;
    if(password === fetched_password) {
      res.render("secrets.ejs");
    }
    else {
    res.send("Your password is incorrect. Please try again!")
    }
    } else{
      res.send("User not found. Please register.")
    }
  }
  catch(err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
