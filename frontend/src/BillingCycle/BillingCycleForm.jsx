import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { reduxForm, Field, formValueSelector } from "redux-form"

import { init } from "./BillingCycleActions"
import LabelInput from "../Common/Form/LabelInput"
import BillList from "./BillList"
import Summary from "./Summary"

class BillingCycleForm extends Component {

    calculateSummary() {

        const sum = (t, v) => t + v
        const { credits, debts } = this.props

        const sumOfCredits = credits.map(c => +c.value || 0).reduce(sum)
        const sumOfDebts = debts.map(d => +d.value || 0).reduce(sum)

        console.log(sumOfCredits, sumOfDebts)

        return { sumOfCredits, sumOfDebts }        
    }

    render() {

        const { handleSubmit, init, readOnly, submitClass, submitLabel, credits, debts } = this.props 
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()       
        
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">                    
                    <Field name="name" component={LabelInput} 
                        label="Nome" 
                        sizes="12 4" 
                        placeholder="Informe o nome" 
                        readOnly={readOnly} />
                    <Field name="month" component={LabelInput} 
                        label="Mês" 
                        sizes="12 4" 
                        placeholder="Informe o mês" 
                        readOnly={readOnly} />
                    <Field name="year" component={LabelInput} 
                        label="Ano" 
                        sizes="12 4" 
                        placeholder="Informe o ano" 
                        readOnly={readOnly} />

                    <Summary totalCredit={sumOfCredits} totalDebt={sumOfDebts} />

                    <BillList list={credits}
                        name="credits" 
                        legend="Créditos" 
                        sizes="12 6" 
                        readOnly={readOnly} 
                    />

                    <BillList list={debts}
                        name="debts" 
                        legend="Débitos" 
                        sizes="12 6" 
                        showStatus={true}
                        readOnly={readOnly} 
                    />

                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${submitClass}`}>
                        {submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                        onClick={init}>Cancel</button>
                </div>
            </form>
        )
    }
}

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ 
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts') 
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(
        BillingCycleForm
    ))