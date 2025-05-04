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
            new: true ,
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
      const deleteCustomer = await Customer.findByIdAndDelete(req.params.id);
      if(deleteCustomer){
        resp.status(200).json({message:"Customer Deleted Successfully",data:deleteCustomer});
      }
      resp.status(404).json({message:"Customer Not Found"});
      
    }catch(err){
      resp.status(500).json({error:err.message});
    }
}


const findCustomer = async (req,resp) => {   //admin,manager,user

    try{
      const customer = await Customer.findById(req.params.id);
      if(customer){
        resp.status(200).json({message:"Customer Found Successfully",data:customer});
      }
      resp.status(404).json({message:"Customer Not Found"});

    }catch(err){
      resp.status(500).json({error:err.message});
    }
}


const loadAllCustomer = async (req,resp) => { //admin,manager,use

    try{
    const {searchText,page=1,size=10} = req.query;
    const filter = searchText ? {$or:[
        {name:{$regex:searchText,$options:'i'}},
        {address:{$regex:searchText,$options:'i'}},
        {email:{$regex:searchText,$options:'i'}}
    ]} : {};
    const customerList = await Customer.find(filter).skip((page-1)*size).limit(parseInt(size));
    const total = await Customer.countDocuments(filter);
    resp.status(200).json({message:"Customer List Found Successfully",data:customerList,total:total}); 


    }catch(err){
      resp.status(500).json({error:err.message});
    }
}


module.exports={
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    findCustomer,
    loadAllCustomer
};