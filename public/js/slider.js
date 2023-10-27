let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function setInitialRadio(clickedCount) {
  count = clickedCount; // Atualiza o valor da variável "count" com o radio clicado
}

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
