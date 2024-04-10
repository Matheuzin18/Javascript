function maior() {
    var numero1 = Number (document.getElementById('primeiro').value);
    var numero2 = Number (document.getElementById('segundo').value);
    var numero3 = Number (document.getElementById('terceiro').value);

    console.log(numero1);
    console.log(numero2);
    console.log(numero3);

    if (numero1 > numero2 && numero1 > numero3) {
        document.getElementById('resultado').textContent = `${numero1} é maior que ${numero2} e ${numero3}.`
        console.log('o primeiro número é o maior.');
    }

    if (numero2 > numero1 && numero2 > numero3) {
        document.getElementById('resultado').textContent = `${numero2} é maior que ${numero1} e ${numero3}.`
        console.log('o segundo número é o maior.');
    }

    if (numero3 > numero2 && numero3 > numero1) {
        document.getElementById('resultado').textContent = `${numero3} é maior que ${numero1} e ${numero2}.`
        console.log('o terceiro número é o maior.');
    }
}