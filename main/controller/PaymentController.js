const Payment = require('../model/PaymentSchama');


const makePayment = async (req,resp) => { 
    
    try{
    const createdPayment = new Order(req.body);
    const savePayment = await createdPayment.save();
    resp.status(201).json({message:"Payment Created Successfully",data:savePayment});  

    }catch(err){
        resp.status(500).json({error:err.message});
    }

}


const findIncomeToday = async (req,resp) => { 
    
    try{
    const {day}= req.quary; // YYYY-MM-DD
    const startDay = new Date(day);
    const endDay = new Date(day);

    endDay.setDate(endDay.getDate()+1);
    const data =await createdPayment.find({
        Date:{
            $gte:startDay,
            $lt:endDay
        }

    });
    
    const totalIncome = data.reduce((sum,payment)=>sum+payment.amount,0);
    resp.status(200).json({message:"today income ",data:totalIncome});  

    }catch(err){
        resp.status(500).json({error:err.message});
    }

}


module.exports={

    makePayment,
    findIncomeToday

};