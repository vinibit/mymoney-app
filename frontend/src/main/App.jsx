import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../Common/Messages/Messages'

import Routes from './Routes'

const App = ({ children }) => (
    <HashRouter>
        <div className="wrapper">
            <Header />
            <Sidebar />
            <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)

export default App