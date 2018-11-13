import React, { Component, Fragment } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Cabecalho>
            <NavMenu usuario="omariosouto" novaProp=""/>
          </Cabecalho>
          udhsuadshuhasdhuds
        </Fragment>
    );
  }
}

export default App;
