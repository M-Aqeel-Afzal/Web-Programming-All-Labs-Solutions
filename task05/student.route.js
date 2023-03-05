let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let studentSchema = require('../models/Student');
// CREATE Student
router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Students
router.route('/').get((req, res) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Get  Student by id and name
router.route('/Get-student/:id/:name').get((req, res) => {
  studentSchema.find({id:req.params.id,name:req.params.name}, function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});


// Get  Student by roll no and name
router.route('/Get-student/:rollno/:name').get((req, res) => {
  studentSchema.find({rollno:req.params.rollno,name:req.params.name}, function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});


router.route('/Get-student/:email').get((req, res) => {
  studentSchema.find({email:req.params.email}, function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})
// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;