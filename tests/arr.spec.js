const { expect } = require('chai');

describe('Testes com array', () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('should be an array', () => {
    expect(arr).to.be.an('array');
  });

  it ('should have a size of 4 when pushed another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should not contain the value 3 in the array after pop', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when popped 3 from the array', () => {
    const popped = arr.pop() === 3;
    expect(popped).to.be.true;
  });

  it('should have a size of 2 when popped another value of the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
