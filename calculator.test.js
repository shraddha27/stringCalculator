const add = require('./calculator');

describe('StringCalculator', () => {

  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('should handle newlines between numbers', () => {
    expect(add("1\n2\n3\n4,5")).toBe(15);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed : -2");
  });

  test('should ignore numbers greater then 1000', () => {
    expect(add("2,1001,1")).toBe(3);
  });


});
