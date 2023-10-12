const {User, UserSchema} = require('./user.model.js');
const { CustomerSchema,Customer } = require('./customer.model');
const { ProductSchema,Product } = require('./product.model');
const { CategorySchema,Category } = require('./category.model');
const { OrderSchema,Order } = require('./order.model');
const { OrderProductSchema,OrderProduct } = require('./order-product.model');

function setupModels(sequelize) {
    User.init(UserSchema,User.config(sequelize));
    Customer.init(CustomerSchema,Customer.config(sequelize));
    Category.init(CategorySchema,Category.config(sequelize));
    Product.init(ProductSchema,Product.config(sequelize));
    Order.init(OrderSchema,Order.config(sequelize));
    OrderProduct.init(OrderProductSchema,OrderProduct.config(sequelize));

    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
}
module.exports = setupModels;