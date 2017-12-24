import { expect } from 'chai';
import { sum, sub, multi, div } from '../src/calc';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exists method "sum"', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exists method "sub"', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exists method "multi"', () => {
      expect(multi).to.exist;
      expect(multi).to.be.a('function');
    });
    it('should exists method "div"', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });
  describe('Sum', () => {
    it('should return 4 when "sum(2,2)"', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe('Sub', () => {
    it('should return 0 when "sub(2,2)"', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
    it('should return -2 when "sub(2,4)"', () => {
      expect(sub(2, 4)).to.be.equal(-2);
    });
  });
  describe('Multi', () => {
    it('should return 8 when "multi(2,4)"', () => {
      expect(multi(2, 4)).to.be.equal(8);
    });
  });
  describe('Div', () => {
    it('should return 1 when "div(2,2)"', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
    it('should return "cant divide by zero" when dividing by zero', () => {
      expect(div(2, 0)).to.be.equal('cant divide by zero');
    });
  });
});
