import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../Common/Template/ContentHeader'
import Content from '../Common/Template/Content'

import Tabs from '../Common/Tabs/Tabs'
import TabsHeader from '../Common/Tabs/TabsHeader'
import TabsBody from '../Common/Tabs/TabsBody'
import TabsHeaderLabel from '../Common/Tabs/TabsHeaderLabel'
import TabsBodyContent from '../Common/Tabs/TabsBodyContent'
import List from './BillingCycleList'
import Form from './BillingCycleForm'

import { selectTab, showTabs }  from "../Common/Tabs/TabsActions"
import { create } from "./BillingCycleActions"

class BillingCycle extends Component {
    
    componentDidMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {

        const { create } = this.props

        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" descricao="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabsHeaderLabel target="tabList" icon="bars">Listar</TabsHeaderLabel>
                            <TabsHeaderLabel target="tabCreate" icon="plus">Incluir</TabsHeaderLabel>
                            <TabsHeaderLabel target="tabUpdate" icon="pencil">Alterar</TabsHeaderLabel>
                            <TabsHeaderLabel target="tabDelete" icon="trash-o">Excluir</TabsHeaderLabel>
                        </TabsHeader>
                        <TabsBody>
                            <TabsBodyContent id="tabList">
                                <List />
                            </TabsBodyContent>
                            <TabsBodyContent id="tabCreate">
                                <Form onSubmit={create} />
                            </TabsBodyContent>
                            <TabsBodyContent id="tabUpdate">
                                <h1>Altera</h1>
                            </TabsBodyContent>
                            <TabsBodyContent id="tabDelete">
                                <h1>Exclui</h1>
                            </TabsBodyContent>
                        </TabsBody>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ 
    selectTab, showTabs, create 
}, dispatch)

export default connect(mapDispatchToProps, mapDispatchToProps)(BillingCycle)