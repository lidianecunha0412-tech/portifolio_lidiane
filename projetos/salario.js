let salario = Number(prompt("Digite o salário:"));
let aumento = Number(prompt("Digite o percentual de aumento (ex: 0.5 para 50%):"));

let salario_final = salario + (salario * aumento);

document.body.innerHTML += `
  <p>Salário inicial: R$ ${salario.toFixed(2)}</p>
  <p>Aumento: ${(aumento * 100)}%</p>
  <h3>Salário final: R$ ${salario_final.toFixed(2)}</h3>
`;