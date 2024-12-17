import React from 'react'

import Grid from '../Layout/Grid'

const ColorPanel = ({ value, color, sizes, text, icon }) => (
    <Grid sizes={sizes}>
        <div className={`small-box bg-${color}`}>
            <div className="inner">
                <h3>{value}</h3>
                <p>{text}</p>
            </div>
            <div className="icon">
                <i className={`fa fa-${icon}`}></i>
            </div>
        </div>
    </Grid>
)

export default ColorPanel
