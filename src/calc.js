const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => (b === 0 ? 'cant divide by zero' : a / b);
export { sum, sub, multi, div };
