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

// function moveToRight() {
//     if (counter >= sliderSection.length-1) {
//         counter = 0;
//         operacion = 0;
//         slider.style.transform = `translate(-${operacion}%)`;
//         slider.style.transition = "none";
//         return;
//     } 
//     counter++;
//     operacion = operacion + widthImg;
//     slider.style.transform = `translate(-${operacion}%)`;
//     slider.style.transition = "all ease .6s"
    
// }  

// function moveToLeft() {
//     counter--;
//     if (counter < 0 ) {
//         counter = sliderSection.length-1;
//         operacion = widthImg * (sliderSection.length-1)
//         slider.style.transform = `translate(-${operacion}%)`;
//         slider.style.transition = "none";
//         return;
//     } 
//     operacion = operacion - widthImg;
//     slider.style.transform = `translate(-${operacion}%)`;
//     slider.style.transition = "all ease .6s"
    
    
// }  

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