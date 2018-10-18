import React, { Component } from 'react';
import './App.css';
import cards from './cards.collectible.json';
import HSCard from './HSCard'
import {CardColumns } from 'reactstrap';
import Search from './Search';

class App extends Component {
  constructor (){
    super();
    this.state = {
      isFound: false,
      cardsFound: []
    }

    this.searchHandler = this.searchHandler.bind(this);
    this.search = this.search.bind(this);  
  }
  
  searchHandler(e){
    e.preventDefault();
    const {target} = e;

    this.search(target.username.value)
    
  }

  search(idName) {

    this.setState({
      isFound: false
    })

    if(cards.find(card=> card.name.toLowerCase().includes(idName.toLowerCase())) !== null){
      this.setState({
        isFound:true,
        cardsFound:cards.filter(card=> card.name.toLowerCase().includes(idName.toLowerCase()))
      })
    }
  }

  render() {
    return (
      
      <div className="App">
      <Search loginHandler={this.searchHandler} />
      <CardColumns>
        {this.state.cardsFound.map((card)=>
        <HSCard card={card}></HSCard>
        )}
        </CardColumns>
      </div>
    );
  }
}

export default App;
