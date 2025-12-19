const Auther=require('../controllers/controls');

module.exports=(app)=>{
    app.get('/authers',Auther.getAllAuthers);
    app.get('/authers/:id',Auther.getAutherById);
    app.post('/authers',Auther.createAuther);
    app.patch('/authers/:id',Auther.updateAuther);
    app.delete('/authers/:id',Auther.deleteAuther);
}
