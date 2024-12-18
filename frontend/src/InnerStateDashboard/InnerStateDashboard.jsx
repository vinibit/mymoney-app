import React, { Component } from "react"
import axios from "axios"

import ContentHeader from "../Common/Template/ContentHeader"
import Content from "../Common/Template/Content"
import ColorPanel from "../Common/Widget/ColorPanel"
import Row from "../Common/Layout/Row"

const BASE_URL = 'http://localhost:3003/api'

const InnerStateDashboard = props => {
    
    const [summary, setSummary] = useState({ credit: 0, debt: 0 })
    const { credit, debt } = summary

    const getSummary = () => {
        axios.get(`${BASE_URL}/billingCycle/summary`)
            .then(res => setSummary(res.data))
    }

    const cachedSummary = useCallback(() => { getSummary() }, [])
    useEffect(() => { cachedSummary() }, [])

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

export default InnerStateDashboard