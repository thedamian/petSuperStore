
const functions = require("firebase-functions")
const express = require('express')
const { createPet, getAllPets, getSinglePet, deletePet, updateSingleStaff } = require('./src/store/pets')
const { createStaff, getAllStaff, getSingleStaff, deleteStaff, updateSinglePet } = require('./src/store/staff')
const app = express()
app.get('/pets', getAllPets)
app.get('/staffs', getAllStaff) 
app.get('/staffs/:staffId', getSingleStaff)
app.get('/pets/:petId', getSinglePet)
app.post('/staff', createStaff)
app.post('/pets', createPet)
app.patch('/staff/:staffId',updateSingleStaff)
app.patch('/pets/:petId',updateSinglePet)
app.delete('/staff/:staffId', deleteStaff)
app.delete('/pets/:petId', deletePet)
exports.app = functions.https.onRequest(app)


