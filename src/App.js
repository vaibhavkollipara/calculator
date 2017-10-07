import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

class App extends Component {

  constructor(){
    super();
    this.state = {
      ans : 0,
      text : '0'
    }
  }

  render() {
    return (
      <div className="App">
      <Display text={this.state.text}/>
      <div className="input-container">

        <div className="input-row">
          <Button tag={7}/>
          <Button tag={8}/>
          <Button tag={9}/>
          <Button tag={'/'}/>
        </div>
        <div className="input-row">
          <Button tag={4}/>
          <Button tag={5}/>
          <Button tag={6}/>
          <Button tag={'*'}/>
        </div>

        <div className="input-row">
          <Button tag={1}/>
          <Button tag={2}/>
          <Button tag={3}/>
          <Button tag={'-'}/>
        </div>

        <div className="input-row">
          <Button tag={0}/>
          <Button tag={'C'}/>
          <Button tag={'='}/>
          <Button tag={'+'}/>
        </div>
        <div className="footer">
        Developed by Vaibhav Kollipara
        </div>
      </div>
      </div>
    );
  }
}

export default App;
