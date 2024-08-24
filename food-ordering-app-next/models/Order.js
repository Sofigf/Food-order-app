// models/Order.js
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerName: { type: String, required: true },
    items: [{ itemName: String, quantity: Number, price: Number }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }
}, {
    timestamps: true
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

module.exports = Order;
