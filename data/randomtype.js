var faker = require('faker');


const address = [
    "zipCode",
    "zipCodeByState",
    "city",
    "cityPrefix",
    "citySuffix",
    "streetName", // เสีย
    "streetAddress",
    "streetSuffix",
    "streetPrefix",
    "secondaryAddress",
    "county",
    "country",
    "countryCode",
    "state",
    "stateAbbr",
    "latitude",
    "longitude",
    "direction",
    "cardinalDirection",
    "ordinalDirection",
    "nearbyGPSCoordinate",
    "timeZone",
]
module.exports.address = address

const commerce = [
    "color",
    "department",
    "productName",
    "price",
    "productAdjective",
    "productMaterial",
    "product",
    "productDescription",
]
module.exports.commerce = commerce

const company = [
    "suffixes",
    "companyName",
    "companySuffix",
    "catchPhrase",
    "bs",
    "catchPhraseAdjective",
    "catchPhraseDescriptor",
    "catchPhraseNoun",
    "bsAdjective",
    "bsBuzz",
    "bsNoun",
]
module.exports.company = company

const name = [
    "firstName",
    "lastName",
    "findName",
    "jobTitle",
    "gender",
    "prefix",
    "suffix",
    "title",
    "jobDescriptor",
    "jobArea",
    "jobType",
]
module.exports.name = name

const internet = [
    "avatar",
    "email",
    "exampleEmail",
    "userName",
    "protocol",
    "url",
    "domainName",
    "domainSuffix",
    "domainWord",
    "ip",
    "ipv6",
    "userAgent",
    "color",
    "mac",
    "password",
]
module.exports.internet = internet

const database = [
    "column",
    "type",
    "collation",
    "engine"
]
module.exports.database = database

const date = [
    "past",
    "future",
    "between",
    "recent",
    "soon",
    "month",
    "weekday"
]
module.exports.date = date

const finance = [
    "account",
    "accountName",
    "routingNumber",
    "mask",
    "amount",
    "transactionType",
    "currencyCode",
    "urrencyName",
    "currencySymbol",
    "bitcoinAddress",
    "litecoinAddress",
    "creditCardNumber",
    "creditCardCVV",
    "ethereumAddress",
    "iban",
    "bic",
    "transactionDescription"
]
module.exports.finance = finance

const git = [
    "branch",
    "commitEntry",
    "commitMessage",
    "commitSha",
    "shortSha",
]
module.exports.git = git

const hacker = [
    "abbreviation",
    "adjective",
    "noun",
    "verb",
    "ingverb",
    "phrase",
]
module.exports.hacker = hacker

const image = [
    'image',
    'avatar',
    'imageUrl',
    'abstract',
    'animals',
    'business',
    'cats',
    'city',
    'food',
    'nightlife',
    'fashion',
    'people',
    'nature',
    'sports',
    'technics',
    'transport',
    'dataUri',
    'lorempixel',
    'unsplash',
    'lorempicsum',
]
module.exports.image = image

const helpers = [
    'randomize',
    'slugify',
    'replaceSymbolWithNumber',
    'replaceSymbols',
    'replaceCreditCardSymbols',
    'repeatString',
    'regexpStyleStringParse',
    'shuffle',
    'mustache',
    'createCard',
    'contextualCard',
    'userCard',
    'createTransaction',
]
module.exports.helpers = helpers

const lorem = [
    'word',
    'words',
    'sentence',
    'slug',
    'sentences',
    'paragraph',
    'paragraphs',
    'text',
    'lines',
]
module.exports.lorem = lorem


const phone = [
    'phoneNumber',
    'phoneNumberFormat',
    'phoneFormats',
]
module.exports.phone = phone

const random = [
    'number',
    'float',
    'arrayElement',
    'arrayElements',
    'objectElement',
    'uuid',
    'boolean',
    'word',
    'words',
    'image',
    'locale',
    'alpha',
    'alphaNumeric',
    'hexaDecimal',
]
module.exports.random = random

const system = [
    'fileName',
    'commonFileName',
    'mimeType',
    'commonFileType',
    'commonFileExt',
    'fileType',
    'fileExt',
    'directoryPath',
    'filePath',
    'semver',
]
module.exports.system = system

const time = [
    "recent"
]
module.exports.time = time

const vehicle = [
    'vehicle',
    'manufacturer',
    'model',
    'type',
    'fuel',
    'vin',
    'color',
]
module.exports.vehicle = vehicle
