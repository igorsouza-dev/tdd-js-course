const { expect } = require('chai');
const calc = require('../src/calc.js');
describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exists the calc lib', () => {
      expect(calc).to.exist;
    });
    it('should exists method "sum"', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });
    it('should exists method "sub"', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
    it('should exists method "multi"', () => {
      expect(calc.multi).to.exist;
      expect(calc.multi).to.be.a('function');
    });
    it('should exists method "div"', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });
});
