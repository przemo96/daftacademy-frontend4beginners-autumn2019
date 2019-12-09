document.addEventListener('DOMContentLoaded', function () {

    /*  Dodaj hamburger menu do strony dla ekranu mniejszego niż 360px - przycisk
    pokazujący/ukrywający nawigację na szerokości. Menu i przycisk otwierający może na
    razie pozostać nieostylowane, ostylujemy je po kolejnych zajęciach.
    */


    /*  Napisz funkcję, która po kliknięciu w przycisk "Kup bilet" w sekcji"Concerts" usunie
    przycisk i w jego miejscu wyświetli tekst"Have fun!" */

    const btns = document.querySelectorAll('.concerts__item .button');
    for (el of btns) {
        btnDelete(el);
    }

    function btnDelete(el) {
        el.addEventListener('click', function () {
            let haveFunText = document.createElement('p');
            haveFunText.innerText = 'Have fun!';
            el.replaceWith(haveFunText);
        });
    }

    /*  Napisz funkcję, która na evencie "submit"formularza kontaktowego wyloguje wpisane
  wartości do konsoli. (Podpowiedź: użyj funkcji Object.fromEntries w połączeniu z
  FormData)
   */

    const contBtn = document.querySelector('.button--contact');
    const contForm = document.querySelector('.contact__form');
    contBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let consoleInfo = new FormData(contForm);
        console.log(Object.fromEntries(consoleInfo));
    })

});


