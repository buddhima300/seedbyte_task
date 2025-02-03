// lets import the express to create the server
const express = require("express");
const app = express(); // creating an instance of express

// now lets implement the cors middleware to handle client requests from different domains
const cors = require("cors");
app.use(cors()); // enabling cors for all routes

//lets utilize the body-parser middleware to parse the incomming requests with json format
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // enabling body-parser for all routes

//lets create the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
