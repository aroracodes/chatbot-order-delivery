require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Endpoint to handle chat requests
app.post('/chat', async (req, res) => {
    const { query, orderId } = req.body;

    console.log(`Received query: ${query}, orderId: ${orderId}`);

    try {
        const order = await Order.findOne({ order_id: orderId });
        console.log(`Order found: ${order}`);

        if (order) {
            const response = `Thank you for your patience. I just checked that your Order ${order.order_id} is ${order.order_status} and will be delivered by ${order.estimated_delivery}. I apologise for the delay.`;
            res.status(200).send(response);
        } else {
            res.status(404).send('Order not found');
        }
    } catch (error) {
        console.error(`Error fetching order: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
