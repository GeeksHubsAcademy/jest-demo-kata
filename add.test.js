const add = require('./add.js');

describe('basic test', () => {
  test('it sums integers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
  test('it sums big integers', () => {
    const result = add(1000, 2000);
    expect(result).toBe(3000);
  });
  test('it sums negative integers', () => {
    const result = add(1000, -2000);
    expect(result).toBe(-1000);
  });
  test('it sums 0', () => {
    const random = Math.random();
    const result = add(random, 0);

    expect(result).toBe(random);
  });
});

describe('decimals test', () => {
  test('it sums decimals', () => {
    const result = add(10.5, 0.5);
    expect(result).toBe(11);
  });
  test('it sums decimals', () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3, 6);
  });
  test('it sums decimals', () => {
    const result = add(-0.1, -0.2);
    expect(result).toBeCloseTo(-0.3, 6);
  });
});

describe('not number inputs', () => {
  test('it sums numbers as strings', () => {
    const result = add('10.5', 0.5);
    expect(result).toBe(11);
  });

  test('it returns NaN', () => {
    const result = add('hola 10.5', 0.5);
    expect(result).toBe(NaN);
  });
  test('booleans 1', () => {
    const result = add(true, 0);
    expect(result).toBe(1);
  });
  test('booleans 2', () => {
    const result = add(false, 0);
    expect(result).toBe(0);
  });
});
