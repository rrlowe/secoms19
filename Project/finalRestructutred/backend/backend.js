var express = require("express");
var cors = require("cors");
var app = express();
var path = require('path');
var imagesPath = path.join(__dirname, 'images');
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const PORT = "8081";

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("../backend/images", express.static(imagesPath));

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
  console.log("Product ID:", productId);
  try {
    // Query the database to get the product with the specified productId
    const query = { id: parseInt(productId, 20) };
    const product = await db.collection("cookies").findOne(query);

    console.log("Product:", product);

    if (!product) {
      // If product is not found, send a 404 response
      res.status(404).json({ error: "Product not found" });
    } else {
      // If product is found, send the product data
      res.json(product);
    }
  } catch (error) {
    // Handle other errors
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route for creating the post
app.post("/AmeroBakery/post", async (req, res) => {
  await client.connect();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const id = values[0];
  const type = values[1];
  const image = values[2];
  const title = values[3];
  const text = values[4];
  const category = values[5];
  const price = values[6];
  console.log(id, title, price, category, text, image, type);
  const newDocument = {
    id: id,
    type: type,
    image: image,
    title: title,
    text: text,
    category: category,
    price: price,
  };
  const results = await db.collection("cookies").insertOne(newDocument);
  res.status(200);
  res.send(results);
});

// Route to delete a post
app.delete("/AmeroBakery/delete", async (req, res) => {
  await client.connect();
  // const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const id = values[0]; // id
  console.log("Product to delete :", id);
  const query = { id: id };
  const results = await db.collection("cookies").deleteOne(query);
  res.status(200);
  res.send(results);
});

//Route for the contact us form
app.post("/submitForm", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const result = await db.collection("formSubmissions").insertOne({
      name,
      email,
      phone,
      message,
    });

    res.status(200).json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

//Route to store orders into database
app.post("/submitOrder", async (req, res) => {
  try {
    const { items, total, customerInfo } = req.body;

    const result = await db.collection("orders").insertOne({
      items,
      total,
      customerInfo,
      timestamp: new Date(),
    });

    res.status(200).json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Route for update a post
app.put("/AmeroBakery/updateProduct/:productId", async (req, res) => {
  await client.connect();
  const { productId } = req.params;
  console.log(productId);
  const { type, image, title, text, category, price } = req.body;
  try {
    // Query the database to get the product with the specified productId
    const query = { id: parseInt(productId, 20) };
    const product = await db.collection("cookies").findOne(query);

    console.log(product);

    if (!product) {
      // If product is not found, send a 404 response
      return res.status(404).json({ error: "Product not found" });
    }

    const update = {
      $set: {
        type,
        image,
        title,
        text,
        category,
        price,
      },
    };
    console.log("Product:", product);
    const results = await db.collection("cookies").updateOne(query, update);

    // If the update is successful, send the updated product data
    res.json({ success: true, updatedProduct: { ...product, ...update.$set } });
  } catch (error) {
    // Handle other errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close(); // Close the MongoDB connection
  }
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
