const Order = require('../model/OrderSchama');

const saveOrder = async (req,resp) => { // admin ,manager 
    
    try{
    const createdOrder = new Order(req.body);
    const saveOrder = await createdOrder.save();
    resp.status(201).json({message:"Order Created Successfully",data:saveOrder});  

    }catch(err){
        resp.status(500).json({error:err.message});
    }

}

const updateOrder = async (req,resp) => { // admin ,manager
      try{

         const {id}=req.params;
         const {status}=req.body; 

         if(!["PENDING","REJECTED","COMPLETED","CANSELED"].includes(status)){
              return resp.status(400).json({massage:"invaild status",data:null})
         }


        const updateOrder = await Order.findByIdAndUpdate(
            id,{status},{new:true,}
        );

         if(updateOrder){
            resp.status(201).json({message:"Order Updated Successfully",data:updateOrder});
         }    
         resp.status(404).json({message:"Order Not Found !"})

        }catch(err){
          resp.status(500).json({error:err.message});
        }
  
}

const deleteOrder = async (req,resp) => {

    try{
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);
      if(deletedOrder){
        resp.status(200).json({message:"Order Deleted Successfully",data:deletedOrder});
      }
      resp.status(404).json({message:"Order Not Found"});
      
    }catch(err){
      resp.status(500).json({error:err.message});
    }
}

const findOrder = async (req,resp) => {    //admin,manager

    try{
      const selectedOrder = await Order.findById(req.params.id);
      if(selectedOrder){
        resp.status(200).json({message:"Order Found Successfully",data:selectedOrder});
      }
      resp.status(404).json({message:"Order Not Found"});

    }catch(err){
      resp.status(500).json({error:err.message});
    }

}

const loadAllOrder = async (req,resp) => { //admin,manager,user

    try{
    const {page=1,size=10} = req.query;
    const OrderList = await Order.find(filter).sort({Date:-1}).skip((page-1)*size).limit(parseInt(size));
    const total = await Order.countDocuments(filter);
    resp.status(200).json({message:"Order List Found Successfully",data:OrderList,total:total}); 

    }catch(err){
      resp.status(500).json({error:err.message});
    }
}

module.exports={
    saveOrder,
    updateOrder,
    deleteOrder,
    findOrder,
    loadAllOrder
};