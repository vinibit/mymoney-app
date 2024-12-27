const express = require('express');
const auth = require('./auth');

module.exports = function(server) {

    /*
     * JWT Protected Routes 
     */ 
    const protectedApiRouter = express.Router()
    protectedApiRouter.use(auth)
    server.use('/api', protectedApiRouter)
    
    // Billing Cycle Routes
    const BillingCycleService = require('../api/billingCycle/billingCycleService')
    BillingCycleService.register(protectedApiRouter, '/billingCycle')    
    
    /*
     * Public Routes
     */ 
    const publicApiRouter = express.Router()
    server.use('/service', publicApiRouter)

    const AuthService = require('../api/user/authService')
    publicApiRouter.post('/login', AuthService.login)
    publicApiRouter.post('/signup', AuthService.sigup)
    publicApiRouter.post('/validateToken', AuthService.verifyToken)
}