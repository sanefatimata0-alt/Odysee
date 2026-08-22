let menu = document.querySelector(".navbar");
let boutonMenu = document.querySelector(".menu-toggle");

boutonMenu.addEventListener("click", function () {

    menu.classList.toggle("is-open");

});

let liens = document.querySelectorAll(".navbar a");

liens.forEach(function (lien) {

    lien.addEventListener("click", function () {

        menu.classList.remove("is-open");

    });

});

//FAVORIS ❤️

let coeurs = document.querySelectorAll(".heart");

coeurs.forEach(function (coeur) {

    coeur.addEventListener("click", function () {

        if (coeur.textContent === "♡") {

            coeur.textContent = "♥";
            coeur.style.color = "#f36f5f";

        } else {

            coeur.textContent = "♡";
            coeur.style.color = "#152c32";

        }

    });

});

// ANIMATION AU SURVOL DES CARTES

let cartes = document.querySelectorAll(".destination-card");

cartes.forEach(function (carte) {

    carte.addEventListener("mouseenter", function () {

        carte.style.transform = "translateY(-8px)";

    });


    carte.addEventListener("mouseleave", function () {

        carte.style.transform = "translateY(0)";

    });

});