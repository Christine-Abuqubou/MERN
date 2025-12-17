const Product= require('../models/Products');

module.exports.getProducts= async(req,res)=>{
    const products=await Product.find();
    res.json(products);
}

// module.exports.getProduct= async(req,res)=>{
//     const product=await Product.findById(req.params.id);
//     res.json(product);
// }

module.exports.createProduct= async(req,res)=>{
    console.log(req.body);
    
    const product=await Product.create(req.body);
    res.json(product);
}