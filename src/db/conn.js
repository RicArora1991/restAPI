const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/cricket', {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('Coonection has been established');})
.catch((e)=>{console.log(e);})

