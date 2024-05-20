require('dotenv').config();
const mongoose = require('mongoose');
const Order = require('./models/Order');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    fetchOrderData();
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Function to fetch order data
const fetchOrderData = async () => {
    try {
        const order = await Order.findOne({ order_id: 23599046 });
        if (order) {
            console.log('Order found:', order);
        } else {
            console.log('Order not found');
        }
    } catch (error) {
        console.error('Error fetching order:', error.message);
    } finally {
        // Close the connection after the query
        mongoose.connection.close();
    }
};
