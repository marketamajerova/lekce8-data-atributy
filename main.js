/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/

let ovoce = document.querySelectorAll('img');


ovoce.forEach(function(obrazek){
    obrazek.addEventListener('click', function() {

        let popis = document.getElementById('vysledek');
        popis.innerHTML = "Snedla jsi " + obrazek.dataset.kalorie + " na 100g potraviny";

    });
});



// popis.innerHTML = "Snedla jsi " + ovoce.dataset.kalorie + " na 100g potraviny";


// jablko.addEventListener('click', function() {
//     popis.innerHTML = "Snedla jsi " + jablko.dataset.kalorie + " na 100g potraviny";
// });

// jablko.addEventListener('click', function() {
//     popis.innerHTML = "Snedla jsi " + jablko.dataset.kalorie + " na 100g potraviny";
// });