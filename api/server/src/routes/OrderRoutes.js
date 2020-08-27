import { Router } from 'express'
import OrderController from '../controllers/OrderController'

const router = Router()
router.get('/',ProductController.getAllOrder)
router.post('/',ProductController.getAllOrder )
router.get('/:id',ProductController.getAllOrder )
router.put('/:id', ProductController.getAllOrder)
router.delete('/:id',ProductController.getAllOrder)
export default router