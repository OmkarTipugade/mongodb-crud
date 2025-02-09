const Product = require("../models/product.model");

//get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get product by id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ data: product });
    if (!product) return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) return res.status(404).json({ message: "Product not found" });
    const updatedProduct = await Product.findById(id);
    res.status(200).json({ data: updatedProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//delete a product by id
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ data: product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//delete all products
const deleteAllProducts = async (req, res) => {
  try {
    const products = await Product.deleteMany({});
    res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  deleteAllProducts,
};
