import './auth.css'

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './AuthActions'

import Row from '../Common/Layout/Row'
import Grid from '../Common/Layout/Grid'
import Messages from '../Common/Messages/Messages'
import Input from '../Common/Form/InputAuth'

class Auth extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            loginMode: true
        };
    }

    changeMode() {
        
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {        
        
        const { login, signup } = this.props
        if (this.state.loginMode) {
            login(values)
        } else {
            signup(values)
        }
    }

    render() {
        
        const { loginMode } = this.state
        const { handleSubmit } = this.props

        return (
            <div className="login-box">
                <div className="login-logo">
                    <b>My</b> Money
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Faça login ou crie uma nova conta.</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="name"
                            placeholder="Nome" icon='user' hidden={loginMode} />
                        <Field component={Input} type="email" name="email"
                            placeholder="E-mail" icon='envelope' />
                        <Field component={Input} type="password" name="password"
                            placeholder="Senha" icon='lock' />
                        <Field component={Input} type="password" name="confirmPassword"
                            placeholder="Confirmar Senha" icon='lock' hidden={loginMode} />
                        <Row>
                            <Grid sizes="4">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br />
                    <a onClick={() => this.changeMode()}>
                        {
                            loginMode ? 
                            'Novo usuário? Crie uma nova conta aqui!' :
                            'Já é cadastrado? Entrar aqui!'
                        }
                    </a>
                </div>
                <Messages />
            </div>            
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login, signup }, dispatch);
}
export default connect(null, mapDispatchToProps)(
        reduxForm({ form: 'authForm' })(
            Auth
        )        
    )