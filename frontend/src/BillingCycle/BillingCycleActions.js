import { BILLING_CYCLE_FETCHED, BIILLING_CYCLE_CREATED } from './BillingCycleActionsTypes'

import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { selectTab, showTabs } from '../Common/Tabs/TabsActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

function getList() {
    const request = axios.get(`${BASE_URL}/billingCycle`)
    return {
        type: BILLING_CYCLE_FETCHED,
        payload: request
    }   
}

function create(values) {

    console.log('values', values)

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycle`, values)
            .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(err => {
                err.response.data.errors.forEach(error => toastr.error('Erro', error))
            })        
    }       
}

function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

export { getList, create, showUpdate, init }