const BillingCycle = require('./billingCycle')
const ErrorHandler = require('../common/errorHandler')

// Define the methods that will be available in the API
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Define the options for the methods
BillingCycle.updateOptions({ new: true, runValidators: true })

// Middleware to handle errors
BillingCycle
    .after('post', ErrorHandler)
    .after('put', ErrorHandler)

// Routes
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle