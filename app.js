//--Imports--
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

//--Config JSON response
app.use(express.json());

//--Open Route - Public Route--
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a nossa API!'});
});

//--Register-User--
app.post('/auth/register', async(req, res) => {

    const {name, email, password, confirmpassword} = req.body;

    //validations
    if(!name){
        return res.status(422).json({ msg: 'O nome é obrigatorio!'});
    }

});

//--Credencials--
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
.connect(`mongodb+srv://${dbUser}:${dbPassword}@newapp.d3mp1.mongodb.net/?retryWrites=true&w=majority&appName=newApp`,   
)
.then(() =>{
    app.listen(3000)
    console.log("Conectado ao banco!")
})
.catch((err) => console.log(err))



