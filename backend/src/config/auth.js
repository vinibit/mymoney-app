const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {

    // CORS preflight request
    if (req.method === 'OPTIONS') {         
        next()        
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
    
        if (!token) return res.status(403).send({ 
            auth: false, message: 'No token provided.' 
        })    
    
        jwt.verify(token, env.authSecret, (err, decoded) => {
            if (err) {
                return res.status(500).send({ 
                    auth: false, message: 'Failed to authenticate token.' 
                })
            }
    
            // If everything is good, save the decoded token to request for use in other routes
            req.decoded = decoded
    
            next()
        })
    }

}