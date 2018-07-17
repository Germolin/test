import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'; 

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <Router>
            <div>
              <div>
                <Header />
              </div>
              <div>
                <Routes />
              </div>  
            </div>        
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
