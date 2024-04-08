function salario() {
    var atual =  Number (document.getElementById('atual').value);
    var novo = Number;

if (atual < 500) {
  novo = (atual*15)/100;
}

if (atual = 500 >= 1000) {
    novo = (atual*10)/100;
}

if (atual > 1000) {
    novo = (atual*5)/100;

    console.log(novo);
    console.log(atual);

    document.getElementById('resultado').textContent = `O novo salário desse funcionário é de R$${novo},00.`;
} }
