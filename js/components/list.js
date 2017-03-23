import React from 'react';
import Card from './card';

function Form(props){
    return <form onSubmit={props.onAddSubmit}>
           <input onChange={props.onAddInputChange} type="text" />
           <input type="submit" />
       </form>;
}



export default class List extends React.Component {
    constructor(props) {
       super(props);
   }

   render(){
       return (
          <div>
            <div className="list">{this.props.title}</div>
              <div className="list">{this.props.cards.map(function(cardText){
                  return <Card text={cardText} />})
              }
            </div>
            <Form onAddInputChange={this.props.onAddInputChange} 
                  onAddSubmit={this.props.onAddSubmit} />
          </div>
         );    
   }
}