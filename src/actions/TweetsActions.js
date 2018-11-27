import store from '../store'

export function carrega() {
    fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
    .then((respostaDoServer) => respostaDoServer.json())
    .then((tweetsQueVieramDoServer) => {
        store.dispatch({
            type: 'CARREGA_TWEETS',
            tweets: tweetsQueVieramDoServer
        })
    })
}

export async function adiciona (novoTweet) {
    const respostaDoServer =  await fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ conteudo: novoTweet })
        })
    
    const tweetQueVeioDoServer = await respostaDoServer.json()

    store.dispatch({
        type: 'ADD_TWEET',
        tweet: tweetQueVeioDoServer
    })

    return tweetQueVeioDoServer
}


export function remove(idDoTweet) {
    return fetch(`http://twitelum-api.herokuapp.com/tweets/${idDoTweet}?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
        method: 'DELETE',
    })
    .then((res) => res.json())
    .then((respostaConvertida) => {
        store.dispatch({
            type: 'REMOVE_TWEET',
            idDoTweet: idDoTweet
        })
        
    })
}

// URL Variável
// Container Component
// Lidar com mais reducers na store 
    // Sistema notificação global
