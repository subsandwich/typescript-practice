import {filter, map, reduce} from './fmr';
import {expect, test} from '@jest/globals';


const numArr: number[] = [1, 2, 3, 4, 5];

test('filter', () => {
    const evens: number[] = filter((val: number) => val % 2 === 0, numArr);
    
    expect(evens.length).toBe(2);
    expect(evens).toStrictEqual([2, 4]);
});

test('map', () => {
    expect(map((val: number) => val * 2, numArr)).toStrictEqual([2, 4, 6, 8, 10]);
});

test ('reduce', () => {
    expect(reduce((val: number, total: number) => val + total, numArr )).toBe(15);
});