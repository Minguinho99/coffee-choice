import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myInfo = {
    name : "JeonJungyeon",
    number : 20170573,
    age : 20,
}

class MyInfo extends Component {
  render() {
      console.log[this.porps];
    return (
      <div className="App">
          <h1>{ myInfo.name }</h1>
          <h1>{ myInfo.number }</h1>
          <h1>{ myInfo.age }</h1>
      </div>
    );
  }
}

export default MyInfo;
