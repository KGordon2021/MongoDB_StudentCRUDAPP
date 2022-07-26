let express = require('express');
const students = require('../models/students');
const app = express();

//Requiring Monsgoose Model
let Student = require('../models/students');
let studentRoute = express.Router();


//mongoose Function
// create()
// findById()
// findByIdAndUpdate()
// findOneAndRemove()


// Get All students
studentRoute.route('/').get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//create student
studentRoute.route('/create').post((req, res) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


//find by Id
studentRoute.route('/find/:id').get((req, res) => {
  students.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//update by id

studentRoute.route('/update/:id').put((req, res) => {
  students.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//delete by id

studentRoute.route('/remove/:id').delete((req, res) => {
  Student.findByIdAndRemove(req.params.id, ( error, data) => {
    if (error) {
      return next(error)
    }else {
      res.json(data)
    }
  })
})
module.exports = studentRoute;
