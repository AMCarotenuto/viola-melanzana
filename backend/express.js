const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyR00qDFV6vvxMq2" }).base(
  "appd8eN5Q77OzFlvy"
);

app.get("/ingredients", async (req, res) => {
  fetch(
    `https://api.airtable.com/v0/appd8eN5Q77OzFlvy/ingredients?view=Grid%20view`,
    {
      headers: { Authorization: `Bearer keyR00qDFV6vvxMq2` }, // API key
    }
  )
    .then((res) => res.json())
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/recipes", async (req, res) => {
  fetch(
    `https://api.airtable.com/v0/appd8eN5Q77OzFlvy/ingredients?view=Grid%20view`,
    {
      headers: {
        Authorization: `Bearer keyR00qDFV6vvxMq2`,
        "Content-Type": "application/json",
      }, // API key
      method: "post",
      body: JSON.stringify(res),
    }
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.all((req, res) => {
  res.json({ error: "C'è un disturbo nella forza" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
