import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../Auth/AuthActions';

class Navbar extends Component {
    
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { user, logout } = this.props;
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`} 
                            onMouseLeave={() => this.changeOpen()}>
                        <a href="javascript:;"
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toogle"
                            onClick={() => this.changeOpen()}
                            data-toggle="dropdown">
                                <i className="fa fa-user"></i>
                                <span className="hidden-xs">{user.name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="https://github.com/vinibit.png" 
                                    alt="User Image" className="img-circle" />
                                <p>{user.name}<small>{user.email}</small></p>
                            </li>
                            <li className="user-footer"> 
                                <div className="pull-right">
                                    <a href="javascript:;" 
                                        className="btn btn-default btn-flat"
                                        onClick={logout}>Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>                    
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);