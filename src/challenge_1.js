// Find all disappeared numbers in array
// Given an array of integers where 1 <= a[i] <= n (n size of array), some elements appear twice
// and others appear once.

// find all the elements of [1, n] inclusive that do not appear in this array


// Solution A
// Brute force

let list_1 = [1, 2, 3, 4, 5, 8, 10];

const findDisappearedNumbers = (numbers) => {
    let allNumbers = [...Array(11).keys()].slice(1);
    return allNumbers.filter((number) => !numbers.includes(number));
}

let missingNumbers = findDisappearedNumbers(list_1);

console.log(missingNumbers);

// Solution B
// letsCode example

const findDisappearedNumbersV2 = (numbers) => {
    let missing = [];
    let seen = new Array(numbers.length).fill(false);
    for (let i = 0; i < numbers.length; i++) {
        seen[numbers[i] - 1] = true;
    }

    for (let k = 0; k < seen.length; k++) {
        if (!seen[k]) {
            missing.push(k+1);
        }
    }
    return missing;
}

let newMissingNumbers = findDisappearedNumbersV2(list_1);
console.log(newMissingNumbers);