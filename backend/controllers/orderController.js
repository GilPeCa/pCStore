const Order = require('../models/Order');
const Product = require('../models/Product');

const addOrderItems = async (req, res) => {
    // Si no hay items, devolver error
    if (!req.body.orderItems || req.body.orderItems.length === 0) {
        return res.status(400).json({ message: 'No hay items en la orden' });
    }

    try {
        const { orderItems, shippingAddress, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

        const order = new Order({
            orderItems,
            shippingAddress,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);

    } catch (error) {
        res.status(500).json({ message: 'Error al crear la orden', error: error.message });
    }
};

module.exports = { addOrderItems };