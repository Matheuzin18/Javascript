function metro() {
    var m = document.getElementById("metros").value;
    var cm = m*100;
    document.getElementById("resultado").textContent = `${m} metros equivalem a ${cm} centímetros.`;

   console.log(m);
   console.log(cm);
   
}