import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

class App extends Component {

  constructor(){
    super();
    this.state = {
      text : '0'
    }
  }

  appendText(value){
    if(this.state.text==='0'){
      this.setState({
        text :value
      });
    }else{
      this.setState({
        text : this.state.text+value
      });
    }
  }

  clearText(){
    this.setState({
      text : '0'
    });
  }

  backspace(){
    if(this.state.text!=='0'){
      if(this.state.text.length===1){
        this.setState({
          text : '0'
        });
      }else{
        this.setState({
          text: this.state.text.substring(0,this.state.text.length-1)
        });
      }
    }
  }

  calculate(){
    console.log(`Calculating ${this.state.text}`);
    try{
      this.setState({
        text : ''+eval(this.state.text)+''
      });
    }catch(e){
      this.setState({
        text : 'Error ! Clear everything...'
      });
    }
  }

  render() {
    return (
      <div className="App">
      <Display text={this.state.text}/>
      <div className="input-container">

        <div className="input-row">
          <Button tag={7} task={()=>{this.appendText('7');}}/>
          <Button tag={8} task={()=>{this.appendText('8');}}/>
          <Button tag={9} task={()=>{this.appendText('9');}}/>
          <Button tag={'/'} task={()=>{this.appendText('/');}}/>
        </div>
        <div className="input-row">
          <Button tag={4} task={()=>{this.appendText('4');}}/>
          <Button tag={5} task={()=>{this.appendText('5');}}/>
          <Button tag={6} task={()=>{this.appendText('6');}}/>
          <Button tag={'*'} task={()=>{this.appendText('*');}}/>
        </div>

        <div className="input-row">
          <Button tag={1} task={()=>{this.appendText('1');}}/>
          <Button tag={2} task={()=>{this.appendText('2');}}/>
          <Button tag={3} task={()=>{this.appendText('3');}}/>
          <Button tag={'-'} task={()=>{this.appendText('-');}}/>
        </div>

        <div className="input-row">
          <Button tag={0} task={()=>{this.appendText('0');}}/>
          <Button tag={'C'} task={()=>{this.backspace();}}/>
          <Button tag={'='} task={()=>{this.calculate('=');}}/>
          <Button tag={'+'} task={()=>{this.appendText('+');}}/>
        </div>
        <div className="input-row">
          <Button tag={'Clear'} task={()=>{this.clearText();}}/>
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
