const express = require('express');
const router = express.Router();
const CustomerController = require('../controller/CustomerController');

// impl

router.post('/create', CustomerController.saveCustomer);
router.put('/update/:id', CustomerController.updateCustomer);   
router.delete('/delete/:id', CustomerController.deleteCustomer); 
router.get('/find/:id', CustomerController.findCustomer); 
router.get('/find-All', CustomerController.findAllCustomer); 


module.exports= router;