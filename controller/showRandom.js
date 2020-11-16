
var random = require('../utils/random')
var ObjectId = require('mongodb').ObjectID;
var request = require('../models/request')
var faker = require('faker');


module.exports.showNumberRandom = async (req, res, next) => {
    let randomJson = []
    try {
        const schema = await request.findById(req.params.id)
        for (loop = 0; loop < req.params.number; loop++) {
            randomJson.push(await random.randomjson(schema.jsonSchema))
        }
        res.status(200).send(randomJson);
    } catch (e) {
        res.status(503).send({ "error": e });
    }


}

module.exports.showOneRandom = async (req, res, next) => {
    let randomJson = []
    try {
        const schema = await request.findById(req.params.id)
        randomJson = (await random.randomjson(schema.jsonSchema))
    } catch (e) {
        res.status(503).send({ "error": e });
    }
    res.status(200).send(randomJson);
}



module.exports.showNoSaveSchema = async (req, res, next) => {
    let randomJson
    const userJson = req.body.data
    console.log(userJson)
    randomJson = await random.randomjson(userJson)
  
    res.send(randomJson);
  };


