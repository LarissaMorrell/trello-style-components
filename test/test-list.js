import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
    it('Renders the list component',  function() {

    	var title = 'this is my list title';
    	var cards = ['card one', 'card two', 'card three', 'card four'];

        const renderer = TestUtils.createRenderer();
        renderer.render(<List title={title}
            cards={cards} />);
        const result = renderer.getRenderOutput();

        //test for title within nested divs
        var listTitle = result.props.children[0].props.children;
        listTitle.should.equal(title);

        //check for the right num of cards
        var cardComponents = result.props.children[1].props.children;
        cardComponents.length.should.equal(cards.length);
    });
});