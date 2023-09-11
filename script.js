const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".img-container");
const bulletBtns = document.querySelectorAll(".bullet-points > button");
const bulletPoints = document.querySelector(".bullet-points");

btnNext.addEventListener("click", transformRight);
btnPrev.addEventListener("click", transformLeft);
bulletBtns.forEach((btn) => {
  btn.addEventListener("click", changeImage);
});

const imgWidth = 500;
let currentPosition = 0;
let btnPos;

function changeImage(e) {
  bulletBtns.forEach((btn) => {
    btn.style = "background-color: white;";
  });
  e.target.style = "background-color: yellow;";

  btnPos = [...bulletBtns].indexOf(e.target);

  carousel.setAttribute(
    "style",
    `transform: translate(${-imgWidth * btnPos}px)`
  );
  currentPosition = -imgWidth * btnPos;
}

function transformRight() {
  if (currentPosition === -1500) {
    currentPosition = 0;
    carousel.setAttribute("style", `transform:  translate(0px);`);
    colorBullet(currentPosition);
  } else {
    carousel.setAttribute(
      "style",
      `transform:  translate(${currentPosition - imgWidth}px);`
    );
    currentPosition = currentPosition - imgWidth;
    colorBullet(currentPosition);
  }
}

function colorBullet(current) {
  bulletBtns.forEach((btn) => {
    btn.style = "background-color: white;";
  });

  let arrayOfValues = [0, -500, -1000, -1500];

  let bulletIndex = arrayOfValues.indexOf(current);
  bulletBtns[bulletIndex].style = 'background-color: yellow;';
  
}

function transformLeft() {
  if (currentPosition === 0) {
    currentPosition = -imgWidth * 3;
    colorBullet(currentPosition);
    carousel.setAttribute(
      "style",
      `transform:  translate(${-imgWidth * 3}px);`
    );
  } else {
    carousel.setAttribute(
      "style",
      `transform:  translate(${currentPosition + imgWidth}px);`
    );
    currentPosition = currentPosition + imgWidth;
    colorBullet(currentPosition);
  }
}
