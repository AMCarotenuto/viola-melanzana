const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./database");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const knex = require("knex")({
//   client: "postgres",
//   connection: {
//     user: "qguoxkdbgqohhn",
//     password: "4ecdead2756f1366a424a6bec4dbdd7b04a131ba2f9924334d8810008261f9d9",
//     host: "ec2-34-248-148-63.eu-west-1.compute.amazonaws.com",
//     port: 5432,
//     database: "d84gpa0tilkgug",
//     sslmode=require
//   },
//   useNullAsDefault: true,
// });

const knex = require("knex")({
  client: "pg",
  connection:
    "postgres://ywqsvxyeeljsqt:872fbc7facf46e4bc3299d2237511dd93ed0303c721ce21cc8de7c394b8c00d3@ec2-54-78-127-245.eu-west-1.compute.amazonaws.com:5432/df5defsugm5c4l?sslmode=require",
});

app.get("/ingredients", async (req, res) => {
  const ingredient = await knex.select("ingredient_name").from("ingredients");
  if (ingredient) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.all((req, res) => {
  res.json({ error: "C'è un disturbo nella forza" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
