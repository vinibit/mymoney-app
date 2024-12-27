const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('./user') // Assuming you have a User model

const EMAIL_REGEX = /\S+@\S+\.\S+/
const PASSWORD_REGEX = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/
const EXPIRATION_TIME = '1 day'

const sendErrorsFromDB = (res, dbError) => {
    const erros = []
    _.forIn(dbError.errors, error => erros.push(error.message))
    return res.status(400).json({ erros })
}

const authService = {       

    login: (req, res, next) => {

        const { email, password } = req.body;

        User.findOne({ email }, (err, user) => {
            
            if (err) 
                return sendErrorsFromDB(res, err)
            
            if (!user || !bcrypt.compareSync(password, user.password)) 
                return res.status(401).send({ errors: ['Usuário/Senha inválidos'] })
                
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: EXPIRATION_TIME
            })
            const { name, email } = user
            res.json({ name, email, token })            
        })

        return next()
    },

    verifyToken: (req, res, next) => {

        const token = req.body.token || ''

        jwt.verify(token, env.authSecret, function(err, decoded) {
            return res
                .status(200)
                .send({ valid: !err })
        })        
    },

    sigup: (req, res, next) => {
        
        const { name, email, password, confirmPassword } = req.body
        
        if (!email.match(EMAIL_REGEX)) {
            return res.status(400).send({ errors: ['O e-mail informado está inválido'] })
        }

        if (!password.match(PASSWORD_REGEX)) {
            return res.status(400).send({
                errors: [
                    'Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caractere especial e tamanho entre 6-20.'
                ]
            })
        }

        const salt = bcrypt.genSaltSync()
        const passwordHash = bcrypt.hashSync(password, salt)
        if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
            return res.status(400).send({ 
                errors: ['Senhas não conferem.']
            })
        }

        User.findOne({ email }, (err, user) => {
            if (err) return sendErrorsFromDB(res, err)
            if (user) return res.status(400).send({ 
                errors: ['Usuário já cadastrado.'] 
            })
            
            const newUser = new User({ name, email, password: passwordHash })
            newUser.save(err => {
                if (err) return sendErrorsFromDB(res, err)
                this.login(req, res, next)
            })
        })

    }
}

module.exports = authService;