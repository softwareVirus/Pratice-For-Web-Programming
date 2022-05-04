const express = require('express')
const moongose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const router = express.Router();

router.get('/b',async (req,res) => {
  try {
    const inputs = await User.find()
    console.log(inputs)
    return res.status(200).json(inputs)
  }catch(err) {
    console.log(error)
    return res.status(400).json({message: 'create user error'})
  }
})

router.delete('/c',async (req,res) => {
  try {
    console.log("******************************")
    console.log(req.headers._id)
    const inputs = await User.find().deleteOne({_id:req.headers._id});
    return res.status(200).json(inputs)
  }catch(err) {
    console.log(error)
    return res.status(400).json({message: 'create user error'})
  }
})

router.post('/a',async (req,res) => {
  try {
    console.log(req.body)
    const {input} = req.body;
    const createToDo = await User.create({
      input
    })

    return res.status(200).json(createToDo)
  } catch(error) {
    console.log(error)
    return res.status(400).json({message: 'create user error'})
  }
})


module.exports = router;