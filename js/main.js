const btnMenu = document.querySelector("#btnMenu");

btnMenu.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("active")
    document.querySelector("#fade").classList.toggle("active")
});