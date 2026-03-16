const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 5200;

/*Mongo DB Connection */
// mongoose.connect('MONGODB URL')
//     .then(() => console.log("MongoDB Connected.."))
//     .catch((err) => {
//         console.log("Error at connecting MongoDB:::");
//         console.log(err);
//     })

/* ADMIN SCHEMA  */
// const adminSchema = new mongoose.Schema({
//     username:{
//         type: String,
//         required: true
//     },
//     password:{
//         type: String,
//         required: true
//     }
// });

// const Admin = mongoose.model("Admin", adminSchema);

// /* ADMIN CREATION  */
// app.post('/create-admin', async (req, res) => {
//     const admin = new Admin ({  // if have a schema add new Admin(data)
//         username: 'admin',
//         password: '1234'
//     })

//     await admin.save();
//     res.send("Admin created...");
// });

/* ADMIN LOGIN  */
app.post('/login', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    

    const admin = await Admin.findOne({ username, password });

    if (admin) {
        res.send("Login successful");
    } else {
        res.send("Invalid Credentials"); 
    }
});

app.get('/', (req, res) => {
    res.send("server is ready")
});


app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});
