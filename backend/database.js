// const { Client } = require("pg");

// const client = new Client({
//   connectionString:
//     "postgres://qguoxkdbgqohhn:4ecdead2756f1366a424a6bec4dbdd7b04a131ba2f9924334d8810008261f9d9@ec2-34-248-148-63.eu-west-1.compute.amazonaws.com:5432/d84gpa0tilkgug?ssl=true",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// client.connect();

// client.query(
//   "SELECT table_schema,table_name FROM information_schema.tables;",
//   (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   }
// );

/////////////////////////////////AIRTABLE DATABASE

const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyR00qDFV6vvxMq2",
});

const base = airtable.base("tbl70ebrVcjqj5j4v");

base("Table 1").create(
  { Name: "test", Notes: "test notes" },
  function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  }
);
