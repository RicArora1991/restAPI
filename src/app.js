const express= require('express')
const app=express();
const port=process.env.PORT||3000;
require('./db/conn');
const MensRanking=require('./models/crciket')

app.get('/',async(req,res)=>{
    res.send("Hello Students")
})

app.use(express.json());
//we will handle post request
// app.post("/mens",async(req,res)=>{
//     try{
//         const addingMensRecords=new MensRanking(req.body);
//         console.log(req.body);
        
//        const insertData= await addingMensRecords.save();
//             res.status(201).send(insertData)

//     }catch(e){
//         res.status(400).send(e);
        
//     }
// })


//we will handle get request

app.get("/mens",async(req,res)=>{
    try{
        const getMens=await MensRanking.find({});
            res.send(getMens)

    }catch(e){
        res.status(400).send(e);
        
    }
})



//for individuals
// app.get("/mens/:id",async(req,res)=>{
//     try{
//         const_id=req.params.id;
//         const getMen=await MensRanking.findById(_id);
//             res.send(getMen)

//     }catch(e){
//         res.status(400).send(e);
        
//     }
// })
app.listen(port,()=>{
    console.log(`Listening at port number ${port}`);
    
})


