const projetos = [
  {
    nome: "Cálculo de Salário",
    descricao: "Sistema simples de cálculo de salário",
    link: "projetos/salario.html",
    imagem: "imagens/salario.png"
  },
  {
    nome: "Comparar Números",
    descricao: "Sistema que identifica maior e menor valor ao comparar dois números",
    link: "projetos/comparar_numeros.html",
    imagem: "imagens/comparar_numeros.png"
  },
  {
    nome: "Cálculo de Média",
    descricao: "Sistema de cálculo de média de notas",
    link: "projetos/media.html",
    imagem: "imagens/media.jpg"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <img src="${projeto.imagem}" width="300" height="200" alt="${projeto.nome}">
    <br><br>
    <a href="${projeto.link}" target="_blank">🔗 Ver projeto</a>
  `;

  container.appendChild(div);
});