const capitalize = require('./capitalize');

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    const string = 'abutalha';
    const output = 'Abutalha';
    const result = capitalize(string);

    expect(result).toBe(output);
  });
});