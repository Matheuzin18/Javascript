function triangulo() {
    var lado1 = Number (document.getElementById('primeiro').value);
    var lado2 = Number (document.getElementById('segundo').value);
    var lado3 = Number (document.getElementById('terceiro').value);

    console.log(lado1);
    console.log(lado2);
    console.log(lado3);

    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
        document.getElementById('resultado').textContent = `É possível formar um triângulo com esses valores.`
        console.log('É possível');
    } else { 
        document.getElementById('resultado').textContent = `Não é possível formar um triângulo com esses valores.`
        console.log('Não é possível');
    }
}

function tipo() {
    var lado1 = Number (document.getElementById('primeiro').value);
    var lado2 = Number (document.getElementById('segundo').value);
    var lado3 = Number (document.getElementById('terceiro').value);

    console.log(lado1);
    console.log(lado2);
    console.log(lado3);
 
    if (lado1 == lado2 && lado1 == lado3) {
        document.getElementById('resultado2').textContent = `Esse é um Triângulo Equilátero.`
        console.log('Equilátero');
    }
     else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        document.getElementById('resultado2').textContent = `Esse é um Triângulo Isósceles.`
        console.log('Isósceles');
    }
    else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        document.getElementById('resultado2').textContent = `Esse é um Triângulo Escaleno.`
        console.log('Escaleno');
    }
}