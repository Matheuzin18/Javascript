function nascimento() {
    var idade = document.getElementById("idade").value;
    var calculo = 2024 - idade;
    document.getElementById("resultado").innerHTML = calculo;


    console.log(idade);
    console.log(calculo);
}