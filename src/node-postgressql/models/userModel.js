module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("userModel", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            set(value) {
                this.setDataValue('name', value + ' khan')
            },
            get() {
                const rawValue = this.getDataValue('name');
                return rawValue ? rawValue.toLowerCase() : null;
            }
        },
        email: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'users'
    });
    return Users;

}











// second way with DAO=======
// const db = require('../config/database');
// const Sequelize = require('sequelize');

// const Users = db.define("userModel", {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         defaultValue: 'zahidkhan'
//     },
//     email: {
//         type: Sequelize.STRING,
//         default: 'test@gmail.com'
//     },
//     age: {
//         type: Sequelize.STRING,
//         defaultValue: '23'
//     }
// }, {
//     tableName: 'users'
// })

// module.exports = Users