// Container: Classe
import React, { Component } from 'react'
import Tweet from './';
import * as TweetsActions from '../../actions/TweetsActions' 

class TweetContainer extends Component {

    remove = () => {
        const idDoTweet = this.props.tweetAtual._id
        TweetsActions.remove(idDoTweet)
            .then(() => {
                this.props.onRemove(idDoTweet)
            })
            .catch((err) => {
                this.props.onRemoveError(err)
            })
    }

    render() {
        const tweetAtual = this.props.tweetAtual
        return <Tweet
            id={tweetAtual._id}
            usuario={tweetAtual.usuario}
            texto={tweetAtual.conteudo}
            likeado={tweetAtual.likeado}
            removivel={tweetAtual.removivel}
            totalLikes={tweetAtual.totalLikes}
            removeHandler={this.remove}
        />
    }
}

export default TweetContainer

