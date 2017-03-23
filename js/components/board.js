import React from 'react';
import ListContainer from './list-container';

export default class Board extends React.Component {

   constructor(props) {
       super(props);
   }

   render(){
       let lists = [];
       let cards = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus at molestie turpis. Nunc quam erat, commodo eu gravida nec.", "Ut et dapibus mi. Aliquam et erat nec lorem tempor pretium."];

       for (let i = 0; i < cards.length; i++) {
           let titleStr = "This is list title " + (i + 1);
           lists.push(
               <ListContainer title={this.props.lists[i]}
                     cards={cards}/> );
       }
       console.log(lists);

       return (
           <div className="board">
               <span>{this.props.title}</span>
               {lists}
           </div>
       );
   }
}