import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Display />
      <Input />
      </div>
    );
  }
}

export default App;
