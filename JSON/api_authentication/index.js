import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "youpieceofshit";
const yourPassword = "Youpieceofshit";
const yourAPIKey = "60af9986-320f-4887-881f-e5dc326a70c0";
const yourBearerToken = "35f18ce4-f8ec-4d45-ba71-838684691ebf";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
 try{
    const result = await axios.get(API_URL + "/all?page=2", {
  auth: {
    username: yourUsername,
    password: yourPassword
  }});
  res.render("index.ejs", { content: JSON.stringify(result.data) });
 } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  try {
    const result = await axios.get(API_URL+ "/filter", {
  params: {
    score: 5,
    apiKey: yourAPIKey,
  }
});

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async(req, res) => {
 try {
 const result = await axios.get(API_URL + "/secrets/42", {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`
  }});
  res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
