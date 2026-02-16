require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const Product = require('./models/Product'); 
const Order = require('./models/Order');

const products = require('./data/products');

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();

    console.log('Datos antiguos eliminados...');

    await Product.insertMany(products);

    console.log(' ¡Datos Importados Correctamente!');
    process.exit();
  } catch (error) {
    console.error(` Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();

    console.log(' ¡Datos Destruidos!');
    process.exit();
  } catch (error) {
    console.error(` Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}