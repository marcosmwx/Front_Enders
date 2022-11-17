setTimeout(function () {
  window.location.replace("index.html");
}, 5000);

function contagem(duracao, display) {
  let timer = duracao,
    segundos;
  setInterval(function () {
    segundos = parseInt(timer % 4);
    display.textContent = segundos;
    if (--timer < 1) {
      timer = duracao;
    }
  }, 1000);
}
window.onload = function () {
  let duracao = 60 * 5; // Converter para segundos
  display = document.querySelector("#timer"); // selecionando o timer
  contagem(duracao, display); // iniciando o timer
};
