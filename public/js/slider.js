let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 9000);

function setInitialRadio(clickedCount) {
  count = clickedCount;
}

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
