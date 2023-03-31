const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  price: {
    type: String,
  },
  title: {
    type: String,
  },
  discount_price: {
    type: String,
  },
  yearly_price: {
    type: String,
  },
  description: {
    type: String,
  },
  feature: {
    type: Array,
  },
  maxChatbots:{
    type: Array,
  },
  maxChunksPerPage:{
    type: Array,
  },
  maxPages:{
    type: Array,
  },
  maxTokens:{
    type: Array,
  }

});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;
