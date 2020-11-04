const express = require('express')
const bodyParser = require('body-parsar')
const { check, validationResult }
= require('express-validator')
const app = express()
const port = 3000

//Set temlating Engine
app.set('view engine','ejs')

const urlencoderParsar = bodyParsar.urlencoded({ extended: false })

// Navigation
app.get('',(req, res)=>{
    res.render('index')
})

app.post('/onlinereservation.html',(req, res)=>{
    res.render('onlinereservation',urlencoderParser, [
        check('name', 'This name must have atleast 4 char')
        .exists()
        .islength({ min: 4}),
        check('email', 'Email is not valid')
        .isEmail()
        .normalalizeEmail(),
        check('contact', 'contact is not fill')
        .isContact()
        .normalalizeContact(),
        
    ], (req, res)=> {
        const errors = validationResult(req)
        if(!error.isEmpty()){
            //return res.status(422).jsonp(errors.array())
            const alert = errors.array()
            res.render('onlinereservation',{
                alert
            })
        }

    })
})