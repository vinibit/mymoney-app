import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routes from './Routes'

const App = props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)

export default App