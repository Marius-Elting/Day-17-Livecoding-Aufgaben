let curNum = 0;
document.getElementById("counterDisplay").innerHTML = curNum;

function plusOne(event) {
    curNum += 1;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

function minusOne(event) {
    curNum -= 1;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

function plusTen(event) {
    curNum += 10;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}
function minusTen(event) {
    curNum -= 10;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

function plusHun(event) {
    curNum += 100;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

function minusHun(event) {
    curNum -= 100;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

function malTwo(event) {
    curNum = curNum * 2;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

function reset(event) {
    curNum = 0;
    document.getElementById("counterDisplay").innerHTML = curNum;
    event.preventDefault();
}

