import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Banner from './components/Banner';
import Header from './components/Header';
import jsonData from './shared/data.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: []}
    this.vote = this.vote.bind(this);
  }
  componentDidMount(){
    const cached = localStorage.getItem('test-data');
    if (cached) {
      var data = JSON.parse(cached);
      this.setState({ data: data });
    }else {
      localStorage.setItem('test-data', JSON.stringify(jsonData));
      this.setState({ data: jsonData });
    }
  }
  vote(card,type){
    var data =  this.state.data.slice();
    data.forEach((item) => {
      if(item.name === card.name){
        item[type]++;
      }
    })
    localStorage.setItem('test-data', JSON.stringify(data));
    this.setState({ data: data });
  }
  getOldRots(){
    const filtered = this.state.data.filter((item) => {
      return item.current === false; 
    });
    return filtered;
  }
  getCurrentRot(){
    const filtered = this.state.data.filter((item) => {
      return item.current === true; 
    });
    const item = filtered[0];
    console.log('hehe',item)
    return filtered;
  }
  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <Header />
          <Banner card={this.getCurrentRot()}/>
          <CardList onVote={this.vote} cards={this.getOldRots()} />
        </div>
      </div>
    );
  }
}

export default App;
