const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: {   type: String, required: true },
    discription: {  type: String, required: true },
    unitPrice: {  type: Number, required: true },
    qtyOnHand: {  type: Array,required: true },
    isActive: {  type: Boolean, required: true },
    Images :  {type: Array,required: true } // s3 bucket
   
});

module.exports = mongoose.model('Product', ProductSchema);   