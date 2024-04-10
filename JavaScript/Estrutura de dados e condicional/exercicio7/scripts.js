function compras() {
    var prod1 = Number (document.getElementById('primeiro').value);
    var prod2 = Number (document.getElementById('segundo').value);
    var prod3 = Number (document.getElementById('terceiro').value);

    console.log(prod1);
    console.log(prod2);
    console.log(prod3);

    if (prod1 < prod2 && prod1 < prod3) {
        document.getElementById('resultado').textContent = `Você deve comprar o produto 1.`;
    }

    else if (prod1 > prod2 && prod2 < prod3) {
        document.getElementById('resultado').textContent = `Você deve comprar o produto 2.`;
    } 

    else if (prod3 < prod2 && prod3 < prod1) {
        document.getElementById('resultado').textContent = `Você deve comprar o produto 3.`;
    }
}