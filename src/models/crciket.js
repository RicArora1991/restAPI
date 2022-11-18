const mongoose=require('mongoose')

const cricketSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true //means if space is there before name
    },
    runs:{
        type:Number,
        required:true,
        trim:true
    },
    balls:{
        type:Number,
        required:true,
        trim:true
    },
    fours:{
        type:Number,
        required:true,
        trim:true
    },
    sixes:{
        type:Number,
        required:true,
        trim:true
    },
    sr:{
        type:Number,
        required:true,
        trim:true
    },
    team:{
        type:String,
        required:true,
        trim:true
    },
    opposition:{
        type:String,
        required:true,
        trim:true
    },
    matchDate:{
        type:Date,
        required:true,
        trim:true
    }
})
//we are creating new collections here
const MensRanking=new mongoose.model("MenRanking",cricketSchema)
module.exports=MensRanking;
