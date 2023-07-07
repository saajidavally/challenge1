//add route for user
const express = require("express");
const joi = require("joi")
let userRouter = express.Router();
const userList = [];
const bodyParser = require('body-parser')
userRouter.use(bodyParser.json())

const userValidationRules = joi.object({
  username:joi.string().required(),
  email:joi.string().email().required()
})

userRouter.get('/users/add',(req,res) =>{
    const { name,username, email } = req.query;
    const validationResult = userValidationRules.validate({ username, email });
    let idCounter = 1;
    let id = idCounter++;

  if (validationResult.error) {
    
    // Validation failed
    return res.status(400).send(validationResult.error.details[0].message);}
    else{
      const userExists = userList.some(user => user.email === email);
      let userValid = true;
      if(userExists){
        userValid= false
        return res.status(409).send(`success: ${userValid},
        Error:User with this email already exists`);
      } else{
        userValid=true
        const newUser = { id: idCounter++ , name,username, email };
    userList.push(newUser);
    res.send(`success: ${userValid}. Your user id ${id}`);
      };
}})





module.exports = userRouter