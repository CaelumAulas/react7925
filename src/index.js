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
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/LoginPage';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

// if(window.location.href.includes('/login')) {
//     <LoginPage />
// } else {
//     <HomePage />
// }