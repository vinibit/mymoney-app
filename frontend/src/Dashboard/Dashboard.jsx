import React, { Component } from "react"

import ContentHeader from "../Common/Template/ContentHeader"
import Content from "../Common/Template/Content"

class Dashboard extends Component {
    
    render() {
        return (
            <div>            
                <ContentHeader title="Dashboard" descricao="Versão 1.0" />   
                <Content>
                    <p>Dashboard content</p>
                </Content>                            
            </div>            
        )
    }
}

export default Dashboard