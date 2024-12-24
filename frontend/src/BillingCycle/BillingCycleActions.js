import { BILLING_CYCLE_FETCHED } from './BillingCycleActionsTypes'
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

function getList() {
    const request = axios.get(`${BASE_URL}/billingCycle`)
    return {
        type: BILLING_CYCLE_FETCHED,
        payload: request
    }   
}

export { getList }