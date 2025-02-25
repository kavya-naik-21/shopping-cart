import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    console.log("Oops Error ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Oops Error ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  const product = req.body;
  if (!product.name || !product.price || !product.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.log("Oops Error ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(201)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log("Oops Error ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
