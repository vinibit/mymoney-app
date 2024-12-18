import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { getSummary } from "./DashboardActions"

import ContentHeader from "../Common/Template/ContentHeader"
import Content from "../Common/Template/Content"
import ColorPanel from "../Common/Widget/ColorPanel"
import Row from "../Common/Layout/Row"

class Dashboard extends Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getSummary()
    }

    render() {

        const { credit, debt } = this.props.summary

        return (
            <div>            
                <ContentHeader title="Dashboard" descricao="Versão 1.0" />   
                <Content>
                    <Row>
                        <ColorPanel icon="bank"  color="green" sizes="12 4" 
                            text="Total de Créditos" value={credit} />
                        <ColorPanel icon="credit-card" color="red" sizes="12 4" 
                            text="Total de Débitos" value={debt} />
                        <ColorPanel icon="money" color="blue" sizes="12 4" 
                            text="Valor Consolidado" value={credit - debt} />
                    </Row>
                </Content>                            
            </div>            
        )
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Dashboard)