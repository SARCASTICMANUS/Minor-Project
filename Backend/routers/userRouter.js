const express = require('express');
const Model = require('../model/userModel');
const router = express.Router();

router.post('/add', (req, res) => {
    // console.log(req.body);
    // res.send('add request in user router')

//to save data in database
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
});


router.get('/getall',(req, res)=>{
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);
        
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
})

router.get('/getbyemail/:email',(req,res)=>{
    console.log(req.params.email);
    Model.find({email:req.params.email})
    .then((result) => {
        res.json(result);
        
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });

})


router.get('/getbyusername/:username',(req,res)=>{
    console.log(req.params.username);
    Model.find({username:req.params.username})
    .then((result) => {
        res.json(result);
        
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
    
})

router.delete('/deletebyusername/:username',(req,res)=>{
    console.log(req.params.username);
    Model.findOneAndDelete({username:req.params.username})
    .then((result) => {
        res.json(result);
        
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
    
})

router.post('/authenticate',(req,res) =>{
    const formdata = req.body;
    Model.findOne({ email:formdata.email, password:formdata.password })
    .then((result) => {
        if (result){
            res.status (200).json(result);
        }else{
            res.status(400).json({message:"Invalid email or password"});

        }
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
})


router.get('/getbyid/:id',(req,res)=>{
    console.log(req.params.id);
    Model.find({_id:req.params.id})
    .then((result) => {
        res.json(result);
        
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
    
})
module.exports = router; 