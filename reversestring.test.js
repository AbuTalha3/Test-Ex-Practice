const reverseString = require('./reverseString');

describe('return a reverse string', () => {
  it('should return the reversed input string', () => {
    let word = "hello world";
    let reversed = "dlrow olleh";
    let result = reverseString(word);

    expect(result).toBe(reversed);
  });
});
