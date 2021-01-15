/////////////////////////////////// POSTGRES DATABASE

// const { Client } = require("pg");

// const client = new Client({
//   connectionString:
//     "postgres://ywqsvxyeeljsqt:872fbc7facf46e4bc3299d2237511dd93ed0303c721ce21cc8de7c394b8c00d3@ec2-54-78-127-245.eu-west-1.compute.amazonaws.com:5432/df5defsugm5c4l?sslmode=require",
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

// const airtable = require("airtable");

// airtable.configure({
//   endpointUrl: "https://api.airtable.com",
//   apiKey: "keyR00qDFV6vvxMq2",
// });

// const base = airtable.base("tbl70ebrVcjqj5j4v");

// base("Table 1").create(
//   { Name: "test", Notes: "test notes" },
//   function (err, record) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(record.getId());
//   }
// );
