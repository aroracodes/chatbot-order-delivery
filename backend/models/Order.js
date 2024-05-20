const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: String,
    customer_name: String,
    order_date: String,
    order_time: String,
    order_items: String,
    order_status: String,
    estimated_delivery: String,
    payment_type: String,
    coins_used: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
