import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1971",
  port: 5432,
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries;");
    const codes = result.rows.map(row => row.country_code);
    res.render("index.ejs", { countries: codes, total: codes.length, error: null });
  } catch (error) {
    console.error("GET / error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add", async (req, res) => {
  try {
    const country_name = req.body["country"];
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ",
      [country_name.toLowerCase()]
    );
    const code = result.rows[0]?.country_code;

    const result_visited = await db.query("SELECT country_code FROM visited_countries;");
    const codes = result_visited.rows.map(row => row.country_code);

    if (!code) {
      return res.render("index.ejs", {
        countries: codes,
        total: codes.length,
        error: "This country does not exist. Try again.",
      });
    }

    const already_visited = await db.query("SELECT * FROM visited_countries WHERE country_code = $1", [code]);
    

    if(already_visited.rows.length > 0){
      return res.render("index.ejs", {
        countries: codes,
        total: codes.length,
        error: "This country has already been visited. Try again.",
      });
    }

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [code]);
    res.redirect("/");
    } 
  catch (error) {
    console.error("POST /add error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
