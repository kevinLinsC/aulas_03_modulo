const alturaField = document.getElementById("altura");
const pesoField = document.getElementById("peso");
const mySubmit = document.getElementById("mySubmit");
const imcP = document.getElementById("imc");

mySubmit.onclick = function() {
    let altura = alturaField.value;
    altura = Number(altura);

    let peso = pesoField.value;
    peso = Number(peso);

    let imc = peso / (altura * altura);

    if(isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0){
        imcP.textContent = `Insira um valor válido.`;
        return;
    }

    imcP.textContent = `Seu imc é: ${imc.toFixed(2)}`;
}