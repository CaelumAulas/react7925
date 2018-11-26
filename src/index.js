import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'
import './assets/css/notificacao.css'

import './assets/css/novoTweet.css'
// import './index.css';

// ./App virou ./pages/HomePage
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';


// import { createStore } from 'redux'

function createStore(reducer) {
    let state 
    const subscribers = []

    function dispatch(acaoDisparada) { // { type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] }
        state = reducer(state, acaoDisparada)
        subscribers.forEach((funcao) => funcao())
    }

    function subscribe(funcao) {
        subscribers.push(funcao)
    }

    function getState() {
        return state
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}


function tweetsReducer(stateDaStore, acaoDisparada) {
    console.log('Alguém disparou uma ação')
    if(acaoDisparada.type === 'CARREGA_TWEETS') {
        return acaoDisparada.tweets
    }

    return []
}

window.store = createStore(tweetsReducer)


window.store.subscribe(() => {
    console.log('Faz um setState agora!')
    window.store.getState()
})
window.store.subscribe(() => {
    console.log('Faz um setState agora!')
})
window.store.subscribe(() => {
    console.log('Faz um setState agora!')
})


console.log('getState Inicial',window.store.getState())
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })
window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] })




ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

// if(window.location.href.includes('/login')) {
//     <LoginPage />
// } else {
//     <HomePage />
// }