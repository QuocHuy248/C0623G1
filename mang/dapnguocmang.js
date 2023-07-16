var a = [-3, 5, 1, 3, 2, 10];

// i = 0;
// j = a.length - 1;
// while (i < j) {
//     let b = a[i];
//     a[i] = a[j];
//     a[j] = b;
//     i++;
//     j--;
// }
// console.log(a);
let value = prompt('nhập 1 số ');
for (let i = 0; i < a.length; i++) {
    if (a[i] == value) {
        console.log('giá trị ' + value + ' nằm ở vị trí thứ ' + i);
    } else alert('không tìm thấy ' + value + 'trong mảng');
}
