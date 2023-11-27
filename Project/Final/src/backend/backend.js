var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

const url = "mongodb://127.0.0.1:27017";
const dbName = "AmeroBakery";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/AmeroBakery", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
    .collection("cookies")
    .find(query)
    .limit(100)
    .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
    });

    app.get("/AmeroBakery/products/:productId", async (req, res) => {

      await client.connect();
      console.log("Node connected successfully to GET MongoDB");
      const { productId } = req.params;
      console.log('Product ID:', productId);
      try {
        // Query the database to get the product with the specified productId
        const query = { id: parseInt(productId, 20) };
        const product = await db.collection("cookies").findOne(query);

        console.log('Product:', product);

        if (!product) {
          // If product is not found, send a 404 response
          res.status(404).json({ error: 'Product not found' });
        } else {
          // If product is found, send the product data
          res.json(product);
        }
      } catch (error) {
        // Handle other errors
        res.status(500).json({ error: 'Internal Server Error' });
      }
  });



app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});


    