let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;

console.table([random1, random2]);

let img1;
let img2;

switch (random1) {
  case 1:
    img1 = "./dice-1.svg";
    break;
  case 2:
    img1 = "./dice-2.svg";
    break;
  case 3:
    img1 = "./dice-3.svg";
    break;
  case 4:
    img1 = "./dice-4.svg";
    break;
  case 5:
    img1 = "./dice-5.svg";
    break;
  case 6:
    img1 = "./dice-6.svg";
    break;
}

switch (random2) {
  case 1:
    img2 = "./dice-1.svg";
    break;
  case 2:
    img2 = "./dice-2.svg";
    break;
  case 3:
    img2 = "./dice-3.svg";
    break;
  case 4:
    img2 = "./dice-4.svg";
    break;
  case 5:
    img2 = "./dice-5.svg";
    break;
  case 6:
    img2 = "./dice-6.svg";
    break;
}

if (random1 === random2) {
  document.querySelector("h1").textContent = "It's a Draw";
} else if (random1 > random2) {
  document.querySelector("h1").textContent = "Player 1 wins";
} else {
  document.querySelector("h1").textContent = "Player 2 wins";
}

document.querySelector("img.dice1").setAttribute("src", img1);
document.querySelector("img.dice2").setAttribute("src", img2);
