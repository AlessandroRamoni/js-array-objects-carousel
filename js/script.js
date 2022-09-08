console.log("JS OK!");

/*
creare un carousel di immagini
le immagini sono in un array (array di stringhe)
pulsanti avanti indietro
aggiungere le thumb (la thumb attiva sarà distinguibile dalle altre)
dopo 5 secondi la slide avanza automaticamente
*/

const images = [
  {
    url: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    title: "Svezia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Perù",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    title: "Chile",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Argentina",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    title: "Colombia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
];

// settings
// const NUM_IMAGES = images.length;
const CHANGE_IMAGE_DELAY = 5;

// const images = (NUM_IMAGES);
// console.log(images);

let activeIndex = 0;
buildCarousel(images, activeIndex);

let idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
console.log("ho creato il timer", idInterval);

const leftArrowButton = document.getElementById("left-arrow");
const rightArrowButton = document.getElementById("right-arrow");

leftArrowButton.addEventListener("click", moveCarouselPrevious);

rightArrowButton.addEventListener("click", moveCarouselForward);

function moveCarouselForward() {
  // console.log("cancello il timer di", idInterval);
  clearInterval(idInterval);
  // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
  activeIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
  buildCarousel(images, activeIndex);
  idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
  // console.log("ho creato il timer", idInterval);
}

function moveCarouselPrevious() {
  // console.log("cancello il timer di", idInterval);
  clearInterval(idInterval);
  // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
  activeIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
  buildCarousel(images, activeIndex);
  idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
  // console.log("ho creato il timer", idInterval);
}

function buildCarousel(placesArray, activeIndex) {
  const carouselImages = document.querySelector(".carousel-images");
  const carouselThumbs = document.querySelector(".carousel-thumbs");
  const activeImageTitleElement = document.querySelector(".active-image-title");
  let content = "";
  let activeTitle = "";
  for (let i = 0; i < placesArray.length; i++) {
    const place = placesArray[i];
    if (i === activeIndex) {
      activeTitle = place.title;
    }
    const imageClass =
      i === activeIndex ? "carousel-img active" : "carousel-img";
    content += `<img class="${imageClass}" src="${place.url}" title="${place.title}" alt="${place.description}" />`;
  }
  // console.log({content});
  console.log(activeTitle);
  carouselImages.innerHTML = content;
  carouselThumbs.innerHTML = content;
  activeImageTitleElement.innerHTML = activeTitle;
}

/*
function createImageArray(numImages) {
  const images = [];
  for (let i = 1; i <= numImages; i++) {
    const fileName = i < 10 ? "0" + i : i;
    const url = "img/" + fileName + ".jpg";
    images.push(url);
  }

  return images;
}
*/
///////////////////////////////////////////////////////
