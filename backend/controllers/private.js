const Product = require("../models/Product");
const ErrorResponse = require("../utils/errorResponse");
const crypto = require('crypto');

exports.getPrivateRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You got access to the private data in this route",
  });
};

exports.addNewProject = (req, res, next) => {
  try {
    const {
      product_name,
      product_site,
      include_path,
      exclude_path,
      site_title,
      user_id,
      status,
      backgroundColor,
      borderRadius,
      description,
      fontColor,
      heading,
      placement,
    } = req.body;

    const base_id = crypto.randomBytes(16).toString('hex'); 

    const newProduct = new Product({
      product_name,
      product_site,
      include_path,
      exclude_path,
      site_title,
      user_id,
      status,
      backgroundColor,
      borderRadius,
      description,
      fontColor,
      heading,
      base_id,
      placement,
    });
    newProduct
      .save()
      .then((savedProduct) => {
        res.status(200).json({ status: true, data: savedProduct });
      })
      .catch((error) => {
        next(new ErrorResponse("Error saving product to database", 500));
      });
  } catch (error) {
    next(new ErrorResponse("Error saving product to database", 500));
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const productId = req.params.productId; // The ID of the product to update
    const update = req.body; // The new data for the product

    const updatedProduct = await Product.findByIdAndUpdate(productId, update, {
      new: true,
    });
    if(!updatedProduct){
      next(new ErrorResponse("Error updating product", 500));
    }

    res.status(200).json({ status: true, data: updatedProduct });
  } catch (error) {
    next(new ErrorResponse("Error updating product", 500));
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const productId = req.params.productId; // The ID of the product to delete

    const deletedProduct = await Product.findByIdAndDelete(productId);

    res
      .status(200)
      .json({ status: true, data: "Successfully Deleted project" });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse("Error deleting product", 500));
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const userid = req.params.userId; // The ID of the product to retrieve

    const product = await Product.findById(userid);

    res.status(200).json({ status: true, data: product });
  } catch (error) {
    next(new ErrorResponse("Error retrieving product", 500));
  }
};

exports.addSub = async (req, res, next) => {
  // try {
  //   const userId = req.params.id; // The ID of the product to retrieve
  //   const product = await Product.findById(productId);
  //   res.status(200).json(product);
  // } catch (error) {
  //   next(new ErrorResponse("Error retrieving product", 500));
  // }
};
exports.updateSub = async (req, res, next) => {
  // try {
  //   const userId = req.params.id; // The ID of the product to retrieve
  //   const product = await Product.findById(productId);
  //   res.status(200).json(product);
  // } catch (error) {
  //   next(new ErrorResponse("Error retrieving product", 500));
  // }
};
