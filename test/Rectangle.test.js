const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('is a function accepting two argument', () => {
        assert.strictEqual(typeof Rectangle, 'function');
        assert.strictEqual(Rectangle.length, 2);
      });
    it('isSquare() sends true if a === b ans false if a!== b', () => {
        let rect = new Rectangle(2,2)
        let rect2 = new Rectangle(2,3)
        assert.strictEqual(rect.isSquare(), true);
        assert.strictEqual(rect2.isSquare(), false);
      });
      it('getArea() return the correct value for the rectangle area', () => {
        let rect = new Rectangle(13,7)
        assert.strictEqual(rect.getArea(), 91);
      });
      it('getPerimeter() works correctly', () => {
        let rect = new Rectangle(13,7)
        assert.strictEqual(rect.getPerimeter(), 40);
      });
   
    });