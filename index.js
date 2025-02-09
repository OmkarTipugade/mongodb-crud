const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.routes");
const app = express();
const port = 3000;
const con =
  "mongodb+srv://omtipugade3904:Jxrq6UcudcpQexi7@cluster0.ckihh.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0";

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(con)
  .then(() => {
    console.log("Connection Successful");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process with failure
  });
