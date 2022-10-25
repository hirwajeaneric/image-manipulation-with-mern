const multer = require('multer');
const moment = require('moment');
const User = require('../models/user');
const fs = require('fs');

exports.test = (req, res, next) => {
    res.send('Testing the server...')
} 

exports.find = (req, res, next) => {
    User.find()
    .then(response => {
        res.status(201).send(response);
    })
    .catch(err => res.status(500).send('Server Error :'+err))
}

/**MULTER CONFIGURATION */

//Image storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback ) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, `img-${moment(new Date()).format('DD-MM-YYYY')}-${file.originalname}`)
    }
})

//Image filter
const isImage = function(req, file, callback) {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    } else {
        callback(new Error('Only images are allowed!'))
    }
}

exports.upload = multer({
    storage: imgconfig,
    fileFilter: isImage 
})

exports.save = async (req, res, next)=> {
    const date = moment(new Date()).format('YYYY-MM-DD');

    if (!req.body.fname || !req.file.filename) {
        res.status(401).send({status: 401, message: "Please fill in all fields."})
    } else {
        try {
            const finalData = await new User({
                fname: req.body.fname,
                imgpath: req.file.filename,
                date: date
            }).save();
            res.status(201).send({status: 201, message:"Saved", finalData});

        } catch (error) {
            res.status(401).send({status: 500, message: error})
        }
    }
}

exports.deleteUser = async (req, res, next) => {
    User.findByIdAndRemove(req.query.id)
    .then(response => {
        res.status(201).send({message: 'User Deleted'})
    })
    .catch(error => {
        res.status(401).send({message: 'Unable to delete user! :'+error})
    })
}