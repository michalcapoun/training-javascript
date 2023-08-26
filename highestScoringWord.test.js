const {highestScoringWord} = require('./highestScoringWord');

describe('highestScoringWord', () => {
    test('should return highest scoring word', () => {
        const str = 'hi i am Michal';
        const expected = 'michal';

        expect(highestScoringWord(str)).toBe(expected);
    });

    test('empty string', () => {
        const str = '';
        const expected = '';

        expect(highestScoringWord(str)).toBe(expected);
    });
});