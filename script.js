const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".carrousel .img-container");
const carrousel = document.querySelector(".carrousel");
const bullets = document.querySelectorAll(".bullet-points > button");

next.addEventListener("click", getNextImage);
previous.addEventListener("click", getPreviousImage);
bullets.forEach((bullet) => {
  bullet.addEventListener("click", getBulletImage);
});

function getNextImage() {
  let currentImage;
  images.forEach((image) => {
    if (!image.hasAttribute("hidden")) {
      currentImage = image;
    }
  });

  currentImage.setAttribute("hidden", "");

  if (!currentImage.nextElementSibling) {
    console.log(carrousel.firstElementChild);
    carrousel.firstElementChild.removeAttribute("hidden");
    colorBulletOnChange(0);
  } else {
    currentImage.nextElementSibling.removeAttribute("hidden");
    indexOfNext =
      [...currentImage.parentNode.children].indexOf(currentImage) + 1;
    colorBulletOnChange(indexOfNext);
  }
}

function getPreviousImage() {
  let currentImage;
  images.forEach((image) => {
    if (!image.hasAttribute("hidden")) {
      currentImage = image;
    }
  });

  currentImage.setAttribute("hidden", "");

  if (!currentImage.previousElementSibling) {
    carrousel.lastElementChild.removeAttribute("hidden");

    colorBulletOnChange([...currentImage.parentNode.children].length - 1);
  } else {
    currentImage.previousElementSibling.removeAttribute("hidden");
    indexOfPrevious =
      [...currentImage.parentNode.children].indexOf(currentImage) - 1;
    colorBulletOnChange(indexOfPrevious);
  }
}

function getBulletImage(e) {
  images.forEach((image) => {
    image.setAttribute("hidden", "");
  });

  bullets.forEach((bullet) => {
    bullet.setAttribute("style", "background-color: white");
  });

  e.target.setAttribute("style", "background-color: yellow;");
  const indexOfImage = e.target.id;

  images.item(indexOfImage).removeAttribute("hidden");
}

function colorBulletOnChange(indexOfBullet) {
  bullets.forEach((bullet) => {
    bullet.setAttribute("style", "background-color: white");
  });

  bullets
    .item(indexOfBullet)
    .setAttribute("style", "background-color: yellow;");
}

setInterval(getNextImage, 4000);
