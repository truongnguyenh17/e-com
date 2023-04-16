const Product = require("../models/productModel")
const Order = require("../models/orderModel");

const asyncHandler = require("express-async-handler");





const createOrder = asyncHandler(async (req, res) => {
  try {
    const { products, paymentIntent, orderStatus, sex, address, name, e, m } = req.body;

    // Tạo một danh sách sản phẩm từ các sản phẩm được gửi trong yêu cầu
    let productItems = [];
    for (let i = 0; i < products.length; i++) {
      const product = await Product.findById(products[i].product);
      productItems.push({
        product: products[i].productId,
        count: products[i].count,
      });
    }

    // Tạo một đơn hàng mới
    const order = new Order({
      products: productItems,
      paymentIntent,
      orderStatus,
      sex,
      address,
      name,
      e,
      m,
    });

    // Lưu đơn hàng mới vào cơ sở dữ liệu
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Could not create order' });
  }
});
// tìm bằng số điện thoại
const getOrders = asyncHandler(async (req, res) => {
  const {m}= req.params;

  try {
    const order = await Order.find({ m });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json( order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
  
  const getAllOrders = asyncHandler(async (req, res) => {
    try {
      const alluserorders = await Order.find()
      res.json(alluserorders);
    } catch (error) {
      throw new Error(error);
    }
});
  const getOrderByUserId = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const userorders = await Order.findOne({ orderby: id })
        .populate("products.product")
        .populate("orderby")
        .exec();
      res.json(userorders);
    } catch (error) {
      throw new Error(error);
    }
  });
  const updateOrderStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
    const updateOrderStatus = await Order.findOneAndUpdate({ id }, req.body, {
        new: true,
      });
      res.json(updateOrderStatus);
    } catch (error) {
      throw new Error(error);
    }
  });
  module.exports={
    createOrder,
    getOrders,
    getAllOrders,
    getOrderByUserId,
    updateOrderStatus
  }