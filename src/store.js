import { createStore } from 'redux'
function tweetsReducer(stateDaStore = [], acaoDisparada) {
    console.log('Alguém disparou uma ação')
    if(acaoDisparada.type === 'CARREGA_TWEETS') {
        return acaoDisparada.tweets
    }
    return stateDaStore
}

window.store = createStore(tweetsReducer)





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
