{
    const buttonElement = document.querySelector(".js-button");
    const bodyElement = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    buttonElement.addEventListener("click", () => {
        bodyElement.classList.toggle("body--dark");
        themeName.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
    });
}