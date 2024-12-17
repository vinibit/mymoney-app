import React, { Component } from "react"

import ContentHeader from "../Common/Template/ContentHeader"
import Content from "../Common/Template/Content"
import ColorPanel from "../Common/Widget/ColorPanel"
import Row from "../Common/Layout/Row"

class Dashboard extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>            
                <ContentHeader title="Dashboard" descricao="Versão 1.0" />   
                <Content>
                    <Row>
                        <ColorPanel icon="bank" value="R$ 10" 
                            color="green" sizes="12 4" text="Total de Créditos" />
                        <ColorPanel icon="credit-card" value="R$ 10" 
                            color="red" sizes="12 4" text="Total de Débitos" />
                        <ColorPanel icon="money" value="R$ 0" 
                            color="blue" sizes="12 4" text="Valor Consolidado" />
                    </Row>
                </Content>                            
            </div>            
        )
    }
}

export default Dashboard