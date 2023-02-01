require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/login.spec.js',
        './test/specs/product.spec.js'
]
} : {
    specs: [
        './test/specs/productView.spec.js',
        './test/specs/productSearch.spec.js',
        './test/specs/productFlow.spec.js'
    ]
}

module.exports = { specsConf }