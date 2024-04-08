function media() 
{
    var nota1 = Number (document.getElementById('primeira').value);
    var nota2 = Number (document.getElementById('segunda').value);
    var resultado = Number (nota1 + nota2)/2;
    
    console.log(nota1);
    console.log(nota2);
    console.log(resultado);
    
    if (resultado == 10) {
        document.getElementById('resultado').textContent = `O aluno está aprovado com distinção!`
    console.log('Aprovado com distinção')};

    if (resultado >= 7) {
        document.getElementById('resultado').textContent = `O aluno está aprovado.`
    console.log('Aprovado')};

    if (resultado < 7) {
        document.getElementById('resultado').textContent = `O aluno está reprovado.`
    console.log('Reprovado')};
}