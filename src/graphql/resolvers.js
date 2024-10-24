const { getProduct, getProducts, createProduct } = require("./product.resolvers");

const resolvers = {
  Query: {
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    createProduct,
  }
}

module.exports = resolvers;