const Product= require('../models/Products');

module.exports.getProducts= async(req,res)=>{
    const products=await Product.find();
    res.json(products);
}

module.exports.getProduct= async(req,res)=>{
    const product=await Product.findById(req.params.id);
    res.json(product);
}

module.exports.createProduct= (req,res)=>{
    console.log(req.body);
    
     Product.create(req.body).then(product=>res.json(product)).catch(err=>res.status(400).json(err));
    
    
}

module.exports.updateProduct= (req,res)=>{
    console.log("im hereee");
    console.log(req.body);
    
    
    Product.findByIdAndUpdate(req.params.id,req.body).then(product=>res.json(product)).catch(err=>res.status(400).json(err));
    
}
module.exports.deleteProduct= (req,res)=>{
    console.log("anything");
    console.log(req.params.id);
    
    Product.findByIdAndDelete(req.params.id).then(product=>res.json(product)).catch(err=>res.status(400).json(err));
}



