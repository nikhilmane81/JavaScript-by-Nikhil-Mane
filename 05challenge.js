let temp;
let temp1;
document.getElementById("button").onclick = function () {
    temp = document.getElementById("cel").value;
    console.log(temp);
    temp = Number(temp);
    temp1 = Number(temp1);
    temp1 = ((temp * (9 / 5)) + 32);
    document.getElementById("ans").innerHTML = "Result is " + temp1;
}