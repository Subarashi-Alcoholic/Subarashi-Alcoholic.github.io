function blinkCard(card) {
  card.classList.add("blink");
  setTimeout(function() {
    card.classList.remove("blink");
  }, 1000);
}

function changeColor() {
  var cardS = document.querySelector(".cardS");
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  cardS.style.transition = "background-color 0.5s"; // Add transition property
  cardS.style.backgroundColor = rgbColor;
}

setInterval(changeColor, 250);


