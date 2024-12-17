import React, { Component } from 'react'

class Grid extends Component {

    toCssClasses(sizes) {

        const isColNumber = (val) => {
            const num = Number.parseInt(val);
            return !Number.isNaN(num) && num > 0 && num <= 12;
        }

        const values = sizes ? sizes.split(' ') : []
        const [ xsVal, smVal, mdVal, lgVal ] = values        

        let classes = ''
        if (xsVal) classes += isColNumber(xsVal) ? `col-xs-${xsVal} ` : ''
        if (smVal) classes += isColNumber(smVal) ? `col-sm-${smVal} ` : ''
        if (mdVal) classes += isColNumber(mdVal) ? `col-md-${mdVal} ` : ''
        if (lgVal) classes += isColNumber(lgVal) ? `col-lg-${lgVal} ` : ''

        return classes
    }

    render() {
        return (
            <div className={this.toCssClasses(this.props.sizes || "12 12 12 12")}>
                { this.props.children }
            </div>
        )
    }
}

export default Grid