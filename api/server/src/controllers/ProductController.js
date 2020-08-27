import Util from './util'
import ProductService from './server/src/services/ProductService'


const util = new Util()

    class ProductController {
        static async getAllProduct(req, res) {
             const products = await ProductService.all()
            util.setSuccess(200, 'Products retrieved', {id:1})
        return util.send(res)
        }
    }
    
    export default ProductController;
        



   