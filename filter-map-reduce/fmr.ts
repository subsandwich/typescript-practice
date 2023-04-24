

export function filter<T>(filterFunction: (val: T) => boolean,  arr: T[]): T[] {
    const filteredArr: T[] = [];
    for(let val of arr) {
        if (filterFunction(val)) {
            filteredArr.push(val);
        }
    }
    return filteredArr;
}

export function map<T, U>(mapFunction: (val: T) => U, arr: T[]): U[] {
    const mappedArr: U[] = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        mappedArr[i] = mapFunction(arr[i]);
    }

    return mappedArr;
}

export function reduce<T>(reduceFunction: (val: T, total: T) => T, arr: T[]): T | null {
    if (arr.length === 0){
        return null;
    }

    let final: T = arr[0];

    for (let i = 1; i < arr.length; i++) {
        final = reduceFunction(arr[i], final);
    }

    return final;
}