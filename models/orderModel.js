const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
      },
    ],
    paymentIntent: {
      type: String,
      default: "Cash on delivery",
      enum: [
        "Cash on delivery",
        "Bank transfers",
      ],
    },
    statusPayment:{
      type: String,
      default: "No",
      enum: [
        "No",
        "Yes",
      ],
    },
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash on Delivery",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Delivered",
      ],
    },
    sex:{
      type: String,
      default: "Man",
      enum: [
        "Man",
        "Woman",
      ]
    },
    address: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    e: {
      type: String,
      required: true,
    },
    m: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);