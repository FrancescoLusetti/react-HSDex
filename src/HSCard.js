import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';

class HSCard extends Component {
    constructor(props){
        super(props);
        card=this.props.card
    }
    render(){
        let card=this.props.card;
        if(card.type=="MINION"){
            return(<Card>
                <CardImg top width="100%" src={"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/"+card.id+".png"} alt={card.name} />
                <CardBody>
                  <CardTitle>Name: {card.name}</CardTitle>
                  <CardSubtitle>Type: {card.type} - Cost: {card.cost} - Rarity: {card.rarity}</CardSubtitle>
                  <CardText>Effect: {card.text}<br/>Attack: {card.attack} - Life: {card.attack}</CardText>
                </CardBody>
              </Card>)
        }
        else{
            return(<Card>
                <CardImg top width="100%" src={"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/"+card.id+".png"} alt={card.name} />
                <CardBody>
                  <CardTitle>Name: {card.name}</CardTitle>
                  <CardSubtitle>Type: {card.type} - Cost: {card.cost} - Rarity: {card.rarity}</CardSubtitle>
                  <CardText>Effect: {card.text}/></CardText>
                </CardBody>
              </Card>)
        }  
    }
}

export default HSCard;