import React from 'react';
import Card from './card';

function Form(props){
    return <form>
           <input onChange={props.onAddInputChange} type="text" />
           <input onChange={props.onAddSubmit} type="submit" />
       </form>;
}



export default class List extends React.Component {

    constructor(props) {
       super(props);
       this.onAddInputChange = this.onAddInputChange.bind(this);
   }
   
    onAddInputChange(){
        console.log("onAddInputChange is working");
    }

    onAddSubmit(){
        console.log("onAddSubmit is working");
    }

   render(){
       return (
          <div>
            <div className="list">{this.props.title}</div>
              <div className="list">{this.props.cards.map(function(cardText){
                  return <Card text={cardText} />})
              }
            </div>
            <Form onAddInputChange={this.onAddInputChange} onAddSubmit={(event) => { event.preventDefault(); this.onAddSubmit;}} />
          </div>
         );    
   }
}