import React from 'react';
import List from './list';

export default function Board(props) {
    let lists = [];
    let cards = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus at molestie turpis. Nunc quam erat, commodo eu gravida nec.", "Ut et dapibus mi. Aliquam et erat nec lorem tempor pretium."];
    let listTitles = props.lists;
    for (let i = 0; i < cards.length; i++) {
        let titleStr = "This is list title " + (i + 1);
        lists.push( 
            <List title={listTitles[i]}
                  cards={cards}/> );
    };

    return ( 
        <div className="board">
            <span>{props.title}</span>
            {lists}
        </div>
    );
}
