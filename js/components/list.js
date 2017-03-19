import React from 'react';
import ReactDOM  from 'react-dom';
import Card from './card';

function Form(props){
	return <form>
        	<input onChange={props.onAddInputChange} type="text" />
        	<input onChange={props.onAddSubmit} type="submit" />
        </form>;
}



class List extends React.Component{

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
	        <div className="list">{props.title}</div>
	          <div className="list">{props.cards.map(function(cardText){
	              return <Card text={cardText} />})
	          }
	        </div>    //this.onAddInputChange refers to line 23 function
	        <Form onAddInputChange={this.onAddInputChange} onAddSubmit={() => {event.preventDefault(); this.onAddSubmit;}} />
	      </div>
  	    );	
    }
}