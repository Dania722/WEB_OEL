const express =require("express")
const app= express()
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel =require('./models/Form')
require("./db")
app.use(express.json())
app.use(cors())



mongoose.connect('mongodb://localhost:27017',{
    useNewURLParser:true,
});


app.post('/addCars',async(req,res)=>{

const carname= req.body.name;
const color= req.body.age;
const model= req.body.email;
const numberplate= req.body.password;

const user= new UserModel({carname: carname, color:color, model: model,numberplate:numberplate
})
 await user.save();
res.send("inserted Data")
})

app.get('/read',async(req,res)=>{
    UserModel.find({}, (err, result)=>{
    if(err){
        res.send(error);
    }    
    else{
        res.send(result);

    }
    } ) 
    await user.save();
   res.send("inserted Data")
   })

   appprot('/read',async(req,res)=>{
    const user= new UserModel({name: "Dania Ahmed "
   })
    await user.save();
   res.send("inserted Data")
   })


app.listen(3001, ()=>{
    console.log("server running ! ");
});


