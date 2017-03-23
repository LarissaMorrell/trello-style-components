import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
    		text: "",
    		cards: []
       }
       this.onAddInputChange = this.onAddInputChange.bind(this);
       this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddInputChange(event){
        console.log(this);
        this.setState({text: event.target.value}); 
    }

    onAddSubmit(event){
        event.preventDefault();
        let cardArr = this.state.cards.slice();
        let text = this.state.text;

        cardArr.push(text);
        this.setState({cards: cardArr});
    }


   render(){
    console.log(this);
       
       return (
            <List title={this.props.title}
            cards={this.state.cards} 
            onAddInputChange={this.onAddInputChange} 
            onAddSubmit={this.onAddSubmit}/>
       );
   }

}

