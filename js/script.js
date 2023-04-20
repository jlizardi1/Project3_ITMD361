let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
var currentIndex = 1;
displaySlides(currentIndex);

var slide_index = 1;
slidesDisplay(slide_index);
function nextSlide(n) {
slidesDisplay(slide_index += n);
}
function currentSlide(n) {
slidesDisplay(slide_index = n);
}
function slidesDisplay(n) {
var i;
var slides = document.getElementsByClassName("showSlider");
if (n > slides.length) { slide_index = 1 }
if (n < 1) { slide_index = slides.length }
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slide_index - 1].style.display = "block";
}