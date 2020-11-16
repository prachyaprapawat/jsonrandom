
var faker = require('faker');
var request = require('../models/request')
var datarandom = require('./sub_random')




const savedata = async (e) => {
    let saveJson = []
    let jsonDate = []
    e.map(e => {
        // console.log(e)
        if (e.data) {
            jsonDate = e.data.map(e => {
                return { "name": e.name, "type": e.type }
            })
        }
        let obj = {}
        if (e.data) {
            obj = {
                "type": e.type,
                "name": e.name,
                "data": jsonDate,
                "number": e.number
            }
        } else {
            if (e.hasOwnProperty('info')) { obj['info'] = e.info }
            e.hasOwnProperty('type') ? obj['type'] = e.type : ""
            e.hasOwnProperty('max') ? obj['max'] = e.max : ""
            e.hasOwnProperty('min') ? obj['min'] = e.min : ""
            e.hasOwnProperty('random') ? obj['random'] = e.random : ""
            obj["name"] = e.name
        }
        console.log(obj)

        saveJson.push(obj)
    })

    return saveJson
}
module.exports.savedata = savedata



const randomjson = async (e) => {
    let randomJson = {}
    e.map(async (e) => {
        let dataArray = []
        let objCollection = {}
        if (e.data) {
            jsonData = e.data
            const randomNumber = Math.floor(Math.random() * e.number) + 1
            for (i = 0; i < randomNumber; i++) {
                jsonData.map(async (e) => {
                    let random = await datarandom.randomtype(e)
                    console.log(random)
                    objCollection[e.name] = random[e.name]

                })
                dataArray.push(objCollection)
            }
            randomJson[e.name] = dataArray
            console.log("-------------------------------")

        }
        // ------------------------------------------------
        else {
            let random = await datarandom.randomtype(e)
            randomJson[e.name] = random[e.name]
        }

    })
    return randomJson
};


module.exports.randomjson = randomjson
