import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../Common/Messages/Messages'


const App = props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)

export default App