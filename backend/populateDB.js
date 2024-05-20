const mongoose = require('mongoose');
const Order = require('./models/Order');
require('dotenv').config();

const orders = [
    {
        order_id: "23599045",
        customer_name: "Rahul Sinha",
        order_date: "02/04/2024",
        order_time: "08:34",
        order_items: "Amoxil 500mg, Euthyrox 250mg",
        order_status: "ready for dispatch",
        estimated_delivery: "07/05/2024",
        payment_type: "Prepaid",
        coins_used: "Yes",
    },
    {
        order_id: "23599046",
        customer_name: "Priyanka Sharma",
        order_date: "04/04/2024",
        order_time: "04:52",
        order_items: "Deltasone, Cefixime, Imatinib",
        order_status: "packaged",
        estimated_delivery: "09/05/2024",
        payment_type: "Cash on Delivery",
        coins_used: "No",
    },
    {
        order_id: "23599047",
        customer_name: "Ankit Kejriwal",
        order_date: "01/04/2024",
        order_time: "23:10",
        order_items: "Permethrin, Piperazine, Premix Insulin 30:70 injection",
        order_status: "out for delivery",
        estimated_delivery: "06/05/2024",
        payment_type: "Prepaid",
        coins_used: "Yes",
    },
    {
        order_id: "23599048",
        customer_name: "Rohit Mehra",
        order_date: "29/03/2024",
        order_time: "03:45",
        order_items: "Chloramphenicol, Tinidazole",
        order_status: "in transit",
        estimated_delivery: "08/05/2024",
        payment_type: "Prepaid",
        coins_used: "No",
    },
    {
        order_id: "23599049",
        customer_name: "Raj Kishan",
        order_date: "31/03/2024",
        order_time: "13:56",
        order_items: "Xylometazoline, Flucytosine",
        order_status: "delivered",
        estimated_delivery: "30/04/2024",
        payment_type: "Cash on Delivery",
        coins_used: "No",
    },
    {
        order_id: "23599050",
        customer_name: "Shreya Verma",
        order_date: "30/03/2024",
        order_time: "12:34",
        order_items: "Acenocoumarol, Benzylpenicillin",
        order_status: "out for delivery",
        estimated_delivery: "06/05/2024",
        payment_type: "Prepaid",
        coins_used: "No",
    },
    {
        order_id: "23599051",
        customer_name: "Vishal Agrawal",
        order_date: "02/04/2024",
        order_time: "07:45",
        order_items: "Lorazepam",
        order_status: "ready for dispatch",
        estimated_delivery: "08/05/2024",
        payment_type: "Cash on Delivery",
        coins_used: "Yes",
    },
    {
        order_id: "23599052",
        customer_name: "Varun Goyal",
        order_date: "27/03/2024",
        order_time: "06:34",
        order_items: "Misoprostol, EMLA cream",
        order_status: "delivered",
        estimated_delivery: "01/05/2024",
        payment_type: "Prepaid",
        coins_used: "No",
    },
    {
        order_id: "23599053",
        customer_name: "Atul Verma",
        order_date: "03/04/2024",
        order_time: "12:30",
        order_items: "Chlorambucil, Cetrizine",
        order_status: "in transit",
        estimated_delivery: "09/05/2024",
        payment_type: "Prepaid",
        coins_used: "Yes",
    },
    {
        order_id: "23599054",
        customer_name: "Akhil Sen",
        order_date: "03/04/2024",
        order_time: "21:47",
        order_items: "Atorvastatin, Clarithromycin, Loperamide",
        order_status: "ready for dispatch",
        estimated_delivery: "08/05/2024",
        payment_type: "Cash on Delivery",
        coins_used: "Yes",
    }
];

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    await Order.insertMany(orders);
    console.log("Data inserted");
    mongoose.connection.close();
}).catch(err => {
    console.error(err);
});
