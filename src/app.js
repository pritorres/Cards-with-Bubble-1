/* eslint-disable */
import "bootstrap";
import "./style.css";

window.myFuncion = function() {
  const myInput = document.querySelector(".myInput");
  const myPinta = ["diamond", "heart", "club", "spade"];
  const myNumeroCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cartasSort = document.querySelector(".cartasSort");
  let myCard = "";
  for (let index = 0; index < myInput.value; index++) {
    const pintaAleatoria = Math.floor(Math.random(0) * 4);
    const numeroAleatorio = Math.floor(Math.random(0) * 13);
    myCard += `
      <div class="Cards">
        <div class="icono-top ${myPinta[pintaAleatoria]}"></div>
        <div class="numeroCard ">${myNumeroCard[numeroAleatorio]}</div>
        <div class="icono-bottom ${myPinta[pintaAleatoria]}"></div>
      </div>
    `;
  }
  cartasSort.innerHTML = myCard;
};
