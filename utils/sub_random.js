var datarandom = require('../data/randomtype')
var faker = require('faker');
var thAddress = require('../data/address')



//  function random data no obj no array
const randomtype = async (e) => {
    let randomJson = {}
    if (datarandom.address.includes(e.type)) {
        switch (e.type) {
            case "zipCode":
                randomJson[e.name] = faker.address.zipCode()
                break;
            case "zipCodeByState":
                randomJson[e.name] = faker.address.zipCodeByState()
                break;
            case "city":
                randomJson[e.name] = faker.address.city()
                break;
            case "cityPrefix":
                randomJson[e.name] = faker.address.cityPrefix()
                break;
            case "citySuffix":
                randomJson[e.name] = faker.address.cityPrefix()
                break;
            case "streetName":
                randomJson[e.name] = faker.internet.cityPrefix()
                break;
            case "streetAddress":
                randomJson[e.name] = faker.address.streetAddress()
                break;
            case "streetSuffix":
                randomJson[e.name] = faker.address.streetSuffix()
                break;
            case "streetPrefix":
                randomJson[e.name] = faker.address.streetPrefix()
                break;
            case "secondaryAddress":
                randomJson[e.name] = faker.address.secondaryAddress()
                break;
            case "county":
                randomJson[e.name] = faker.address.county()
                break;
            case "country":
                randomJson[e.name] = faker.address.country()
                break;
            case "countryCode":
                randomJson[e.name] = faker.address.countryCode()
                break;
            case "state":
                randomJson[e.name] = faker.address.state()
                break;
            case "stateAbbr":
                randomJson[e.name] = faker.address.stateAbbr()
                break;
            case "latitude":
                randomJson[e.name] = faker.address.latitude()
                break;
            case "longitude":
                randomJson[e.name] = faker.address.longitude()
                break;
            case "direction":
                randomJson[e.name] = faker.address.direction()
                break;
            case "cardinalDirection":
                randomJson[e.name] = faker.address.cardinalDirection()
                break;
            case "ordinalDirection":
                randomJson[e.name] = faker.address.ordinalDirection()
                break;
            case "nearbyGPSCoordinate":
                randomJson[e.name] = faker.address.nearbyGPSCoordinate()
                break;
            case "timeZone":
                randomJson[e.name] = faker.address.timeZone()
                break;

        }
    } else if (datarandom.name.includes(e.type)) {
        switch (e.type) {
            case "firstName":
                randomJson[e.name] = faker.name.findName()
                break;
            case "lastName":
                randomJson[e.name] = faker.name.lastName()
                break;
            case "findName":
                randomJson[e.name] = faker.name.findName()
                break;
            case "jobTitle":
                randomJson[e.name] = faker.name.jobTitle()
                break;
            case "gender":
                randomJson[e.name] = faker.name.gender()
                break;
            case "prefix":
                randomJson[e.name] = faker.name.prefix()
                break;
            case "lastName":
                randomJson[e.name] = faker.name.lastName()
                break;
            case "suffix":
                randomJson[e.name] = faker.name.suffix()
                break;
            case "title":
                randomJson[e.name] = faker.name.title()
                break;
            case "jobDescriptor":
                randomJson[e.name] = faker.name.jobDescriptor()
                break;
            case "jobArea":
                randomJson[e.name] = faker.name.jobArea()
                break;
            case "jobType":
                randomJson[e.name] = faker.name.jobType()
                break;
        }
    } else if (datarandom.internet.includes(e.type)) {
        switch (e.type) {
            case "avatar":
                randomJson[e.name] = faker.internet.avatar()
                break;
            case "email":
                randomJson[e.name] = faker.internet.email()
                break;
            case "exampleEmail":
                randomJson[e.name] = faker.internet.exampleEmail()
                break;
            case "userName":
                randomJson[e.name] = faker.internet.userName()
                break;
            case "protocol":
                randomJson[e.name] = faker.internet.protocol()
                break;
            case "url":
                randomJson[e.name] = faker.internet.url()
                break;
            case "domainName":
                randomJson[e.name] = faker.internet.domainName()
                break;
            case "domainSuffix":
                randomJson[e.name] = faker.internet.domainSuffix()
                break;
            case "domainWord":
                randomJson[e.name] = faker.internet.domainWord()
                break;
            case "ip":
                randomJson[e.name] = faker.internet.ip()
                break;
            case "ipv6":
                randomJson[e.name] = faker.internet.ipv6()
                break;
            case "userAgent":
                randomJson[e.name] = faker.internet.userAgent()
                break;
            case "color":
                randomJson[e.name] = faker.internet.color()
                break;
            case "mac":
                randomJson[e.name] = faker.internet.mac()
                break;
            case "password":
                randomJson[e.name] = faker.internet.password()
                break;
        }
    } else if (datarandom.company.includes(e.type)) {
        switch (e.type) {
            case "suffixes":
                randomJson[e.name] = faker.company.suffixes()
                break;
            case "companyName":
                randomJson[e.name] = faker.company.companyName()
                break;
            case "companySuffix":
                randomJson[e.name] = faker.company.companySuffix()
                break;
            case "bs":
                randomJson[e.name] = faker.company.bs()
                break;
            case "catchPhraseAdjective":
                randomJson[e.name] = faker.company.catchPhraseAdjective()
                break;
            case "catchPhraseDescriptor":
                randomJson[e.name] = faker.company.catchPhraseDescriptor()
                break;
            case "catchPhraseNoun":
                randomJson[e.name] = faker.company.catchPhraseNoun()
                break;
            case "bsAdjective":
                randomJson[e.name] = faker.company.bsAdjective()
                break;
            case "bsBuzz":
                randomJson[e.name] = faker.company.bsBuzz()
                break;

        }
    } else if (datarandom.database.includes(e.type)) {
        switch (e.type) {
            case "column":
                randomJson[e.name] = faker.database.column()
                break;
            case "type":
                randomJson[e.name] = faker.database.type()
                break;
            case "collation":
                randomJson[e.name] = faker.database.collation()
                break;
            case "engine":
                randomJson[e.name] = faker.database.engine()
                break;
        }
    } else if (datarandom.date.includes(e.type)) {
        switch (e.type) {
            case "past":
                randomJson[e.name] = faker.date.past()
                break;
            case "future":
                randomJson[e.name] = faker.date.future()
                break;
            case "between":
                randomJson[e.name] = faker.date.between()
                break;
            case "recent":
                randomJson[e.name] = faker.date.recent()
                break;
            case "soon":
                randomJson[e.name] = faker.date.soon()
                break;
            case "month":
                randomJson[e.name] = faker.date.month()
                break;
            case "weekday":
                randomJson[e.name] = faker.date.weekday()
                break;
        }
    } else if (datarandom.finance.includes(e.type)) {
        switch (e.type) {
            case "account":
                randomJson[e.name] = faker.finance.account()
                break;
            case "accountName":
                randomJson[e.name] = faker.finance.accountName()
                break;
            case "routingNumber":
                randomJson[e.name] = faker.finance.routingNumber()
                break;
            case "mask":
                randomJson[e.name] = faker.finance.mask()
                break;
            case "amount":
                randomJson[e.name] = faker.finance.amount()
                break;
            case "transactionType":
                randomJson[e.name] = faker.finance.transactionType()
                break;
            case "currencyCode":
                randomJson[e.name] = faker.finance.currencyCode()
                break;
            case "urrencyName":
                randomJson[e.name] = faker.finance.urrencyName()
                break;
            case "currencySymbol":
                randomJson[e.name] = faker.finance.currencySymbol()
                break;
            case "bitcoinAddress":
                randomJson[e.name] = faker.finance.bitcoinAddress()
                break;
            case "litecoinAddress":
                randomJson[e.name] = faker.finance.litecoinAddress()
                break;
            case "creditCardNumber":
                randomJson[e.name] = faker.finance.creditCardNumber()
                break;
            case "creditCardCVV":
                randomJson[e.name] = faker.finance.creditCardCVV()
                break;
            case "ethereumAddress":
                randomJson[e.name] = faker.finance.ethereumAddress()
                break;
            case "iban":
                randomJson[e.name] = faker.finance.iban()
                break;
            case "bic":
                randomJson[e.name] = faker.finance.bic()
                break;
            case "transactionDescription":
                randomJson[e.name] = faker.finance.transactionDescription()
                break;
        }
    } else if (datarandom.git.includes(e.type)) {
        switch (e.type) {
            case "branch":
                randomJson[e.name] = faker.git.branch()
                break;
            case "commitEntry":
                randomJson[e.name] = faker.git.commitEntry()
                break;
            case "commitMessage":
                randomJson[e.name] = faker.git.commitMessage()
                break;
            case "commitSha":
                randomJson[e.name] = faker.git.commitSha()
                break;
            case "shortSha":
                randomJson[e.name] = faker.git.shortSha()
                break;

        }
    } else if (datarandom.hacker.includes(e.type)) {
        switch (e.type) {
            case "abbreviation":
                randomJson[e.name] = faker.hacker.abbreviation()
                break;
            case "adjective":
                randomJson[e.name] = faker.hacker.adjective()
                break;
            case "noun":
                randomJson[e.name] = faker.hacker.noun()
                break;
            case "verb":
                randomJson[e.name] = faker.hacker.verb()
                break;
            case "ingverb":
                randomJson[e.name] = faker.hacker.ingverb()
                break;
            case "phrase":
                randomJson[e.name] = faker.hacker.phrase()
                break;

        }
    } else if (datarandom.image.includes(e.type)) {
        switch (e.type) {
            case "image":
                randomJson[e.name] = faker.image.image()
                break;
            case "avatar":
                randomJson[e.name] = faker.image.avatar()
                break;
            case "imageUrl":
                randomJson[e.name] = faker.image.imageUrl()
                break;
            case "abstract":
                randomJson[e.name] = faker.image.abstract()
                break;
            case "animals":
                randomJson[e.name] = faker.image.animals()
                break;
            case "business":
                randomJson[e.name] = faker.image.business()
                break;
            case "cats":
                randomJson[e.name] = faker.image.cats()
                break;
            case "city":
                randomJson[e.name] = faker.image.city()
                break;
            case "food":
                randomJson[e.name] = faker.image.food()
                break;
            case "nightlife":
                randomJson[e.name] = faker.image.nightlife()
                break;
            case "fashion":
                randomJson[e.name] = faker.image.fashion()
                break;
            case "people":
                randomJson[e.name] = faker.image.people()
                break;
            case "nature":
                randomJson[e.name] = faker.image.nature()
                break;
            case "sports":
                randomJson[e.name] = faker.image.sports()
                break;
            case "technics":
                randomJson[e.name] = faker.image.technics()
                break;
            case "transport":
                randomJson[e.name] = faker.image.transport()
                break;
            case "dataUri":
                randomJson[e.name] = faker.image.dataUri()
                break;
            case "lorempixel":
                randomJson[e.name] = faker.image.lorempixel()
                break;
            case "unsplash":
                randomJson[e.name] = faker.image.unsplash()
                break;
            case "lorempicsum":
                randomJson[e.name] = faker.image.lorempicsum()
                break;

        }
    } else if (datarandom.helpers.includes(e.type)) {
        switch (e.type) {
            case "randomize":
                randomJson[e.name] = faker.helpers.randomize()
                break;
            case "slugify":
                randomJson[e.name] = faker.helpers.slugify()
                break;
            case "replaceSymbolWithNumber":
                randomJson[e.name] = faker.helpers.replaceSymbolWithNumber()
                break;
            case "replaceSymbols":
                randomJson[e.name] = faker.helpers.replaceSymbols()
                break;
            case "replaceCreditCardSymbols":
                randomJson[e.name] = faker.helpers.replaceCreditCardSymbols()
                break;
            case "regexpStyleStringParse":
                randomJson[e.name] = faker.helpers.regexpStyleStringParse()
                break;
            case "shuffle":
                randomJson[e.name] = faker.helpers.shuffle()
                break;
            case "mustache":
                randomJson[e.name] = faker.helpers.mustache()
                break;
            case "createCard":
                randomJson[e.name] = faker.helpers.createCard()
                break;
            case "contextualCard":
                randomJson[e.name] = faker.helpers.contextualCard()
                break;
            case "userCard":
                randomJson[e.name] = faker.helpers.userCard()
                break;
            case "createTransaction":
                randomJson[e.name] = faker.helpers.createTransaction()
                break;
        }
    } else if (datarandom.lorem.includes(e.type)) {
        switch (e.type) {
            case "word":
                randomJson[e.name] = faker.lorem.word()
                break;
            case "words":
                randomJson[e.name] = faker.lorem.words()
                break;
            case "sentence":
                randomJson[e.name] = faker.lorem.sentence()
                break;
            case "slug":
                randomJson[e.name] = faker.lorem.slug()
                break;
            case "sentences":
                randomJson[e.name] = faker.lorem.sentences()
                break;
            case "paragraph":
                randomJson[e.name] = faker.lorem.paragraph()
                break;
            case "paragraphs":
                randomJson[e.name] = faker.lorem.paragraphs()
                break;
            case "text":
                randomJson[e.name] = faker.lorem.text()
                break;
            case "lines":
                randomJson[e.name] = faker.lorem.lines()
                break;

        }
    } else if (datarandom.phone.includes(e.type)) {
        switch (e.type) {
            case "phoneNumber":
                randomJson[e.name] = faker.phone.phoneNumber()
                break;
            case "phoneNumberFormat":
                randomJson[e.name] = faker.phone.phoneNumberFormat()
                break;
            case "phoneFormats":
                randomJson[e.name] = faker.phone.phoneFormats()
                break;
        }
    } else if (datarandom.system.includes(e.type)) {
        switch (e.type) {
            case "fileName":
                randomJson[e.name] = faker.system.fileName()
                break;
            case "commonFileName":
                randomJson[e.name] = faker.system.commonFileName()
                break;
            case "mimeType":
                randomJson[e.name] = faker.system.mimeType()
                break;
            case "commonFileType":
                randomJson[e.name] = faker.system.commonFileType()
                break;
            case "commonFileExt":
                randomJson[e.name] = faker.system.commonFileExt()
                break;
            case "fileType":
                randomJson[e.name] = faker.system.fileType()
                break;
            case "fileExt":
                randomJson[e.name] = faker.system.fileExt()
                break;
            case "directoryPath":
                randomJson[e.name] = faker.system.directoryPath()
                break;
            case "filePath":
                randomJson[e.name] = faker.system.filePath()
                break;
            case "semver":
                randomJson[e.name] = faker.system.semver()
                break;
        }
    } else if (datarandom.time.includes(e.type)) {
        switch (e.type) {
            case "recent":
                randomJson[e.name] = faker.time.recent()
                break;
        }
    } else if (datarandom.vehicle.includes(e.type)) {
        switch (e.type) {
            case "vehicle":
                randomJson[e.name] = faker.vehicle.vehicle()
                break;
            case "manufacturer":
                randomJson[e.name] = faker.vehicle.manufacturer()
                break;
            case "model":
                randomJson[e.name] = faker.vehicle.model()
                break;
            case "type":
                randomJson[e.name] = faker.vehicle.type()
                break;
            case "fuel":
                randomJson[e.name] = faker.vehicle.fuel()
                break;
            case "vin":
                randomJson[e.name] = faker.vehicle.vin()
                break;
            case "color":
                randomJson[e.name] = faker.vehicle.color()
                break;
        }
    } else if (datarandom.random.includes(e.type)) {
        switch (e.type) {
            case "number":
                randomJson[e.name] = faker.random.number()
                break;
            case "float":
                randomJson[e.name] = faker.random.float()
                break;
            case "arrayElement":
                randomJson[e.name] = faker.random.arrayElement()
                break;
            case "arrayElements":
                randomJson[e.name] = faker.random.arrayElements()
                break;
            case "objectElement":
                randomJson[e.name] = faker.random.objectElement()
                break;
            case "uuid":
                randomJson[e.name] = faker.random.uuid()
                break;
            case "boolean":
                randomJson[e.name] = faker.random.boolean()
                break;
            case "word":
                randomJson[e.name] = faker.random.word()
                break;
            case "words":
                randomJson[e.name] = faker.random.words()
                break;
            case "image":
                randomJson[e.name] = faker.random.image()
                break;
            case "locale":
                randomJson[e.name] = faker.random.locale()
                break;
            case "alpha":
                randomJson[e.name] = faker.random.alpha()
                break;
            case "alphaNumeric":
                randomJson[e.name] = faker.random.alphaNumeric()
                break;
            case "hexaDecimal":
                randomJson[e.name] = faker.random.hexaDecimal()
                break;
        }
    } else if (e.type === "mynumber") {

        if (!e.max && !e.min) {
            randomJson[e.name] = Math.floor(Math.random() * (1000 - 0) + 0)
        }
        else {
            let max, min
            e.max ? max = e.max : max = 1000
            e.min ? min = e.min : min = 1
            randomJson[e.name] = Math.floor(Math.random() * (max - min) + min)
        }
    } else if (e.type === "myrandomarray") {
        let randomValue = e.random[Math.floor(Math.random() * e.random.length)];
        randomJson[e.name] = randomValue
    }
    else if (thAddress.codeAddress.includes(e.type)) {
        let randomValue = thAddress.address[Math.floor(Math.random() * 7493)];
        console.log(randomValue)
        switch (e.type) {
            case "th_myaddress_district":
                randomJson[e.name] = randomValue.district
                break;
            case "th_myaddress_amphoe":
                randomJson[e.name] = randomValue.amphoe
                break;
            case "th_myaddress_province":
                randomJson[e.name] = randomValue.province
                break;
            case "th_myaddress_zipcode":
                randomJson[e.name] = randomValue.zipcode
                break;
            case "th_myaddress_district_code":
                randomJson[e.name] = randomValue.district_code
                break;
            case "th_myaddress_province_code":
                randomJson[e.name] = randomValue.amphoe_code
                break;
            case "th_myaddress_amphoe_code":
                randomJson[e.name] = randomValue.province_code
                break;
            case "th_myaddress_address":
                randomJson[e.name] = `จ.${randomValue.province} อ.${randomValue.amphoe} ต.${randomValue.district} 
                รหัสไปรษณีย์:${randomValue.zipcode} บ้านเลขที่:${Math.floor(Math.random() * 999)}/${Math.floor(Math.random() * 99)} 
                หมู่.${Math.floor(Math.random() * 10)+1}`
                break;
        }
    }

    else {
        try {
            e.info ? randomJson[e.name] = e.info : randomJson[e.name] = "error input please input again"
        } catch (e) {
            randomJson[e.name] = "error input please input again"
        }

    }

    return randomJson
}
module.exports.randomtype = randomtype


