let arr = [
    [1, 2, 3, 4],
    [1, 2, 5, 4],
    [1, 2, 6, 4],
    [1, 2, 7, 4],
];
// let b = 2;
// function check(b) {
let result = '';
let count = 0;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1][2] > arr[i][2]) {
        count++;
    }
    console.log(count);
}

// }
// return result;

// let e = check(2);
// console.log(e);
