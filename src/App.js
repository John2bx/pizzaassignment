import React, { Component } from 'react';
import Pizzaconfigurator from './components/Pizzaconfigurator'
import ClientSelection from './components/ClientSelection'


import './App.css';

class App extends Component {
  render() {
    return (<div>
  <h1 className="pizzaTitle"> CODAISSEUR PIZZA STORE</h1>
  <Pizzaconfigurator />

  </div>
    );
  }
}

export default App;
