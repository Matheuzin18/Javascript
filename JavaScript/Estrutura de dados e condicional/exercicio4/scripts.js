function semana() {
    var dia = Number (document.getElementById('dia').value);

    console.log(dia);

    if (dia==1){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Domingo.`
        console.log('Domingo');
    }

    if (dia==2){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Segunda-Feira.`
        console.log('Segunda-feira');
    }

    if (dia==3){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Terça-Feira.`
        console.log('Terça-Feira');
    }

    if (dia==4){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Quarta-Feira.`
        console.log('Quarta-Feira');
    }

    if (dia==5){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Quinta-Feira.`
        console.log('Quinta-Feira');
    }

    if (dia==6){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Sexta-Feira.`
        console.log('Sexta-Feira');
    }

    if (dia==7){
        document.getElementById('resultado').textContent = `O dia da semana equivalente ao dia ${dia} é Sábado.`
        console.log('Sábado');
    } 
    if (dia > 7) {
        document.getElementById('resultado').textContent = `Número inválido, tente outro número entre 1 e 7.`
        console.log('Número inválido');
    }
}