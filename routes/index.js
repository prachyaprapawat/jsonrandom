var express = require('express');
var router = express.Router();

var request = require('../models/request')
var faker = require('faker');

var random = require('../utils/random')
var catchAsync = require('../utils/catchAsync')
var ObjectId = require('mongodb').ObjectID;


//  path
const showRandom = require('../controller/showRandom')
const createSchrma = require('../controller/createschema')
const postApi = require('../controller/postApi')




/* GET home page. */
router.post('/', catchAsync(createSchrma.createSchema));
router.post('/show', catchAsync(showRandom.showNoSaveSchema));
router.get('/:id/:number',catchAsync( showRandom.showNumberRandom));
router.get('/:id', catchAsync(showRandom.showOneRandom));



router.post('/testapi', catchAsync(postApi.postApi));


module.exports = router;
