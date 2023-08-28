const {stringArrayDuplicates} = require('./stringArrayDuplicates');

describe('stringArrayDuplicates', () => {
    it('should return correct value', () => {
        const testData = ["abbracadabbra","allottee","assessee"];
        const expected = ['abracadabra', 'alote', 'asese'];

        expect(stringArrayDuplicates(testData)).toEqual(expected);
    });
});