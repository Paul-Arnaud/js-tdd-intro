const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
      });
    it('transforms javaScript correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
      });
    it('transforms javaScript is cool correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('javaScript is cool'), 'JavaScript Is Cool');
      });
      it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
      });
    
      it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
      });
    });