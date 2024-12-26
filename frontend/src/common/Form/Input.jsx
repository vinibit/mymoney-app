import React from "react"
import Grid from "../Layout/Grid"

const Input = ({ input, type, sizes, name, label, placeholder, readOnly }) => (
    <Grid sizes={sizes}>
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input { ...input } 
                type={type}
                className="form-control" 
                placeholder={placeholder} 
                readOnly={readOnly} />
        </div>
    </Grid>
)

export default Input