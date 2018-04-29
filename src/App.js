import React, { Component } from 'react';
import Pizzaconfigurator from './components/Pizzaconfigurator'
import ClientSelection from './components/ClientSelection'


import './App.css';

class App extends Component {
  render() {
    return (<div>
  <h1>Pizza Store</h1>
  <Pizzaconfigurator />
  <ClientSelection />
  </div>
    );
  }
}

export default App;
