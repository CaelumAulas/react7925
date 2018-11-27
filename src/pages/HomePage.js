import React, { Component, Fragment } from 'react';
import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'
import Helmet from 'react-helmet'
import Modal from '../components/Modal';
import PropTypes from 'prop-types'
import * as TweetsActions from '../actions/TweetsActions'

class App extends Component {

    constructor() {
        super()

        this.state = {
            novoTweet: 'alo alo w brazil',
            tweets: [],
            tweetAtivo: {}
        }
        // this.adicionaTweet = this.adicionaTweet.bind(this)
    }
    
    // Métodos do Ciclo de Vida
    static contextTypes = {
        store: PropTypes.object
    }
    componentDidMount() {
        this.context.store.subscribe(() => {
            console.log('Subscribe foi executado!')
            this.setState({
                tweets: this.context.store.getState().tweets
            })
        })
        
        TweetsActions.carrega()
    }

     adicionaTweet = async (infoDosEvento) => {
        infoDosEvento.preventDefault()
        const novoTweet = this.state.novoTweet
        TweetsActions.adiciona(novoTweet)
            .then(() => {
                this.setState({ novoTweet: '' })
            })
    }

    removeTweet = (idDoTweet) => {
        TweetsActions.remove(idDoTweet)
            .then(() => {
                this.fechaModal()
                this.context.store.dispatch({ type: 'ADD_NOTIFICACAO', msg: 'Tweet removido com sucessinhos!' })
            })
    }


    abreModal = (objetoDoTweetClicado) => {
        this.setState({
            tweetAtivo: objetoDoTweetClicado
        }, () => {
            console.log('State atual', this.state)
        })   
    }

    fechaModal = () => {
        this.setState({
            tweetAtivo: {}
        })
    }
    
    render() {
        console.log('[a página está renderizando agora!!!!]', this.state)
        return (
            <Fragment>
                <Helmet>
                    <title>{`Home (${this.state.tweets.length}) - Twitelum`}</title>
                </Helmet>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet__editorArea">
                                {/* 
                                    Fazer o span receber essa classe:
                                    novoTweet__status--invalido

                                    somente quando a quantidade de caracteres
                                    for maior que 140
                                */}
                                    {/* Template String */}
                                    <span className={
                                            `novoTweet__status 
                                            ${
                                                this.state.novoTweet.length > 140
                                                ? 'novoTweet__status--invalido'
                                                : ''
                                            }`
                                    }>{this.state.novoTweet.length}/140</span>
                                    <textarea
                                        value={this.state.novoTweet}
                                        onChange={(infosDoEvento) => {
                                            const novoValor = infosDoEvento.target.value
                                            this.setState({
                                                novoTweet: novoValor
                                            })
                                            // this.state.novoTweet = novoValor
                                            // this.render()
                                        }}
                                        className="novoTweet__editor"
                                        placeholder="O que está acontecendo?"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={
                                        this.state.novoTweet.length > 140 ||
                                        this.state.novoTweet.length === 0}
                                    className="novoTweet__envia">
                                    Tweetar
                                </button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {
                                    this.state.tweets.length === 0
                                    ? 'Cargando...'
                                    : '' 
                                }

                                {
                                    this.state.tweets.map((tweetAtual, indice) => {
                                        return <Tweet
                                            key={tweetAtual._id}
                                            id={tweetAtual._id}
                                            usuario={tweetAtual.usuario}
                                            texto={tweetAtual.conteudo}
                                            likeado={tweetAtual.likeado}
                                            removivel={tweetAtual.removivel}
                                            totalLikes={tweetAtual.totalLikes}
                                            removeHandler={() => this.removeTweet(tweetAtual._id)}
                                            handleAbreModal={() => this.abreModal(tweetAtual)}/>
                                            // Fazer o setState que limpa os tweets
                                            // na função removeTweet() na classe HomePage
                                    })
                                }
                            </div>
                        </Widget>
                    </Dashboard>
                </div>

                <Modal 
                    onFechandoOModal={this.fechaModal}
                    isAberto={Boolean(this.state.tweetAtivo._id)}>
                    <Widget>
                        <Tweet  
                            id={this.state.tweetAtivo._id}
                            usuario={this.state.tweetAtivo.usuario}
                            texto={this.state.tweetAtivo.conteudo}
                            likeado={this.state.tweetAtivo.likeado}
                            removivel={this.state.tweetAtivo.removivel}
                            totalLikes={this.state.tweetAtivo.totalLikes}
                            removeHandler={() => this.removeTweet(this.state.tweetAtivo._id)}
                        />
                    </Widget>
                </Modal>
                {/*
                    ## Desafio: - Chamar o:  this.context.store.dispatch({
                        type: 'ADD_NOTIFICACAO',
                        msg: 'Alguma coisa'
                    })
                     quando remover o tweet

                 */}
                {
                    this.context.store.getState().notificacao &&
                    <div className="notificacaoMsg">
                    { this.context.store.getState().notificacao }
                    </div>
                }
            </Fragment>
        );
    }
}

export default App;
