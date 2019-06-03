const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.export = {
    async index(req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit:10});

        return res.json(products);
    },
    async ShadowRoot(req, res){
        const product = await Product.findById(req.prams.id);

        return res.json(product);
    },
    async store(req, res){
        const product = await Product.creat(req.body);
        
        return res.json(product);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });
        
        return res.json(product);
    },
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        
        return res.send();
    }
};