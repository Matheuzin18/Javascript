function media() {
    var nota1 = Number (document.getElementById("primeira").value);
    var nota2 = Number (document.getElementById("segunda").value);
    var nota3 = Number (document.getElementById("terceira").value);
    var resultado = (nota1*2 + nota2*4 + nota3*6)/12;
    document.getElementById("resultado").textContent = `A média poderada desse aluno é ${resultado}.`;

    console.log(nota1);
    console.log(nota2);
    console.log(nota3);
    console.log(resultado);
}