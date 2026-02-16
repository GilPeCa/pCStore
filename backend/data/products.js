const products = [
  {
    name: 'NVIDIA GeForce RTX 4090',
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000',
    description: 'La tarjeta gráfica definitiva. Rendimiento extremo para gaming y creación de contenido con DLSS 3.0.',
    price: 1599.99,
    countInStock: 5,
  },
  {
    name: 'AMD Ryzen 9 7950X',
    imageUrl: 'https://images.unsplash.com/photo-1555616635-640960031520?auto=format&fit=crop&q=80&w=1000',
    description: 'Procesador de 16 núcleos y 32 hilos. La bestia para multitarea y renderizado.',
    price: 699.00,
    countInStock: 10,
  },
  {
    name: 'Monitor Gaming ASUS ROG Swift 360Hz',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000',
    description: 'Monitor eSports de 24.5 pulgadas FHD con tasa de refresco de 360Hz para la máxima fluidez.',
    price: 499.99,
    countInStock: 7,
  },
  {
    name: 'Teclado Mecánico Logitech G Pro X',
    imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000',
    description: 'Teclado compacto sin teclado numérico (TKL), switches intercambiables y RGB Lightsync.',
    price: 129.99,
    countInStock: 0, // Probamos stock agotado
  },
  {
    name: 'Mouse Wireless Razer Viper Ultimate',
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=1000',
    description: 'Mouse ultraligero inalámbrico con sensor óptico de 20K DPI y dock de carga.',
    price: 89.99,
    countInStock: 15,
  },
  {
    name: 'Sony PlayStation 5',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1000',
    description: 'La consola de nueva generación con SSD ultrarrápido y control háptico DualSense.',
    price: 499.99,
    countInStock: 3,
  },
];

module.exports = products;