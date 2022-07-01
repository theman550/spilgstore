const express = require('express');
const router = express.Router();
const products = require('../services/products')


router.get('/', async function(req,res,next){
    try{
        res.json(await products.getMultiple(req.query.page));
    } catch(err){
        console.error(`Dem products werent found`,err.message);
        next(err);
    }
});

module.exports = router;