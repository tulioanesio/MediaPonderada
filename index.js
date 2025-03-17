function Calcular(){

    var A1 = parseFloat(document.getElementById("A1").value);
    var A2 = parseFloat(document.getElementById("A2").value);
    var A3 = parseFloat(document.getElementById("A3").value);
    var media = document.getElementById("media")

    if(isNaN(A1) || isNaN(A2) || isNaN(A3)){
        media = media.textContent = "Digite suas médias corretamente."
    }else if(A1 < 0 || A2 < 0 || A3 < 0){
        media = media.textContent = "Seu numero é menor que zero."
    }else if(A1 > 10 || A2 > 10 || A3 > 10){
        media = media.textContent = "10 é o numero maximo permitido."
    }else{
    A1 = A1 * 3
    A2 = A2 * 3
    A3 = A3 * 4

    resultado = (A1 + A2 + A3) / 10

    media = media.textContent = "Sua média é " + (resultado.toFixed(1))
    }
}