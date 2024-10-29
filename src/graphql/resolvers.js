const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("./product.resolvers");

const resolvers = {
  Query: {
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    createProduct,
    deleteProduct,
    updateProduct
  }
}

module.exports = resolvers;