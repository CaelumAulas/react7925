import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'
export default class Modal extends Component {
    mostraModal() {
        return this.props.isAberto && 'modal--active'
    }
    fechandoModal = (infosDoEvento) => {
        const elementoClicado = infosDoEvento.target
        const isModal = elementoClicado.classList.contains('modal')
        if(isModal) {
            console.log('fecha o modal!')
            this.props.onFechandoOModal()
        }
    }
    render() {
        return (
            <div className={`modal ${ this.mostraModal() }`} onClick={this.fechandoModal}>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    isAberto: PropTypes.bool.isRequired,
    onFechandoOModal: PropTypes.func.isRequired
}


// {/* <Card
//     header={<div></div>}
//     footer="Footer"
//     >
//     conteudo da section
// </Card>


// <article>
//     <header>
//         {this.props.header}
//     </header>
//     <section>
//         {this.props.children}
//     </section>
//     <footer>
//         {this.props.footer}
//     </footer>
// </article> */}