import React, { Component } from 'react'
import './tweet.css'
import PropTypes from 'prop-types'

class Tweet extends Component {

    constructor(props) {
        super()
    }

    static contextTypes = {
        store: PropTypes.object
    }

    like = () => {
    // const likeado = this.state.likeado
    // const totalLikes = this.state.totalLikes
    this.context.store.dispatch({
        type: 'LIKE',
        idDoTweet: this.props.id
    })

        // const { likeado, totalLikes } = this.state // Destructuring
        // this.setState({
        //     likeado: !likeado,
        //     totalLikes: likeado ? totalLikes - 1 : totalLikes + 1 
        // })
        // const idDoTweet = this.props.id
        
        // fetch(`http://twitelum-api.herokuapp.com/tweets/${idDoTweet}/like?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
        //     method: 'POST'
        // })
        // .then((res) => {
        //     return res.json() 
        // })
        // .then((respostaConvertida) => {
        //     console.log(respostaConvertida) 
        // })
    }

    render() {
        return (
            <article className="tweet">
                <div className="tweet__cabecalho"  onClick={this.props.handleAbreModal}>
                    <img className="tweet__fotoUsuario" src={this.props.usuario.foto} alt="" />
                    <span className="tweet__nomeUsuario">{this.props.usuario.nome}</span>
                    <a href="/"><span className="tweet__userName">@{this.props.usuario.login}</span></a>
                </div>
                <p className="tweet__conteudo"  onClick={this.props.handleAbreModal}>
                    {this.props.texto}
                </p>
                <footer className="tweet__footer">
                    <button className="btn btn--clean" onClick={this.like}>
                        <svg className={`
                            icon icon--small iconHeart
                                ${this.props.likeado // era state, vira props!
                                ? 'iconHeart--active'
                                : ''
                            }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                            <defs>
                                <clipPath id="a">
                                    <path d="M0 38h38V0H0v38z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                                <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241"></path>
                            </g>
                        </svg>
                        {this.props.totalLikes}
                    </button>
                        
                    {
                        this.props.removivel &&
                        <button className="btn btn--blue btn--remove" onClick={this.props.removeHandler}>
                            X
                        </button>
                    }
                </footer>
            </article>
        )
    }

    static defaultProps = {
        usuario: {},
        totalLikes: 0,
        likeado: false,
        id: '',
        texto: ''
    }
}


Tweet.propTypes = {
    id: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    usuario: PropTypes.shape({
        foto: PropTypes.string,
        nome: PropTypes.string,
        login: PropTypes.string
    }).isRequired,
    likeado: PropTypes.bool,
    removivel: PropTypes.bool,
    totalLikes: PropTypes.number,
    removeHandler: PropTypes.func
}

export default Tweet