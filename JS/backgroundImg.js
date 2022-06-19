const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const back =document.querySelector(".bgimg");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `../img/${chosenImage}`;

back.appendChild(bgImage);
