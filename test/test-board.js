import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
    it('Renders the board component',  function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title="My Board Name" lists={["One", "Two"]} />);
        const result = renderer.getRenderOutput();

        result.props.className.should.equal('board');
    });
});