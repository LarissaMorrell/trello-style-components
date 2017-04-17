import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('List Container component', function() {
    it('Renders the list container component',  function() {

    	var title = 'this is my list title';
    	var cards = ['card one', 'card two', 'card three', 'card four'];

        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title}
                     cards={cards} />);
        const result = renderer.getRenderOutput();
        // console.log("result:")
        // console.log(result);
        // console.log(cards);
        // console.log(" result +++++++++++++++++++++");
        // console.log(result.props.cards);

		//check for title and check for cards props
		result.props.title.should.equal(title);
		result.props.cards.should.equal(cards);
    });
});