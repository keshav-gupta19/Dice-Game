var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImg1 =
  "/images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImg1);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImg2 =
  "/images/dice" + randomnumber2 + ".png";
console.log(randomDiceImg1);
console.log(randomDiceImg2);
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImg2);


if (randomnumber1>randomnumber2) {
    document.querySelector("h1").textContent="Player 1 Wins!!!🎀🎗️";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent="Player 2 Wins!!!🎀🎗️"; 
}
else{
    document.querySelector("h1").textContent="Draw!🥲🥲"
}