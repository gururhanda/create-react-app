import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

class App extends Component {
  name = 'Guru';
  state = {
    name : 'Prasada'
  }
  switchHandler = () => {
    console.log('swith handler called', this.name);
    // Dont do this : this.state.name = 'Rama';
    // setState it will merge the changes to existing state Object
    // and update the dom
    this.setState({name : 'Rama'});
  }

  switchHandlerNormal(){
    console.log('If not bind then this is undefined', this); 
  }
  
  render() {
    return (
      <div className="App">
        <Person age='90'>Its childredn</Person>
        <button onClick={this.switchHandler}>Funciton</button>
        <button onClick={this.switchHandlerNormal.bind(this)}>Normal funciton</button>
        <p>Name from state : {this.state.name}</p>
      </div>
    );
  }

}

export default App;
