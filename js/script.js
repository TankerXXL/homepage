console.log("Chyba mnie poniosło trochę z kolorami");

let btn = document.querySelector(".js-button");
let fotka = document.querySelector(".js-photo");


btn.addEventListener("click", () => {
    fotka.classList.toggle("hide");
    btn.innerText = fotka.classList.contains("hide") ? "Pokaż mnie" : "Schowaj mnie";
});