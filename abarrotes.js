const fs = require('fs');

class ProductDAO {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = this.loadProducts();
  }
  loadProducts() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      return [];
    }
  }
}
const dao = new ProductDAO('productos.json');
const products = dao.products;
const mayorA20 = products.filter((product) => product.existencia > 20);
console.log('Número de productos con existencia mayor a 20:', mayorA20.length);

const menorA15 = products.filter((product) => product.existencia < 15);
console.log('Número de productos con existencia menor a 15:', menorA15.length);

const mismaClasYMayorPrecio = products.filter((product) => product.clasificacion == 'Clasificación deseada' && product.precio > 15.50);
console.log('Productos con la misma clasificación y precio mayor a 15.50:', mismaClasYMayorPrecio);

const precioEntre20Y45 = products.filter((product) => product.precio > 20.30 && product.precio < 45.00);
console.log('Productos con precio mayor a 20.30 y menor a 45.00:', precioEntre20Y45);

const agruparClasificacion = products.reduce((result, product) => {
  result[product.clasificacion] = (result[product.clasificacion] || 0) + 1;
  return result;
}, {});
console.log('Número de productos agrupados por clasificación:', agruparClasificacion);
