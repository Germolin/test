import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-sm-9 d-flex justify-content-between'>
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
