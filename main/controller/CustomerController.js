const Customer = require('../model/CustomerSchema');


const saveCustomer = async (req,resp) => { // admin ,manager 
    
    try{
    const createdCustomer = new Customer(req.body);
    const saveCustomer = await createdCustomer.save();
    resp.status(201).json({message:"Customer Created Successfully",data:saveCustomer});  

    }catch(err){
        resp.status(500).json({error:err.message});
    }

}

const updateCustomer = async (req,resp) => {   // admin ,manager 
    try{
     await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { 
            new: true 

        } 
     );
     if(updateCustomer){
        resp.status(201).json({message:"Customer Updated Successfully",data:updateCustomer});
     }    

    }catch(err){
      resp.status(500).json({error:err.message});
    }
}


const deleteCustomer = async (req,resp) => {

    try{

    }catch(err){
      resp.status(500).json({error:err.message});
    }
}
const findCustomer = async (req,resp) => {

    try{

    }catch(err){
      resp.status(500).json({error:err.message});
    }
}
const loadAllCustomer = async (req,resp) => {

    try{

    }catch(err){
      resp.status(500).json({error:err.message});
    }
}


module.exports={

};