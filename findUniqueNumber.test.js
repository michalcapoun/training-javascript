const {findUniqueNumber} = require('./findUniqueNumber');

describe('findUniqueNumber', function () {
    test('should return unique value', function () {
        const input = [1, 2, 1, 1, 1];
        const expected = 2;

        expect(findUniqueNumber(input)).toEqual(expected);
    })
})