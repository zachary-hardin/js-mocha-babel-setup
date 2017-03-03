import {expect} from 'chai';
import Index from '../src/index';

describe('Index', () => {
    it('should return `Hello World`', () => {
        expect("Hello World").to.equal(Index());
    });
});