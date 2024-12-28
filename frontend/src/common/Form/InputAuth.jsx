import React from 'react'
import Show from '../Operator/Show'

const InputAuth = ({ input, type, icon, label, hidden, readOnly }) => (
    <Show condition={!hidden}>
        <div className="form-group has-feedback">            
            <input {...input} 
                placeholder={label} 
                type={type}
                readOnly={readOnly} 
                className="form-control" />
            <span className={`form-control-feedback glyphicon glyphicon-${icon}`}></span>
        </div>
    </Show>
)

export default InputAuth