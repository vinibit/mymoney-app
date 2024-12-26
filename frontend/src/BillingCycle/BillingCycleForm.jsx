import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { reduxForm, Field } from "redux-form"

import { init } from "./BillingCycleActions"
import Input from "../Common/Form/Input"

class BillingCycleForm extends Component {

    render() {

        const { handleSubmit, init, readOnly, submitClass, submitLabel } = this.props        
        
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">                    
                    <Field name="name" component={Input} 
                        label="Nome" 
                        sizes="12 4" 
                        placeholder="Informe o nome" 
                        readOnly={readOnly} />
                    <Field name="month" component={Input} 
                        label="Mês" 
                        sizes="12 4" 
                        placeholder="Informe o mês" 
                        readOnly={readOnly} />
                    <Field name="year" component={Input} 
                        label="Ano" 
                        sizes="12 4" 
                        placeholder="Informe o ano" 
                        readOnly={readOnly} />
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

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(
    reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(
        BillingCycleForm
    ))