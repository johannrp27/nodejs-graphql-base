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

const updateProduct = async (_, { id, productInput }) => {
  const updatedProduct = await service.update(id, productInput);
  return updatedProduct;
}

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}