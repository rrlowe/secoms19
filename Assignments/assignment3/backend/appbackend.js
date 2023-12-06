const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const PORT = "8081";
const HOST = "localhost";

const url = "mongodb://127.0.0.1:27017";
const dbName = "fakestore";
const client = new MongoClient(url);
const db = client.db(dbName);


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("../backend/images", express.static("images"));
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//route to get all products
app.get("/fakestore", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
  .collection("products")
  .find(query)
  .limit(100)
  .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
  });

// Route to get one post
app.get("/fakestore/:id", async (req, res) => {
      console.log("Node connected successfully to GET MongoDB");
      const productId = Number(req.params.id);
      console.log('id:', productId);
      await client.connect();
      try {
        // Query the database to get the product with the specified productId
        const query = { id: productId };
        const product = await db.collection("products").findOne(query);

        console.log('id:', product);

        if (!product) {
          // If product is not found, send a 404 response
          res.status(404).json(null);
        } else {
          // If product is found, send the product data
          res.json(product);
        }
      } catch (error) {
        // Handle other errors
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

// Route for creating the post
app.post("/fakestore/post", async (req, res) => {
  await client.connect();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const id = values[0]; // id
  const title = values[1]; // name
  const price = values[2]; // price
  const category = values[3]
  const description = values[4]; // description
  const imageUrl = values[5]; // imageUrl
  const rating = values[6];
  const people = values[7];
  console.log(id, title, price, category, description, imageUrl, rating, people);
  const newDocument = {
  "id":id,
  "title":title,
  "price":price,
  "description":description,
  "category": category,
  "imageUrl":imageUrl,
   "rating": {"rate":rating, "count":people}
  };
  const results = await db.collection("products").insertOne(newDocument);
  res.status(200);
  res.send(results);
  });

// Route to delete a post
app.delete("/deleteProduct", async (req, res) => {
  await client.connect();
  // const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const id = values[0]; // id
  console.log("Product to delete :",id);
  const query = { id: id };
  const results = await db.collection("products").deleteOne(query);
  res.status(200);
  res.send(results);
});

// Route for update a post
app.put("/updateProduct", async (req, res) => {
  await client.connect();
  const { productId } = req.params;
  const {
    title,
    price,
    category,
    description,
    imageUrl,
    rating,
    people,
  } = req.body;
  try {
    // Query the database to get the product with the specified productId
    const query = { id: parseInt(productId, 20) };
    const product = await db.collection("product").findOne(query);
    const update = {
      $set: {
        title,
        price,
        category,
        description,
        imageUrl,
        rating: {"rate":rating, "count":people}
      },
    };
    console.log('Product:', product);
    const results = await db.collection("products").updateOne(product, update);
    
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