const {removeInvalidTriangles} = require('./removeInvalidTriangles.js');

describe('removeInvalidTriangles', () => {
    test('should remove invalid triangles', () => {
        const triangles = [
            [1, 2, 3],
            [2, 3, 4],
            [4, 5, 6]
        ];

        const expected = [
            [2, 3, 4],
            [4, 5, 6]
        ];

        expect(removeInvalidTriangles(triangles)).toEqual(expected);
    });

    test('should return empty array', () => {
        const triangles = [
            [1, 2, 3],
            [0, 5, 7],
            [2, 2, 5]
        ]

        expect(removeInvalidTriangles(triangles)).toEqual([]);
    });
});