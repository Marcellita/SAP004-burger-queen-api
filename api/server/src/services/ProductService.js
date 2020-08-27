import database from '../models'

class ProductService {
  static async all() {
    try {
      return await database.Product.findAll()
    } catch (error) {
      throw error
    }
  }
}

export default ProductService