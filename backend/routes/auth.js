const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Nitinisagood$devlopar';
//ROUTE 1: Create a User Using: Post "/api/auth/Login". No login require
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5}),
] ,async(req, res)=>{
  let success = false;
  // If there are errors,return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    //CHECK WHETHER THE USER WITH THIS EMAIL EXISTS ALREADY
   try{

  let user = await User.findOne({email: req.body.email});
  if (user){
    return res.status(400).json({ success, error:"Sorry a user with this email already exists"})
  }
  const salt = await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(req.body.password, salt);

 user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      })
      const data={
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success= true;
     res.json({ success,authtoken})


      } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})
//Route :2 Authenticate a User Using: Post "/api/auth/Login". No login require

router.post('/login',[
   
  body('email','Enter a valid email').isEmail(),
  body('password','Password Cannot be blank').exists(),
] ,async(req, res)=>{
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password} = req.body;
  try {
     let user = await User.findOne({email});
     if(!user){
      return res.status(400).json({error: "Please try to login correct credentials"});
     }
     const passwordCompare = await bcrypt.compare(password, user.password);
     if(!passwordCompare){
      success = false;
      return res.status(400).json({success, error: "Please try to login correct credentials"});
     }
     const data={
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
   success = true;
   res.json({ success, authtoken})

  } catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//Route :3 Get loggedin User Detail using : Post "/api/auth/getuser". No login require
router.post('/getuser', fetchuser, async(req, res)=>{
 
try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
})
module.exports = router