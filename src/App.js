import React, { Component } from 'react';
import './App.css';
import cards from './cards.collectible.json';
import HSCard from './HSCard'
import {CardColumns } from 'reactstrap';

class App extends Component {

  state = {
    cards : [],
    cardsPic: []
  }

  render() {
    return (
      
      <div className="container">
      <CardColumns>
        {cards.map((card)=>
        <HSCard card={card}></HSCard>
        )}
        </CardColumns>
      </div>
    );
  }
}

export default App;
