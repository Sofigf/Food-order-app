// pages/api/orders.js
import mongoose from 'mongoose';
import Order from '../../models/Order';  // Import model

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default async function handler(req, res) {
    await connectDB();  // Connect ke MongoDB

    if (req.method === 'POST') {
        try {
            const { customerName, items, totalAmount } = req.body;
            const newOrder = await Order.create({ customerName, items, totalAmount });
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else if (req.method === 'GET') {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
