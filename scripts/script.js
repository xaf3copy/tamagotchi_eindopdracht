console.log("hi");

const hongerMeter = document.querySelector("#honger");
const vervelingMeter = document.querySelector("#verveling");
const energieMeter = document.querySelector("#energie");
const eetKnop = document.querySelector("#eten");
const speelKnop = document.querySelector("#spelen");
const slaapKnop = document.querySelector("#slapen");
const resetKnop = document.querySelector("#reset");
const paragraaf = document.querySelector("p");
const tamagotchi = document.querySelector("#tamagotchi");
const input = document.querySelector("#naamInput");
const enterKnop = document.querySelector("#enterKnop");
const naam = document.querySelector("#naam");
const gameoverAudio = document.querySelector("#gameoverAudio");

//code voor het input veld, met hulp van nienke
enterKnop.onclick = function () {
  naam.textContent = input.value;
};

//code voor de knoppen, met hulp uit de lesopdrachten
eetKnop.onclick = function () {
  hongerMeter.value = hongerMeter.value + 1;
  true > 10;
  if (tamagotchi.src.includes("img/tama_norm.png")) {
    tamagotchi.src = "img/tama_eating.png";
  } else {
    tamagotchi.src = "img/tama_norm.png";
  }
};

speelKnop.onclick = function () {
  vervelingMeter.value = vervelingMeter.value + 1;
  true > 10;
  if (tamagotchi.src.includes("img/tama_norm.png")) {
    tamagotchi.src = "img/tama_playing.png";
  } else {
    tamagotchi.src = "img/tama_norm.png";
  }
};

slaapKnop.onclick = function () {
  energieMeter.value = energieMeter.value + 1;
  true > 10;
  if (tamagotchi.src.includes("img/tama_norm.png")) {
    tamagotchi.src = "img/tama_sleeping.png";
  }
};

resetKnop.onclick = function () {
  hongerMeter.value = hongerMeter.value = 10;
  vervelingMeter.value = vervelingMeter.value = 10;
  energieMeter.value = energieMeter.value = 10;
  document.body.style.backgroundColor = "#C1F27F";
  paragraaf.textContent = "Zorg voor mij!";
  tamagotchi.src.includes("img/tama_norm.png");
  tamagotchi.src = "img/tama_norm.png";
};

// code om de healthbars te laten dalen, met hulp uit de lesopdrachten
function veranderMeters() {
  hongerMeter.value--;
  vervelingMeter.value--;
  energieMeter.value--;

  //audio en achtergrond met hulp van W3schools https://www.w3schools.com/
  if (
    hongerMeter.value <= 0 || vervelingMeter.value <= 0 || energieMeter.value <= 0) {
    tamagotchi.src.includes("img/tama_norm.png");
    tamagotchi.src = "img/tama_dying.png";
    document.body.style.backgroundColor = "#B3B3B3";
    paragraaf.textContent =
    "Klik op reset om het weer goed te maken.";
    gameoverAudio.play();
    hongerMeter.value = 0;
    vervelingMeter.value = 0;
    energieMeter.value = 0;
  }
}

setInterval(veranderMeters, 2250);