import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Espelho from './Espelho';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.alterarTexto = this.alterarTexto.bind(this);
  }

  alterarTexto(evento) {
    this.setState({
      input: evento.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <p>Texto: </p><input value={this.state.input} onChange={this.alterarTexto} />
        <Espelho texto={this.state.input} />
      </div>
    );
  }
}

export default App;
