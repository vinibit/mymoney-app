import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

function getSummary() {
    const res = axios.get(`${BASE_URL}/billingCycle/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: res
    }
}

export { getSummary }