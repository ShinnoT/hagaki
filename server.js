const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 5000;

const tours = createTours();

app.use(bodyParser.json());

// define cutom server side routes here

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
