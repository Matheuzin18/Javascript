function imc() {
    var quilos = Number (document.getElementById("peso").value);
    var metros = Number (document.getElementById("altura").value);
    var resultado = quilos/(metros*metros);
    resultado = resultado.toFixed(1);

    console.log(quilos);
    console.log(metros);
    console.log(resultado);

    document.getElementById("resultado").textContent = `Seu IMC é ${resultado} .`;
}