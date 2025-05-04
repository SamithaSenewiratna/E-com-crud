const mongoose = require('mongoose');
const CustomeerSchema = new mongoose.Schema({
    customerName: {   type: String, required: true },
    address: {  type: String, required: true },
    contact: {  type: String, required: true },
    email: {  type: String, required: true },
    isActive: {  type: Boolean, required: true },
   
});

module.exports = mongoose.model('Customer', CustomeerSchema);  