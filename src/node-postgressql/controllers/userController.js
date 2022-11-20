const { Sequelize, Op } = require('sequelize');
const db = require('../config/database');


// create model for users

const Users = db.userModel;

// add user
const addUser = async (req, res) => {
    try {
        const { name, email, age } = req.body
        const userExist = await Users.findOne({ where: { email: email } })
        if (userExist) {
            res.status(400).json({ message: 'user already exists...' })
        } else {

            const user = await Users.create({
                name,
                email,
                age
            })
            if (user) {
                res.status(200).json({
                    user: user,
                    message: 'user added successfully..'
                })
                console.log(user, "user.....")
            } else {
                res.status(400).json({ "message": "something went wrong with add user" })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

// get all users

const getAllUsers = async (req, res) => {
    try {
        let users = await Users.findAll({})
        if (users) {
            res.status(200)
                .json({
                    users: users,
                    message: 'get all data successfuly..'
                })

            console.log(users)
        } else {
            res.status(400)
            // .json({ "message": "something went wrong with getAll user" })
            throw new Error("something went wrong with getAll user...")
        }
    } catch (error) {
        console.log(error)
    }

}
// get single user

const getSingleUser = async (req, res) => {
    try {
        let id = req.params.id

        let oneUser = await Users.findOne({ where: { id: id } })
        res.status(200).json({
            getUserById: oneUser,
            message: 'get user by id'
        })
    } catch (error) {
        console.log(error)
    }

}
// update  user

const updateUser = async (req, res) => {
    try {
        let id = req.params.id
        let user = await Users.update(req.body, { where: { id: id } })
        res.status(200).json({
            user: user,
            message: 'Update successfully....'
        })
    } catch (error) {
        console.log(error)
    }
}
// delete  user

const deleteUser = async (req, res) => {
    try {
        let id = req.params.id
        const user = await Users.destroy({ where: { id: id } })
        res.status(200).json({
            user: user,
            message: 'User is deleted'
        })
    } catch (error) {
        console.log(error)
    }
}

// query data

const queryData = async (req, res) => {
    try {
        // let users = await Users.findAll({
        // 1
        // count and concat  query
        // attributes: [
        // [Sequelize.fn('Count', Sequelize.col('email')), 'emailCount']
        // [Sequelize.fn('CONCAT', Sequelize.col('email'), "kingkhan"), 'emailCount']
        // ]

        // 2
        // exclude and include query 
        // attributes: {
        //     exclude: ['createdAt', 'updatedAt'],
        //     include: [
        //         [Sequelize.fn('CONCAT', Sequelize.col('name'), "khan"), 'fullname']
        //     ]
        // }

        // handle condition in sequelize

        // where: { id: 12 }
        // where: {
        // id: {
        //     [Op.eq]: 12
        // },
        // email: {
        //     [Op.like]: '%test.com'
        // }
        // email: {
        //     [Op.like]: '%zed%'
        // }
        // id: {
        //     [Op.between]: [10, 15]
        // }
        // id: {
        //     [Op.between]: [5, 20],
        // }
        // }




        // })
        // finder method
        // findAll({})
        // finOne()
        // findByPk() //primarykey

        let users = await Users.findByPk(12)

        if (users) {
            res.status(200).json({
                users: users,
                message: 'get all data successfuly..'
            })
            console.log(users)
        } else {
            res.status(400).json({ "message": "something went wrong with getAll user" })
        }
    } catch (error) {
        console.log(error)
    }

}

// learn about setter getter function in schema  
const setterGetter = async (req, res) => {
    let result = await Users.create({ name: 'jamy', email: 'jam@test.com', age: 30 })
    result = res.json(result)
}

// learn about constraint and validation 
//  constraint work with only database for validation use in model schema
// validation work with sequelize for validation


module.exports = {
    getAllUsers,
    addUser,
    getSingleUser,
    updateUser,
    deleteUser,
    queryData,
    setterGetter
}