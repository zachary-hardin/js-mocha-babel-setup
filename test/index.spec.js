import {expect} from 'chai';
import Index from '../src/index';

// Test
describe('Index', () => {
    it('should return `Hello World`', () => {
        expect("Hello World").to.equal(Index());
    });
});