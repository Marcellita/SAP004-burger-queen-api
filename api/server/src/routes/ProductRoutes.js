import { Router } from 'express'
import ProductController from '../controllers/ProductController'

const router = Router()
router.get('/',ProductController.getAllProduct)
router.post('/',ProductController.getAllProduct )
router.get('/:id',ProductController.getAllProduct )
router.put('/:id', ProductController.getAllProduct)
router.delete('/:id',ProductController.getAllProduct)
export default router