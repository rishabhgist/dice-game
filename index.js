let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomImg = "dice" + randomNumber + ".png"; // Adding random number to the file path

let imgRandomImage = "images/" + randomImg; // Adding imgage path before dice.png

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", imgRandomImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImg2 = "images/dice" + randomNumber2 + ".png"; // Adding random number to the file path

let image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomImg2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win"
}else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Win"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}