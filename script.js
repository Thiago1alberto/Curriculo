// seleciona todos os elementos que terão seu tamanho de fonte alterado
const elementosComFonte = document.querySelectorAll(
  "body, h1, h2, h3, p, ul, li"
);

// define o tamanho da fonte padrão
let tamanhoFonte = 16;

// função para aumentar o tamanho da fonte
function aumentarFonte() {
  tamanhoFonte++;
  for (let i = 0; i < elementosComFonte.length; i++) {
    elementosComFonte[i].style.fontSize = tamanhoFonte + "px";
  }
}

// função para diminuir o tamanho da fonte
function diminuirFonte() {
  tamanhoFonte--;
  for (let i = 0; i < elementosComFonte.length; i++) {
    elementosComFonte[i].style.fontSize = tamanhoFonte + "px";
  }
}

// adiciona os eventos de clique para aumentar e diminuir o tamanho da fonte
document
  .getElementById("aumentar-fonte")
  .addEventListener("click", aumentarFonte);
document
  .getElementById("diminuir-fonte")
  .addEventListener("click", diminuirFonte);
