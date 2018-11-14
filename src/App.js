import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'



class App extends Component {

    constructor() {
        super()

        this.state = {
            novoTweet: 'alo alo w brazil',
            tweets: ['tweet real da vida']
        }
        // this.adicionaTweet = this.adicionaTweet.bind(this)
    }

    adicionaTweet = (infoDosEvento) => {
        infoDosEvento.preventDefault()
        const novoTweet = this.state.novoTweet
        this.setState({
            tweets: [novoTweet, ...this.state.tweets]
        })
    }
    
    render() {
        return (
            <Fragment>
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
                                    this.state.tweets.map((tweetAtual, indice) => {
                                        return <Tweet key={indice} texto={tweetAtual} />
                                    })
                                }
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default App;
