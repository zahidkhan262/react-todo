const express = require('express')
const router = express.Router();

const userController = require('../controllers/userController')

router.post('/add-user', userController.addUser)
router.get('/all-user', userController.getAllUsers)
router.get('/query-data', userController.queryData)
router.get('/get-one-user/:id', userController.getSingleUser)
router.delete('/del-user/:id', userController.deleteUser)
router.put('/update-user/:id', userController.updateUser)
router.post('/add', userController.setterGetter)



module.exports = router;
