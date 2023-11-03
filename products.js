const fs = require('fs');

const generateRandomProduct = (index) => {
  const clave = `00${index + 1}`;
  const precio = (Math.random() * (50 - 5) + 5).toFixed(2);
  const clasificacion = `Clasificación ${Math.floor(Math.random() * 5) + 1}`;
  const existencia = Math.floor(Math.random() * 50) + 1;
  const existencia_minima = Math.floor(Math.random() * 20) + 5;
  const existencia_maxima = Math.floor(Math.random() * 50) + 30;

  return {
    clave,
    precio: parseFloat(precio),
    clasificacion,
    existencia,
    existencia_minima,
    existencia_maxima,
  };
};

const products = [];

for (let i = 0; i < 80; i++) {
  const product = generateRandomProduct(i);
  products.push(product);
}

const productsJSON = JSON.stringify(products, null, 2);

fs.writeFile('productos.json', productsJSON, (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo productos.json generado exitosamente.');
  }
});
