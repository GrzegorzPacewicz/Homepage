{
    const toggleBackgroundColor = () => {
      const bodyElement = document.querySelector(".js-body");
      const themeName = document.querySelector(".js-themeName");
  
      bodyElement.classList.toggle("body--dark");
      themeName.innerText = bodyElement.classList.contains("body--dark")
        ? "jasny"
        : "ciemny";
    };
  
    const init = () => {
      const buttonElement = document.querySelector(".js-button");
  
      buttonElement.addEventListener("click", toggleBackgroundColor);
    };
  
    init();
  }
