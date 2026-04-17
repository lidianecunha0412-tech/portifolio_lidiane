let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let resultado;

if (num1 > num2) {
    resultado = "Maior número: " + num1 + "<br>Menor número: " + num2;
} else if (num1 < num2) {
    resultado = "Maior número: " + num2 + "<br>Menor número: " + num1;
} else {
    resultado = "Os números são iguais.";
}

document.body.innerHTML += `<p>${resultado}</p>`;