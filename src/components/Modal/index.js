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



// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import './Modal.css'

// function mostraModal(props) {
//     return props.isAberto && 'modal--active'
// }

// function fechandoModal (infosDoEvento, props) {
//     const elementoClicado = infosDoEvento.target
//     const isModal = elementoClicado.classList.contains('modal')
//     if (isModal) {
//         console.log('fecha o modal!')
//         props.onFechandoOModal()
//     }
// }

// const Modal = (props) => {
//     return (
//         <div className={`modal ${mostraModal(props)}`} onClick={(event) => fechandoModal(event, props)}>
//             <div>
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// export default Modal

// Modal.propTypes = {
//     isAberto: PropTypes.bool.isRequired,
//     onFechandoOModal: PropTypes.func.isRequired
// }


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