const ProductsService = require("../services/product.service");

const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
}

const getProducts = async () => {
  const products = await service.find({});
  return products;
}

const createProduct = async (_, { productInput }) => {
  const newProduct = await service.create(productInput);
  return newProduct;
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
}