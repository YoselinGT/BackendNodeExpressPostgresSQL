import express from 'express'
import {ProductsService} from "../services/product.service.js";

const router = express.Router()
const service = new ProductsService();

router.get('/', async (req, res) => {
    const products = await service.find()
    res.json(products)
})

router.get('/:id', async (req, res,next) => {
    try {
        const {id} = req.params
        const product = await service.findOne(id)
        res.status(200).json(product)
    } catch(error){
        next(error)
    }

})

router.post('/', async (req, res) => {
    const body = req.body;
    const newProducto = await service.create(body);
    res.status(201).json(newProducto)
})


router.put('/:id', async (req, res,next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const updateProduct = await service.update(id,body)
        res.json(updateProduct)
    } catch (err) {
        next(err)
    }

})


router.patch('/:id', (req, res,next) => {
    try {
    const body = req.body;
    const {id} = req.params;
    res.json({
        message:"update",
        data: body,
        id
    })
    } catch (err) {
        next(err)
    }
})


router.delete('/:id', async (req, res,next) => {
    try {
    const body = req.body;
    const {id} = req.params;
    const deleteProduct = await service.delete(id,body);
    res.json(deleteProduct)
    } catch (err) {
        next(err)
    }
})

export default router;