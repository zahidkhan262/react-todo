const asyncHandler  =require('express-async-handler')
const  customer = require('../models/customerModel')



const getCustomer = asyncHandler(async(req, res)=>{
    const custo = await customer.find()
    res.status(200).json(custo)
})





const setCustomer =  asyncHandler(async(req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text")
    }
    const custo = await customer.create({
        text: req.body.text
    })
    res.status(200).json(custo)
})





const updateCustomer =  asyncHandler(async(req,res)=>{
    const custo = await customer.findById(req.params.id)
    if(!custo){
        res.status(400)
        throw new Error(`customer not found`)
    }
    const custoUpdate = await customer.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(custoUpdate)
})






const deleteCustomer =  asyncHandler(async(req,res)=>{
    const custo = await customer.findById(req.params.id);
    if(!custo){
        res.status(400)
        throw new Error("Id does'nt match")
    }
    await customer.remove({_id:req.params.id})
    res.status(200).json({_id:req.params.id})
})




module.exports ={
    getCustomer,
    setCustomer,
    deleteCustomer,
    updateCustomer
}