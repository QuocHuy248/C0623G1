function click1() {
    var x = +document.getElementById('o1').value;
    y = +document.getElementById('o2').value;
    var z = x + y;
    document.getElementById('Result').innerHTML = 'Ket qua la ' + z;
}
function click2() {
    var x = +document.getElementById('o1').value;
    y = +document.getElementById('o2').value;
    var z = x - y;
    document.getElementById('Result').innerHTML = 'Ket qua la ' + z;
}
function click3() {
    var x = +document.getElementById('o1').value;
    y = +document.getElementById('o2').value;
    var z = x * y;
    document.getElementById('Result').innerHTML = 'Ket qua la ' + z;
}
function click4() {
    var x = +document.getElementById('o1').value;
    y = +document.getElementById('o2').value;
    var z = x / y;
    document.getElementById('Result').innerHTML = 'Ket qua la  ' + z;
}
