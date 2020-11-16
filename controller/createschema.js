
var random = require('../utils/random')
var ObjectId = require('mongodb').ObjectID;
var request = require('../models/request')
var faker = require('faker');


module.exports.createSchema = async (req, res, next) => {
    let randomJson
  
    const userJson = req.body.data
    const savejson = await random.savedata(userJson)
    const idResponse = await request.createRequest({ jsonSchema: savejson })
    randomJson = await random.randomjson(userJson)
    randomJson["id"] = idResponse._id
  
    res.send(randomJson);
  };



