class ProductManager {
  constructor() {
    this.products = [];
  }

  _getNextId = () => {
    const count = this.products.length;
    const nextId = count > 0 ? this.products[count - 1].id + 1 : 1;

    return nextId;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const products = this.getProducts();

    const product = {
      id: this._getNextId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (products.find((product) => product.code === code)) {
      return `El producto codigo ${product.code} se encuentra disponible\n`;
    }

    this.products.push(product);

    return "Producto Cargado correctamente\n";
  };

  getProducts = () => {
    return this.products;
  };

  getProductById = (productId) => {
    const products = this.getProducts();

    const [searchedProduct] = products.filter(
      (product) => product.id === productId
    );

    if (!searchedProduct) {
      return "No Encontrado\n";
    }

    return searchedProduct;
  };
}

// Se inicia la Clase
const productManager = new ProductManager();

// Primera consulta de productos
console.info("Primera consulta de productos")
console.log(productManager.getProducts());

// Carga producto 1
console.info("Carga primer producto")
console.log(
  productManager.addProduct(
    (title = "Camisa"),
    (description = "Camisa Dama"),
    (price = 8000),
    (thumbnail = "./img/CamisaDama.jpg"),
    (code = "abc123"),
    (stock = 10)
  )
);

// 2 consulta de productos
console.info("Segunda consulta de productos")
console.log(productManager.getProducts());

// Carga producto 2
console.info("Carga segundo producto")
console.log(
  productManager.addProduct(
    (title = "Pantalon"),
    (description = "Pantalon Dama"),
    (price = 4999),
    (thumbnail = "./img/PantalonDama1.jpg"),
    (code = "abc123"),
    (stock = 21)
  )
);

// Producto existente
console.info("Consulta producto existente")
console.log(productManager.getProductById(1));

// Producto no existente
console.info("Consulta producto no existente")
console.log(productManager.getProductById(5));
