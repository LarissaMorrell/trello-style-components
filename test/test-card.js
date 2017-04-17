import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders the card component',  function() {

    	var cardText = "this is a card's text";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={cardText} />);
        const result = renderer.getRenderOutput();
        
        //check for containing correct text
        result.props.children.should.equal(cardText);

        //check for div
        result.type.should.equal('div');

        //check for class name
        result.props.className.should.equal('card');
    });
});