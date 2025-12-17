const Product =require('../controllers/control');

module.exports=(app)=>{
    app.get('/products',Product.getProducts);
    app.get('/products/:id',Product.getProduct);
    app.post('/products',Product.createProduct);
    app.patch('/products/:id',Product.updateProduct);
    app.delete('/products/:id',Product.deleteProduct);
}