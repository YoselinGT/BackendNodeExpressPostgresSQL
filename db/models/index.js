import {User, UserSchema} from './user.model.js';
function setupModels(sequelize) {
    console.log("llegamos al setup model");
    User.init(UserSchema,User.config(sequelize));
}
export default setupModels;