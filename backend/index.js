const express =require('express');
const cors = require('cors');

const app = express();
const port = 5200;
app.use(cors());

app.get('/',(req,res)=>{
    res.send("server is ready")
});



app.post('/admin-login',(req,res)=>{{
    const data= req.body;
    const admin='admin';
    const password = '1234';

    if(data.username===admin && data.password===password){
        res.status(200).json({message:"admin login success..."})
    }else{
        res.json({message:"Invalid user..."})
    };
}})

app.listen(port,()=>{
    console.log(`server is started on port ${port}`);
});
