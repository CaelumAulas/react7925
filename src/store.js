import { createStore, combineReducers } from 'redux'

function tweetsReducer(stateDaStore = [], acaoDisparada) {
    if(acaoDisparada.type === 'CARREGA_TWEETS') {
        return acaoDisparada.tweets
    }
    
    if(acaoDisparada.type === 'ADD_TWEET') {
        return [acaoDisparada.tweet, ...stateDaStore]
    }

    if(acaoDisparada.type === 'REMOVE_TWEET') {
        const idDoTweet = acaoDisparada.idDoTweet
        const listaAtualizada = stateDaStore.filter((tweetAtual) => {
            return tweetAtual._id !== idDoTweet
        })
        
        return listaAtualizada
    }

    return stateDaStore
}

function notificacaoReducer(state = '', action = {}) {
    if(action.type === 'ADD_NOTIFICACAO') {
        return action.msg
    }
    if(action.type === 'REMOVE_NOTIFICACAO') {
        return ''
    }
    return state
}
const store = createStore(combineReducers({
    tweets: tweetsReducer,
    notificacao: notificacaoReducer
})) 

window.store = store
export default store




// function createStore(reducer) {
//     let state 
//     const subscribers = []

//     function dispatch(acaoDisparada) { // { type: 'CARREGA_TWEETS', tweets: ['teste', 'oi'] }
//         state = reducer(state, acaoDisparada)
//         subscribers.forEach((funcao) => funcao())
//     }

//     function subscribe(funcao) {
//         subscribers.push(funcao)
//     }

//     function getState() {
//         return state
//     }

//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }
