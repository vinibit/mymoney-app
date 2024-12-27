import React from 'react'

const Input = ({ input, type, placeholder, readOnly }) => (
    <input { ...input } 
        type={type}
        className="form-control" 
        placeholder={placeholder} 
        readOnly={readOnly} />
)

export default Input