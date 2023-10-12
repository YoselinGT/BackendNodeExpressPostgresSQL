import express from 'express';
import OrderService from '../services/order.service.js';
import {validatorHandler} from "../middlewares/validator.handler.js";
import {createOrderSchema, updateOrderSchema, getOrderSchema, addItemShema} from "../shemas/order.schema.js";


const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res, next) => {
    try {
        const orders = await service.find();
        res.json(orders);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await service.findOne(id);
            res.json(order);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createOrderSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newOrder = await service.create(body);
            res.status(201).json(newOrder);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add-item',
    validatorHandler(addItemShema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newIttem = await service.addItem(body);
            res.status(201).json(newIttem);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getOrderSchema, 'params'),
    validatorHandler(updateOrderSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const order = await service.update(id, body);
            res.json(order);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({id});
        } catch (error) {
            next(error);
        }
    }
);

export default router;