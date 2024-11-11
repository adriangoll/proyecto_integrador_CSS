const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar")

abrir.addEventListener("click", ()=>{
    nav.classList.add("nav-visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
})