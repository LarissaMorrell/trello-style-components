import React from 'react';

export default class Card extends React.Component {

    constructor(props) {
       super(props);
   }

   render(){
        return (
            <div className="card">{this.props.text}</div>
        );
    }
}

//check for div
//check for containing correct text
//class