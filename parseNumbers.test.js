const {parseNumbers} = require('./parseNumbers');

describe('parseNumbers', function () {
    test('should return correct output', function () {
        const input = "1,3-5,7";
        const expected = [1,3,4,5,7];

        expect(parseNumbers(input)).toEqual(expected);
    })

    test('should return string wrong input type', function () {
        const input = [1,3-5,7];
        const expected = "Invalid argument type: object";

        expect(parseNumbers(input)).toEqual(expected);
    })
})