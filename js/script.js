let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--dark");
    themeName.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
});