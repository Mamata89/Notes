const express = require('express')
const router = express.Router()
const {authenticateUser}=require('../app/middleware/authentication')
const notesController = require('../app/controller/noteController')
const categoriesController=require('../app/controller/categoryController')
const UsersController =require('../app/controller/userController')

router.post('/users/register',UsersController.register)
router.post('/users/login',UsersController.login)
router.get('/users/account',authenticateUser,UsersController.account)
router.delete('/users/logout',authenticateUser,UsersController.logout)

router.get('/notes', notesController.list)
router.get('/notes/:id', notesController.show)
router.post('/notes', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.destroy)

router.get('/categories',categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id',categoriesController.destroy)

module.exports = router