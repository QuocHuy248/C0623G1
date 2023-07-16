// Task 1
// function MaxofArray(Array) {
//     let max = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > max) {
//             max = Array[i];
//         }
//     }
//     return max;
// }
// let a = MaxofArray([1, 2, 3, 4, 5, 6, 1, 3, 55]);
// console.log(a);

// Task 2
// function MaxofArray(Array) {
//     let max = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > max) {
//             max = Array[i];
//         }
//     }
//     let max2 = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > max2 && Array[i] < max) {
//             max2 = Array[i];
//         }
//     }
//     return max2;
// }
// let a = MaxofArray([1, 2, 3, 4, 5, 6, 1, 3, 55]);
// console.log(a);

// task 3
// function sum3FisrtOdd(array) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 != 0 && count < 3) {
//             sum += array[i];
//             count++;
//         }
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6, 8, 7];
// let a = sum3FisrtOdd(arr);
// console.log(a);

//taskt 4

// function reservearr(array) {
//     let a = array.reverse();
//     return a;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = reservearr(arr);
// console.log(b);

// task 5

// function concatab(Array1, Array2) {
//     let b = Array1.concat(Array2);
//     return b;
// }
// let array1 = [1, 2, 3, 4, 5, 6];
// array2 = [7, 8, 9, 10];
// console.log(concatab(array1, array2))

//task 6

// function sumPrime(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         let flag = true;
//         if (Array[i] < 2) {
//             flag = false;
//         }
//         for (let j = 2; j < Array[i]; j++) {
//             if (Array[i] % j == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag == true) {
//             sum += Array[i];
//         }
//     }
//     return sum;
// }
// let a = [1, 2, 4, 5, 3, 5, 6];
// console.log(sumPrime(a))

// // Bài 7
// function sochinhphuong(Array) {
//     let count = 0;
//     let sum = 0;

//     for (let i = 0; i < Array.length; i++) {
//         if (Math.sqrt(Array[i]) === parseInt(Math.sqrt(Array[i]))) {
//             count++;
//             sum += Array[i];
//         }
//     }
//     let average = sum / count;
//     return average;
// }
// let arr = [4, 6, 9, 1, 2, 3];
// console.log(sochinhphuong(arr));

