const express = require('express');
const { getCustomer, setCustomer, deleteCustomer, updateCustomer } = require('../controllers/customerController');

const router= express.Router()

// router.get('/',getCustomer)

// router.post('/',setCustomer)

// above code in one line
// get and create api
router.route('/').get(getCustomer).post(setCustomer)

// router.put('/:id',updateCustomer);

// router.delete('/:id',deleteCustomer)


// delete and update api
router.route('/:id').put(updateCustomer).delete(deleteCustomer)


module.exports = router;