import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import Input from "../Common/Form/Input"

class BillingCycleForm extends Component {

    render() {

        const { handleSubmit } = this.props        
        
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">                    
                    <Field name="name" component={Input} 
                        label="Nome" sizes="12 4" placeholder="Informe o nome" />
                    <Field name="month" component={Input} 
                        label="Mês" sizes="12 4" placeholder="Informe o mês" />
                    <Field name="year" component={Input} 
                        label="Ano" sizes="12 4" placeholder="Informe o ano" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)