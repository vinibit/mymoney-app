import React from "react"

const TabsHeader = ({ children }) => {
    return (
        <div className="nav nav-tabs" role="tablist">
            {children}
        </div>
    )
}

export default TabsHeader