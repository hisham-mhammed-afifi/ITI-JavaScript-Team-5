const sliderImages = document.querySelectorAll(".slider-card");

const translateValues = [
  [100, 0, -100],
  [-100, 100, 0],
  [0, -100, 100],
];
const opacityValues = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 0],
];

let i = 2;
let x = 0;
let y = 0;

setInterval(() => {
  sliderImages[i].style.transform = `translateX(${translateValues[x][y]}vw)`;
  sliderImages[i--].style.opacity = `${opacityValues[x][y++]}`;
  sliderImages[i].style.transform = `translateX(${translateValues[x][y]}vw)`;
  sliderImages[i--].style.opacity = `${opacityValues[x][y++]}`;
  sliderImages[i].style.transform = `translateX(${translateValues[x][y]}vw)`;
  sliderImages[i].style.opacity = `${opacityValues[x][y]}`;
  i = 2;
  y = 0;
  x > 1 ? (x = 0) : x++;
}, 5000);
