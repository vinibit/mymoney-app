const INITIAL_STATE = {
    summary: { 
        credit: 0, 
        debt: 0 
    }
}

const DashboardReducer = (state = INITIAL_STATE, {type, payload}) => {
    
    switch (type) {

        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: payload.data }
        default:
            return state
    }
    
}

export default DashboardReducer