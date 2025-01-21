import express from 'express'
import controller from './controller'
const router = express.Router()


router.post("/addProduct",controller.addProduct)


export default router