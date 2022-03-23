const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/userModel');

// ----------- Create user -------------
router.route('/').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
// Or we can use the implemented method in the UserController:
// router.post('/', UserController.create);
// ------------------------------------

// ----------- Get all users -------------
router.route('/').get((req, res) => {
    user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Controller implemented method
// router.get('/', UserController.findAll);
// ------------------------------------

// ----------- Get a specific user -------------
// In this case, we used the method implemented in the UserController
router.get('/:id', UserController.findOne);
// ---------------------------------------------

// ----------- Update user -------------
router.route('/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})
// Or we can use the controller update function like this:
// router.patch('/:id', UserController.update);
// ------------------------------------

// ----------- Delete user -------------
router.route('/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
// Controller implemented methos:
// router.delete('/:id', UserController.destroy);
// ------------------------------------

module.exports = router