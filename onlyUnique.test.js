const {onlyUnique} = require('./onlyUnique');

describe('onlyUnique', () => {
    test('should remove duplicate numbers', () => {
        const nums = [1, 2, 3, 4, 4, 1];
        const expected = [1, 2, 3, 4];

        expect(onlyUnique(nums)).toEqual(expected);
    });
});