//bài 8
// function cotchan(Array) {
//     let col = '';
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (j % 2 == 0) {
//                 col += Array[i][j] + ' ';
//             }
//         }
//         col += '\n';
//     }
//     return col;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(cotchan(arr));

//bài 9
// function sumborderarray(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (i == 0 || i == Array.length - 1) {
//             for (let j = 0; j < Array[i].length; j++) {
//                 sum += Array[i][j];
//             }
//         } else {
//             for (let j = 0; j < Array[i].length; j++) {
//                 if (j == 0 || j == Array[i].length - 1) {
//                     sum += Array[i][j];
//                 }
//             }
//         }
//     }
//     return sum;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(sumborderarray(arr));

//bài 10
// function positonOfFirstEven(Array) {
//     let count = 0;
//     let position = '';
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array.length; j++) {
//             if (Array[i][j] % 2 == 0) {
//                 count++;
//                 if (count == 1) {
//                     position += 'hang ' + i + ' cot ' + j;
//                 }
//             }
//         }
//     }
//     return position;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(positonOfFirstEven(arr));

//bai11

// function sumPrime(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             let flag = true;
//             if (Array[i][j] < 2) {
//                 flag = false;
//             }
//             for (let z = 2; z < Array[i][j]; z++) {
//                 if (Array[i][j] % z == 0) {
//                     flag = false;
//                     break;
//                 }
//             }
//             if (flag == true) {
//                 sum += Array[i][j];
//             }
//         }
//     }
//     return sum;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(sumPrime(arr));

//bai12.1
// function sumtopleft(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (j <= Array[i].length - i - 1) {
//                 sum += Array[i][j];
//             }
//         }
//     }
//     return sum;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(sumtopleft(arr));

// // //bai12.2

// function sumtopright(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (j >= i) {
//                 sum += Array[i][j];
//             }
//         }
//     }
//     return sum;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(sumtopright(arr));

// // //bai12.3
// function sumbotleft(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (j <= i) {
//                 sum += Array[i][j];
//             }
//         }
//     }
//     return sum;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(sumbotleft(arr));

// // // //bai12.4
// function sumbotright(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (j <= Array[i].length && j >= Array[i].length - 1 - i) {
//                 sum += Array[i][j];
//             }
//         }
//     }
//     return sum;
// }
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// console.log(sumbotright(arr));

//bai1.1
// function sumrealnumber(Array) {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > Array[i - 1]) {
//             sum += Array[i];
//         }
//     }
//     return sum;
// }
// let arr = [3.14, -2.5, 3.5, 4.5, 15];
// console.log(sumrealnumber(arr));

//bai2.1
// function averagerealnumber(Array) {
//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > 0) {
//             sum += Array[i];
//             count++;
//         }
//     }
//     let average = sum / count;
//     return average;
// }
// let arr = [3.14, -2.5, 3.5, 4.5, 15];
// console.log(averagerealnumber(arr));

// // bai3.1
// function number3(Array) {
//     let a = [];
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] % 3 == 0) {
//             a.unshift(Array[i]);
//         } else {
//             a.push(Array[i]);
//         }
//     }
//     return a;
// }
// let arr = [1, 2, 3, 5, 7, 9];
// console.log(number3(arr));

//bài 4.1

// function reverse(Array) {
//     let a = Array.reverse();
//     return a;
// }
// let arr = [1, 2, 3, 5, 7, 9];
// console.log(reverse(arr));

//bài 5.1

// var max = 7;
// var min = -4;
// function realnumber(Array) {
//     let a = '';
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] >= min && Array[i] <= max) {
//             a += Array[i] + ' ';
//         }
//     }
//     return a;
// }
// let arr = [3.14, -2.5, 3.5, 4.5, 15];
// console.log(realnumber(arr));

//bài 6.1

// function compare(Array) {
//     let a = '';
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > Math.abs(Array[i + 1])) {
//             a += ' ' + Array[i];
//         }
//     }
//     return a;
// }
// let arr = [-1, 8, -5, 4, 9, -7];
// console.log(compare(arr));

//bài 7.1

// function perfectsqr(Array) {
//     let a = '';
//     for (let i = 0; i < Array.length; i++) {
//         if (Math.sqrt(Array[i]) === parseInt(Math.sqrt(Array[i]))) {
//             a += i + ' ';
//         }
//     }
//     return a;
// }
// let arr = [1, 4, 3, 5, 9];
// console.log(perfectsqr(arr));

//bai8.1

// function number7(Array) {
//     let count = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] % 7 == 0 && Array[i] > 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr = [-7, -49, 7, 49, 1, 0];
// console.log(number7(arr));

//bài 9.1

// function count(Array) {
//     let count = 0;
//     for (let i = 0; i < Array.length; i++) {
//         let flag = true;
//         if (Array[i] < 2) {
//             flag = false;
//         }
//         for (let j = 2; j < Array[i]; j++) {
//             if (Array[i] % j == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag == true) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(count(arr));

//bài 10.1
// function count(Array) {
//     let count = 0;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] % 2 == 0 && Array[i + 1] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr = [1, 2, 3, 4, 6, 10, 8];
// console.log(count(arr));

//bai 11.1

// function check(Array) {
//     let a = 0;
//     let result;
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] == Array[Array.length - 1 - i]) {
//             a++;
//         }
//     }
//     let c = Array.length / 2;
//     if (a == parseInt(c) || a > parseInt(c)) {
//         result = 1;
//     } else {
//         result = 0;
//     }

//     return result;
// }
// let arr = [1, 2, 3, 2, 1];
// console.log(check(arr));

//bài 12.1

// function increase(Array) {
//     let count = 1;
//     let result = '';
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i + 1] > Array[i]) {
//             count++;
//         }
//     }
//     if (count == Array.length) {
//         result = 'Mảng tăng dần';
//     } else {
//         result = 'Mảng giảm dần';
//     }
//     return result;
// }
// let arr = [1, 2, 3, 4, 5, 8, 1];
// console.log(increase(arr));

//bài 13.1

// let ArrayA = [1, 2, 3, 4, 5, 6, 7, 8];
// let ArrayB = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
// function check(ArrayA, ArrayB) {
//     let count = 1;
//     let result;
//     for (let i = 1; i < ArrayA.length; i++) {
//         if (ArrayB.includes(ArrayA[i]) == true) {
//             count++;
//         }
//     }
//     console.log(count);
//     if (count == ArrayA.length) {
//         result = 'có';
//     } else {
//         result = 'không';
//     }
//     return result;
// }
// console.log(check(ArrayA, ArrayB));

//bài 14.1

// function check(Array) {
//     let result = '';
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (Array[i][j] > 0) {
//                 result = 'Có';
//             } else {
//                 result = 'Không';
//             }
//         }
//     }
//     return result;
// }
// let arr = [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, -1],
// ];
// console.log(check(arr));

//bài 15.1??????????????????
// let arr = [
//     [1, 2, 8, 4],
//     [1, 2, 7, 4],
//     [1, 2, 6, 4],
//     [1, 2, 5, 4],
// ];

// function check(number) {
//     let result = '';
//     let count = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1][number] < arr[i][number]) {
//             count++;
//         }
//     }
//     if (count == arr.length - 1) {
//         result = 'Cột giảm dần';
//     }
//     return result;
// }
// console.log(check(2));



//bài 16.1

// function check(Array) {
//     let result = '';
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (Array[i][j] % 2 != 0) {
//                 result = 'Ma trận có tồn tại số lẻ ';
//             }
//             break;
//         }
//     }
//     return result;
// }
// let arr = [
//     [1, 2, 3, 4],
//     [1, 2, 5, 4],
//     [1, 2, 6, 4],
//     [1, 2, 7, 4],
// ];
// console.log(check(arr));

// bài 17.1

function check(Array) {
    let odd = '';

    for (let i = 0; i < Array.length; i++) {
        let count = 0;
        for (let j = 0; j < Array[i].length; j++) {
            if (Array[i][j] > Array[i][j + 1]) {
                count++;
                if (count == Array[i].length - 1) {
                    odd += ' ' + i;
                }
            }
        }
    }
    return odd;
}
let arr = [
    [1, 2, 3, 4],
    [1, 2, 5, 4],
    [8, 7, 6, 4],
    [8, 7, 6, 4],
];
console.log(check(arr));

//bài 18.1
// function check(Array) {
//     let Even = '';
//     let count = 0;

//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (Array[i][j] % 2 == 0) {
//                 count++;
//                 if (count == 1) {
//                     Even = ' hàng ' + i + ' cột ' + j;
//                 }
//             }
//         }
//     }
//     return Even;
// }

// let arr = [
//     [1, 2, 3, 4],
//     [1, 2, 5, 4],
//     [1, 2, 6, 4],
//     [8, 7, 6, 4],
// ];
// console.log(check(arr));

//bài 19.1

// function checkmax(Array) {
//     let max = 0;
//     for (let i = 0; i < Array.length; i++) {
//         for (let j = 0; j < Array[i].length; j++) {
//             if (Array[i][j] % 2 == 0) {
//                 if (Array[i][j] > max) {
//                     max = Array[i][j];
//                 }
//             }
//         }
//     }
//     return max;
// }
// let arr = [
//     [1, 2, 3, 4],
//     [1, 2, 5, 4],
//     [1, 2, 6, 4],
//     [8, 7, 6, 4],
// ];
// console.log(checkmax(arr));

//bài 20.1

// function check(Array) {
//     let max = 0;
//     let result = '';
//     for (let i = 0; i < Array.length; i++) {
//         let sum = 0;

//         for (let j = 0; j < Array[i].length; j++) {
//             sum += Array[i][j];
//         }
//         if (sum > max) {
//             max = sum;
//             result = i;
//         }
//     }
//     return result;
// }
// let arr = [
//     [1, 2, 3, 4],
//     [1, 2, 5, 4],
//     [8, 8, 6, 4],
//     [1, 7, 6, 4],
// ];
// console.log(check(arr));
