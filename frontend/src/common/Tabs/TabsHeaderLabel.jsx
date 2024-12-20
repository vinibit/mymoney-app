import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { selectTab }  from "./TabsActions"
import Show from "../Operator/Show"

class TabsHeaderLabel extends Component {    

    render() {
        
        const { target, icon, children, tabs, selectTab } = this.props
        
        const selected = tabs.selected === target
        const visible = tabs.visibleTabs[target]

        return (
            <Show condition={visible}>
                <li className={selected ? "active" : ""}>
                    <a href="javascript:;"
                        data-toggle="tab"
                        data-target={target}                     
                        onClick={() => selectTab(target)}>                   
                        <i className={`fa fa-${icon}`}></i>&nbsp; 
                        {children}
                    </a>
                </li>
            </Show>
        )
    }
}

const mapStateToProps = state => (
    { 
        tabs: state.tabs,        
    }
)
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabsHeaderLabel)