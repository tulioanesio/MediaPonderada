function Calculate() {
    var A1 = parseFloat(document.getElementById("A1").value);
    var A2 = parseFloat(document.getElementById("A2").value);
    var A3 = parseFloat(document.getElementById("A3").value);
    var average = document.getElementById("average");
    var approval = document.getElementById("approval");

    if (isNaN(A1) || isNaN(A2) || isNaN(A3)) {
        average.textContent = "Please enter your grades correctly.";
    } else if (A1 < 0 || A2 < 0 || A3 < 0) {
        average.textContent = "Your number is less than zero.";
    } else if (A1 > 10 || A2 > 10 || A3 > 10) {
        average.textContent = "10 is the maximum allowed number.";
    } else {
        A1 = A1 * 3;
        A2 = A2 * 3;
        A3 = A3 * 4;

        var result = (A1 + A2 + A3) / 10;
        average.textContent = "Your average is " + result.toFixed(1);

    if (result >= 7){
        approval.style.color = "rgb(30, 196, 113)";
        approval.style.fontWeight = "bold";
        approval.textContent = "You are aproved!"
    }
    else{
        approval.style.color = "rgb(206, 58, 21)";
        approval.style.fontWeight = "bold";
        approval.textContent = "You are reproved!"
    }

    }
}