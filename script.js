const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".img-container");
const bulletBtns = document.querySelectorAll('.bullet-points > button');
const bulletPoints = document.querySelector('.bullet-points');

btnNext.addEventListener("click", transformRight);
btnPrev.addEventListener("click", transformLeft);
bulletBtns.forEach(btn => {
  btn.addEventListener('click', changeImage);
});

const imgWidth = 500;
let currentPosition = 0;
let counter = 1;
let btnPos;

function changeImage(e) {
  bulletBtns.forEach(btn => {
    btn.style = 'background-color: white;';
  });
  e.target.style = 'background-color: yellow;';

  btnPos = [...bulletBtns].indexOf(e.target) + 1;


  if (btnPos > counter) {
    counter = btnPos;
    console.log(counter);
    console.log(btnPos);
    carousel.setAttribute(
      "style",
      `transform:  translate(${-(btnPos*imgWidth)}px);`
    );
  } else if (btnPos < counter) {
    counter = btnPos; 
    console.log(counter);
    console.log(btnPos)
    carousel.setAttribute(
      "style",
      `transform:  translate(${(btnPos*imgWidth)}px);`
    );
  } else {
    return
  }
}

function transformRight() {
  if (counter === images.length) {
    counter = 1;
    currentPosition = 0;

    carousel.setAttribute("style", `transform:  translate(0px);`);
  } else {
    carousel.setAttribute(
      "style",
      `transform:  translate(${currentPosition - imgWidth}px);`
    );
    currentPosition = currentPosition - imgWidth;
    counter++;
  }
}

function transformLeft() {
  if (counter === 1) {
    counter = 4;
    currentPosition = -imgWidth * 3;

    carousel.setAttribute("style", `transform:  translate(${-imgWidth * 3}px);`);
  } else {
    carousel.setAttribute(
      "style",
      `transform:  translate(${currentPosition + imgWidth}px);`
    );
    currentPosition = currentPosition + imgWidth;
    counter--;
  }
}

