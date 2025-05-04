const express = require('express');
const bodyPartser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT | 3000 ;   

//----------------------------

const CustomerRoute = require('./route/CustomerRoute')
const OrderRoute = require('./route/OrderRoute')
const PaymentRoute = require('./route/PaymentRoute')
const ProductRoute = require('./route/ProductRoute')
const UserRoute = require('./route/UserRoute')

//----------------------------


const app = express();
app.use(bodyPartser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pos_db').then(()=>{
    console.log('DB connectd..')
}).catch(e=>{
    console.log(e);
});


app.use('/api/v1/customers',CustomerRoute); //http:localhoist://api/v1/customers
app.use('/api/v1/order',OrderRoute);
app.use('/api/v1/payment',PaymentRoute);
app.use('/api/v1/product',ProductRoute);
app.use('/api/v1/user',UserRoute);

app.listen(PORT ,()=>{
        console.log(`SERVER STARTED ON PORT ${PORT}`);
});

