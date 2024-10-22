const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const jwt=require("jsonwebtoken")

const employeeModel=require('../model/employeeData')

function verifyToken(req,res,next){
    let token=req.headers.token;
    try{
        if(!token) throw 'Unauthorised access'
        let payload=jwt.verify(token,"secret")
        if(!payload) throw 'Unauthorised Access'
        next()
        
    }catch(error){
        res.json({message:error})
    }
}



router.get('/',verifyToken,async(req,res)=>{     
    try{
    const data=await employeeModel.find();
    res.status(200).send(data);
    }catch(error){
        res.status(404).send('Data not found');
    }
})

router.post('/add',verifyToken,async(req,res)=>{
    try{
        var item=req.body;
        const data1=new employeeModel(item);
        await data1.save();
        res.status(200).send("Post successful");

    }catch(error){
        res.status(404).send("Post unsuccessful");
    }
})


router.put('/edit/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employeeModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful');
    } catch (error) {
        res.status(404).send('Update unsuccessful');
    }
})


router.delete('/remove/:id',verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        await employeeModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(500).send('Delete unsuccessful');
    }
});

module.exports=router;