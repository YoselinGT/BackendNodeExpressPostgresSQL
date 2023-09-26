const {User, UserSchema} = require('./user.model.js');
const { CustomerSchema,Customer } = require('./customer.model');

function setupModels(sequelize) {
    User.init(UserSchema,User.config(sequelize));
    Customer.init(CustomerSchema,Customer.config(sequelize));
    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
}
module.exports = setupModels;