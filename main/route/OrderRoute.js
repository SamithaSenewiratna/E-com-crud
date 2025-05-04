const express = require('express');
const router = express.Router();
const OrderController = require('../controller/OrderController');

router.post('/create', OrderController.saveOrder);
router.put('/update/:id', OrderController.updateOrder);   
router.delete('/delete/:id', OrderController.deleteOrder); 
router.get('/find/:id', OrderController.findOrder); 
router.get('/find-All', OrderController.loadAllOrder); 

module.exports= router;