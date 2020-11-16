const axios = require('axios')
var random = require('../utils/random')
var ObjectId = require('mongodb').ObjectID;
var request = require('../models/request')
var faker = require('faker');



module.exports.postApi = async (req, res, next) => {
    const userJson = req.body.data
    const linkWeb = req.body.api
    const token = req.body.token
    const methodApi = req.body.methodApi
    let getData
    let randomJson
    // for (loop = 0; loop < req.params.number; loop++) {
    randomJson = await random.randomjson(userJson)
    console.log(linkWeb)
    console.log(randomJson)
    console.log(methodApi)
    
    const headers = {
        headers: { 'Authorization': token ? `${token}` : '' }
    }
    
    if (methodApi === 'post') {
         getData = await axios.post(linkWeb, randomJson, headers)
    } else if(methodApi === 'get') {
         getData = await axios.get(linkWeb, headers)
    }else{
         getData = {data:"not method"}
    }

    res.send(getData.data)
}