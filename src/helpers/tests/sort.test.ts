import { secondarySort } from '../sort';

describe('helpers/sort', () => {
    describe('secondarySort', () => {
        it('sorts according to both args', () => {
            const mockArr = [{
                first: 'a',
                second: 'c'
            },
            {
                first: 'b',
                second: 'a'
            }, {
                first: 'c',
                second: 'b'
            }, {
                first: 'a',
                second: 'c'
            }, {
                first: 'b',
                second: 'b'
            }, {
                first: 'c',
                second: 'a'
            }];

            const expected = [{
                first: 'a',
                second: 'c'
            }, {
                first: 'a',
                second: 'c'
            },
            {
                first: 'b',
                second: 'a'
            }, {
                first: 'b',
                second: 'b'
            }, {
                first: 'c',
                second: 'a'
            }, {
                first: 'c',
                second: 'b'
            }];

            const result = mockArr.sort(secondarySort('first', 'second'));
            expect(result).toEqual(expected);
        });
    }) ;
});
