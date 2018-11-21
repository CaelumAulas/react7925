import React, { Component } from 'react'
import Widget from '../../components/Widget'

import './loginPage.css'


class LoginPage extends Component {
    // Extrair os dados de usuário e senha
    // Via Submit, fazer um console log
    // Dos dados de login e senha do usuário

    fazLogin = (infosDoEvento) => {
        infosDoEvento.preventDefault()
        // omariosouto | vanessametonini | marcobrunobr | artdiniz
        // 123456
        console.log('Login: ', this.refs.inputLogin.value)
        console.log('Senha: ', this.refs.inputPassword.value)

        const dadosDeLogin = {
            login: this.refs.inputLogin.value,
            senha: this.refs.inputPassword.value
        }

        fetch('http://twitelum-api.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(dadosDeLogin)
        })
        .then((respostaDoServer) => {
            return respostaDoServer.json()
        })
        .then((respostaConvertida) => {
            localStorage.setItem('TOKEN', respostaConvertida.token)
            this.props.history.push('/')
        })
    }

    render() {
        console.log('render!')
        return (
            <div className="loginPage">
                <div className="container">
                    <Widget>
                        <h1 className="loginPage__title">Twitelum</h1>
                        <form className="loginPage__form" action="/" onSubmit={this.fazLogin}>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label> 
                                <input
                                    ref="inputLogin"
                                    className="loginPage__input"
                                    type="text" id="login"
                                    name="login"/>
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                <input ref="inputPassword" className="loginPage__input" type="password" id="senha" name="senha"/>
                            </div>
                            {/* <div className="loginPage__errorBox">
                                Mensagem de erro!
                            </div> */}
                            <div className="loginPage__inputWrap">
                                <button className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        )
    }
}


export default LoginPage