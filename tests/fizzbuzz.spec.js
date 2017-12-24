import { expect } from 'chai';
import { FizzBuzz } from '../src/fizzbuzz';

describe('Fizzbuzz', () => {
  it('should return `fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
    expect(FizzBuzz(9)).to.be.equal('Fizz');
  });
  it('should return `buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
    expect(FizzBuzz(20)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });
  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
  it('should return 0 when number equals to zero', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
