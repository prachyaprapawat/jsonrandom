var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connect Error'));

var requestSchema = mongoose.Schema({


    jsonSchema: [
        {



        }, { strict: false }
    ]
});
var Request = module.exports = mongoose.model('request', requestSchema)


const createRequest = (order) => {
    const newOrder = Request.create(order).then(e => {
        // console.log(e)
        return e
    })

    return newOrder
};
module.exports.createRequest = createRequest;

            // type: {
            //     type: String
            // },
            // name: {
            //     type: String
            // },
            // number: {
            //     type: Number
            // },
            // data: [{
            //     type: {
            //         type: String
            //     },
            //     name: {
            //         type: String
            //     }
            // }
            // ]