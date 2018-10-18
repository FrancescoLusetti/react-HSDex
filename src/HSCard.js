import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';

class HSCard extends Component {
    render(){
        let card=this.props.card;
        switch (card.type){
            case "MINION": 
            return(<Card>
                <CardImg top width="100%" src={"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/"+card.id+".png"} alt={card.name} />
                <CardBody>
                  <CardTitle>Name: {card.name}</CardTitle>
                  <CardSubtitle>Type: Minion - Cost: {card.cost} - Rarity: {card.rarity}</CardSubtitle>
                  <CardText>{card.text!=="" ? null : <p>Effect: {card.text}</p>}
                  <br/>Attack: {card.attack} - Life: {card.attack}</CardText>
                </CardBody>
              </Card>);
              break;
              case "HERO" : 
              return(<Card>
                <CardImg top width="100%" src={"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/"+card.id+".png"} alt={card.name} />
                <CardBody>
                  <CardTitle>Name: {card.name}</CardTitle>
                  <CardSubtitle>Type: Hero</CardSubtitle>
                  <CardText>Effect: {card.flavor}</CardText>
                </CardBody>
              </Card>);
              break;
              default:
              return(<Card>
                <CardImg top width="100%" src={"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/"+card.id+".png"} alt={card.name} />
                <CardBody>
                  <CardTitle>Name: {card.name}</CardTitle>
                  <CardSubtitle>Type: {card.type} - Cost: {card.cost} - Rarity: {card.rarity}</CardSubtitle>
                  <CardText>Effect: {card.text}</CardText>
                </CardBody>
              </Card>);
              break;
        }
    }
}

export default HSCard;