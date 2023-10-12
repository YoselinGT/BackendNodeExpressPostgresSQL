import Joi from 'joi';

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
    customerId: customerId.required()
});

const updateOrderSchema = Joi.object({
    customerId
});

const getOrderSchema = Joi.object({
    id: id.required(),
});

const addItemShema = Joi.object({
    orderId: orderId.required(),
    productId: productId.required(),
    amount: amount.required(),
});

export { createOrderSchema, updateOrderSchema, getOrderSchema, addItemShema}