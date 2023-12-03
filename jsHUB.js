function blinkCard(card) {
    card.classList.add("blink");
    setTimeout(function() {
      card.classList.remove("blink");
    }, 1000);
  }
  