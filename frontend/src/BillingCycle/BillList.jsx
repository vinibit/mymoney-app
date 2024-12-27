import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Show from "../Common/Operator/Show"
import Grid from '../Common/Layout/Grid'
import Input from '../Common/Form/Input'

class BillList extends Component {      

    add(index, item = {}) {

        const { readOnly, name, arrayInsert } = this.props
        if (readOnly) return false
        arrayInsert('billingCycleForm', name, index, item)        
    }

    remove(index) {
        
        const { list, readOnly, name, arrayRemove } = this.props
        if (readOnly || list.length <= 1 ) return false
        arrayRemove('billingCycleForm', name, index)
    }

    renderRows() {

        const { readOnly, name } = this.props
        const list = this.props.list || []

        return list.map((item, index) => (
                <tr key={index}>
                    <td>
                        <Field name={`${name}[${index}].name`} component={Input} 
                            placeholder="Informe o nome" readOnly={readOnly} />
                    </td>
                    <td>
                        <Field name={`${name}[${index}].value`} component={Input} 
                            placeholder="Informe o valor" readOnly={readOnly} />
                    </td>
                    <Show condition={this.props.showStatus}>
                        <td>
                            <Field name={`${name}[${index}].status`} component={Input} 
                                placeholder="Informe o status" readOnly={readOnly} />
                        </td>                                    
                    </Show>
                    <td>
                        <button type="button" className="btn btn-success"
                            onClick={() => this.add(index + 1)}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button type="button" className="btn btn-warning"
                            onClick={() => this.add(index + 1, item)}>
                            <i className="fa fa-clone"></i>
                        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.remove(index)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            ))
    }

    render() {
        return (
            <Grid sizes={this.props.sizes}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <Show condition={this.props.showStatus}>
                                    <th>Status</th>
                                </Show>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(BillList)