## Q q 6 querem fazer com React?
- Pagar boletos
- Consultoria fez o projeto em React e ca estou
- Aprender pra virar o Full Stack
    - (sonho das agencias)
- Entender o tal do redux 
- Modinhas 
    - React, Redux, API Rest, AJAX

## Por que react e não outras coisas?
- AngularJS
    - Gerenciamento do que ele mesmo fazia
- Angular 
- Vue 
- Linguagem deles
- JavaScript 

- React 
    - JavaScript
    - setState 



## Pq react é melhor?
- Prototipagem ser mais rápida
- ...


State = Um dado novo que mudou


Interface
    !headerMessages.isOpen()
    updateHeaderMessages()

    updateGlobalPopUp()
    updateChatList()

"Deixar mais declarativo a
criação de interfaces de usuario" 



## Linters de códego
- https://github.com/airbnb/javascript
- https://standardjs.com/

## Mexer com gráficos internamente na empresa
- https://www.elastic.co/
- Kibana para visualização 


## Deu problema no react
- "rm -rf node_modules && npm install && npm start"

## Funcoes do JavaScript
```js
Array.prototype.forEach = function(funcao) {
    const array = this
    for(item of array) {
        funcao(item)
    }
}
// undefined

Array.prototype.map = function(funcao) {
    const array = this
    const novoArray = []
    for(item of array) {
        novoArray.push(funcao(item))
    }
    return novoArray
} 
```

## Curiosidades da vida
- https://0.30000000000000004.com/


## Coisas sobre testes
- https://github.com/kentcdodds/react-testing-library
- https://jestjs.io/

## Pra acabar as dicussões sobre if e switch
- https://www.youtube.com/watch?v=i3LRWERf74M
- https://javascript30.com/


## Lidando com listas no react
- Se for ter itens dinamicos, usa no key um ID
    - Pra gerar ID no front usa o UUID
    - https://www.npmjs.com/package/uuid
- Se não for ter itens dinamicos, usa o próprio index do map()

## Libs uteis
- https://sweetalert2.github.io/
- https://hipsters.tech/tecnologias-no-nubank-hipsters-01/

## Refatoração
- https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_1494986073_58431735035_285514469186_aud-519888259198:pla-485032980911_c_

## Qualidade de Código
- https://www.casadocodigo.com.br/products/livro-oo-solid
- https://www.youtube.com/watch?v=Kphwg2IsJfA
- https://circleci.com/
-  https://github.com/omariosouto/cmail-back/blob/master/.circleci/config.yml

## Performance
- https://developers.google.com/web/tools/lighthouse/?hl=pt-br
- Modelo para planejar a performance do site: https://developers.google.com/web/fundamentals/performance/rail?hl=pt-br
- 14kb é o que vem na janela inicial do protocolo TCP (se seu site couber nisso vem o mais rápido o possível)

### Lidar com imagens
- https://cloudinary.com/
- https://github.com/thumbor/thumbor


## Dica pós curso
- https://javascript30.com/

```js
// Sempre que você for acessar dados externos, vc deveria criar um container component

class TweetContainer {

    componentDidMount() {
        TweetsActions.carrega()
    }
    render () {
    {
        this.state.tweets.map((tweetAtual, indice) => {
            return <TweetContainer
                key={tweetAtual._id}
                tweetAtual={tweetAtual}
                onRemove={() => {
                    this.fechaModal()
                    this.context.store.dispatch({ type: 'ADD_NOTIFICACAO', msg: 'Tweet removido com sucessinhos!' })
                }}
                handleAbreModal={() => this.abreModal(tweetAtual)}/>
        })
    }
    }
}
```