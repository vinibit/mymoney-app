const express = require('express');

module.exports = function(server) {

    // API Routes
    const router = express.Router();
    server.use('/api', router);

    // Billing Cycle Routes
    const BillingCycleService = require('../api/billingCycle/billingCycleService');
    BillingCycleService.register(router, '/billingCycle');    
}