/**
 * unit test for the hello component
 */

 import {mount} from 'enzyme';
 import Hello from './Hello';
import React from 'react';
import {expect} from 'chai';


describe('group of test', () => {
    let helloReactWrapper;

    beforeEach(() => {
        const div = document.createElement('div');
        helloReactWrapper = mount(<Hello />, {attachTo: div});
        document.body.appendChild(div);
    });

    afterEach(() => {

    })

    // before(() => {

    // });

    // after(() => {

    // })

    it.only('hello world is presented', () => {
        expect(helloReactWrapper.find('h1').text()).to.equal('hello world')
    })

    it('another test', () => {

    })
})