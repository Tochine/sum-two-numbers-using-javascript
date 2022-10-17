const sumTwoNumbers = require('../two-sum-solution.cjs');

describe('sum two numbers', () => {
    it('should return two numbers that add up to the target', () => {
        expect(sumTwoNumbers([2, 7, 11, 15],9)).toEqual([0, 1]);
    });
})