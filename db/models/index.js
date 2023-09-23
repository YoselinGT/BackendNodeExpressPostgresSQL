const {User, UserSchema} = require('./user.model.js');
function setupModels(sequelize) {
    console.log("llegamos al setup model");
    User.init(UserSchema,User.config(sequelize));
}
module.exports = setupModels;