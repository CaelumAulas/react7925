import React, { Component } from 'react'
import './cabecalho.css'

export default class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                    {/* Separar o componente NavMenu.js */}
                    { this.props.children }
                </div>
            </header>
        )
    }
}
