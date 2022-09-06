////////////////////////////
//Namų darbas
console.log("------------------------- PVM ----------------------------");
let kainaSuPVM;

while (kainaSuPVM <= 0 || isNaN(kainaSuPVM)) {
  kainaSuPVM = prompt("Kokia prekės kaina ?");
  kainaSuPVM = Number(kainaSuPVM);
  if (kainaSuPVM < 0 || isNaN(kainaSuPVM)) {
    console.log("Bandykite dar kartą :)");
  }
}

const saliesPVM = 0.21;

let kainaBePVM = kainaSuPVM / (1 + saliesPVM);
kainaBePVM = kainaBePVM.toFixed(2);

let PVM = kainaSuPVM - kainaBePVM;
PVM = PVM.toFixed(2);

console.log("Prekės kaina su PVM: " + kainaSuPVM + " €");
console.log("PVM: " + PVM + " %");
console.log("Prekės kaina be PVM: " + kainaBePVM + " €");
console.log("---------------------- Characters -----------------------");
var characters = [
  "Jon Snow",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Theon Greyjoy",
  "Tyrion Lannister",
  "Arya Stark",
];
let characterLength = characters.length;
console.log(
  "Characters from Game od Throne:\n",
  `First character: ${characters[0]}\n`,
  `Last character:  ${characters[characterLength - 1]}`
);

let chosenNr;

while (chosenNr <= 0 || chosenNr > characterLength || isNaN(chosenNr)) {
  chosenNr = prompt(`Įveskite skaičių nuo 1 iki ${characterLength}?`);
  chosenNr = Number(chosenNr);
  if (chosenNr <= 0 || chosenNr > characterLength || isNaN(chosenNr)) {
    console.log("Bandykite dar kartą :)");
  }
}
console.log(`Chosen character: ${chosenNr}. ${characters[chosenNr - 1]}`);
