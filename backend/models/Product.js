const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
  },
  product_site: {
    type: String,
  },
  include_path: {
    type: String,
  },
  exclude_path: {
    type: String,
  },
  base_id: {
    type: String,
  },
  site_title: {
    type: String,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  borderRadius: {
    type: String,
  },
  description: {
    type: String,
  },
  fontColor: {
    type: String,
  },
  heading: {
    type: String,
  },
  placement: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
