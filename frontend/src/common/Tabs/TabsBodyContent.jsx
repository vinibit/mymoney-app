import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Show from "../Operator/Show"

class TabsBodyContent extends Component {
    render() {
        
        const { id, children, tabs } = this.props
        
        const selected = tabs.selected === id
        const visible = tabs.visibleTabs[id]

        return (
            <Show condition={visible}>
                <div id={id} 
                    className={`tab-pane ${selected ? "active" : ""}`}>
                    {children}
                </div>
            </Show>            
        )
    }
}

const mapStateToProps = state => ({ tabs: state.tabs })
//const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps)(TabsBodyContent)