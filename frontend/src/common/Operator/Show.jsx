import React from 'react'

const Show = ({ condition, children }) => {
    return !condition ? false : children
};

export default Show