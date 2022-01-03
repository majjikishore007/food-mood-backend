require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/schema");
const mongoose = require("mongoose");

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
// database
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB IS CONNECTED");
  })
  .catch((err) => {
    console.log("Error" + err.message);
  });

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphql: true,
  })
);

app.listen(PORT || 8080, () => {
  console.log("Server is Up on port " + PORT);
});
