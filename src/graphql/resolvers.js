const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");
const { login } = require("./auth.resolvers");

const resolvers = {
  Query: {
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    login,
    createProduct,
    deleteProduct,
    updateProduct
  }
}

module.exports = resolvers;