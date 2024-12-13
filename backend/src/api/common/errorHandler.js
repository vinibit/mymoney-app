const _ = require('lodash')

const parseErrors = (nodeRestfulErrors) => {
    const errArr = []
    _.forIn(nodeRestfulErrors, error => errArr.push(error.message))
    return errArr
}

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if (!bundle.errors) {
        next()
        return    
    }

    const errors = parseErrors(bundle.errors)
    res.status(500).json({ errors })
}