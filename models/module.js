const Sequelize = require('sequelize');
const sequelize = require('./../config/sequalize');

class Module extends Sequelize.Model {

}

Module.init({
    path: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'example-fake'
    },
    data: {
        type: Sequelize.JSON,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'modules'
})

module.exports = Module