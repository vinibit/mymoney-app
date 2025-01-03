import React from "react";
import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

const Menu = props => (
    <ul className="sidebar-menu">        
        <MenuItem path="/" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="billingCycle"
                label="Ciclos de pagamentos"
                icon="usd" />
        </MenuTree>
    </ul>
)

export default Menu