const backGroundImages = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage =
  backGroundImages[Math.floor(Math.random() * backGroundImages.length)];
const imgTag = document.createElement("img");
imgTag.src = `img/${chosenImage}`;
imgTag.classList.add("background");

document.body.appendChild(imgTag);
