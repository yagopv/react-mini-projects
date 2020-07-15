import { sum } from './calculator';

describe('A calculator', () => {
  it('should allow to sum values', () => {
    expect(sum(5, 7)).toBe(12);
  });
});
