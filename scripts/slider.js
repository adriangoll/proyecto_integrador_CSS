const btnLeft = document.querySelector(".boton-i"),
    btnRight = document.querySelector(".boton-d"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".section-slider");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;


function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slider.style.transform = `translateX(-${counter * widthImg}%)`;
    slider.style.transition = "transform 0.6s ease";
}

function moveToLeft() {
    if (counter <= 0) {
        counter = sliderSection.length - 1;
    } else {
        counter--;
    }
    slider.style.transform = `translateX(-${counter * widthImg}%)`;
    slider.style.transition = "transform 0.6s ease";
}