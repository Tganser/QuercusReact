import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Input from './components/Input';
//import TextField from '@material-ui/core/TextField';

//          <h1 className="App-title"> </h1>
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <p className="App-intro">
          Input
          <Input />
        </p>
      </div>
    );
  }
}

export default App;
