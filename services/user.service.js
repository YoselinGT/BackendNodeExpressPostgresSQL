import faker from 'faker';
import boom  from '@hapi/boom';
import pool from '../libs/postgres.pool.js';


class UserService {

    constructor(){
        this.products = [];
        this.generate();
        this.pool = pool;
        this.pool.on('error',(err) => console.log(err));
    }

    generate() {

    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * FROM task';
        const rta = await this.pool.query(query);
        return rta.rows;
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id);
        if (!product) {
            throw boom.notFound('product not found');
        }
        if (product.isBlock) {
            throw boom.conflict('product is block');
        }
        return product;
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }

}

export  default UserService;