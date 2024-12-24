import { BILLING_CYCLE_FETCHED } from './BillingCycleActionsTypes'

const INITIAL_STATE = { list: [] }

const BillingCycleReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case BILLING_CYCLE_FETCHED:
            return { ...state, list: payload.data }
        default:
            return state
    }
}

export default BillingCycleReducer