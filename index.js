const menuBtnEl = document.querySelector(".btn-mobile-nav");
const menuLinkovi = document.querySelectorAll(".main-nav-link");

menuBtnEl.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});



menuLinkovi.forEach(link => {
    link.addEventListener('click', () => {
        // alert("kliknuto");

        if(document.querySelector(".header").classList.contains("nav-open")){

            document.querySelector(".header").classList.remove("nav-open");
        }
    });
});