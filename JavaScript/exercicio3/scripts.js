function media() {
    var nota1 = Number (document.getElementById("primeiraNota").value);
    var nota2 = Number (document.getElementById("segundaNota").value);
    var resultado = (nota1+nota2)/2;
    document.getElementById("resultado").textContent = `A média do aluno é ${resultado}.`;
}