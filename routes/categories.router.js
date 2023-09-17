import express from 'express'

const router = express.Router()

router.get('/categories/:categoryid/products/:productid', (req, res) => {
    const {categoryid,productid} = req.params
    res.json(
        {
            productid,
            categoryid,
            name: 'Product 1',
            price: 1000
        })
})


export default router;