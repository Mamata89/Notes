const express=require('express')
const bcryptjs=require('bcryptjs')
const router=express.Router()
const _=require('lodash')
const {User}=require('../models/userModel')
// const {authenticateUser}=require('../middlewares/authentication')

// localhost:3000/users/register
module.exports.register=(req,res)=>{
    const body=req.body
    const user=new User(body)
    user.save()
    .then(function(user){
        res.send(_.pick(user,['_id','username','email']))
    })
    .catch(function(err){
        res.send(err)
    })
}

// localhost:3000/users/login
module.exports.login=(req,res)=>{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then(function(user){
        return user.generateToken()
    })
    .then(function(token){
        // res.setHeader('x-auth',token).send({})
       
         res.send(token)
    })
    .catch(function(err){
        res.send(err)
    })
    // User.findOne({email:body.email})
    // .then(function(user){
    //    if(!user){
    //        res.status('404').send('invalid email/password')
    //    }
    //    bcryptjs.compare(body.password,user.password)
    //    .then(function(result){
    //     if(result){
    //         res.json(user)
    //     }
    //     res.status('404').send('invalid email/password')
    // })
    // })
}

// localhost:3000/users/account
module.exports.account=(req,res)=>{
    const {user}=req
  res.send(_.pick(user,['_id','username','email']))
}

// localhost:3000/users/logout
module.exports.logout=(req,res)=>{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:"successfully logged out"})
    })
    .catch(function(err){
        res.send(err)
    })
}
// module.exports={
//     usersRouter:router
// }