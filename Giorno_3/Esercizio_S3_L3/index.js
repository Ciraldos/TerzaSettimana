



const handlesubmit = function (e) {
    // invoca la funziona che genera la lista
    // invoca la funzione che cambia la classe (aggiunge sbarrato)
    // invoca la funzione che elimina il task   
}
    // una funzione che henera la lista con il nuovo task
    //      aggangiarsi nell'html
    //      utilizzare template literals per stampare direttamente anche dell'html
    //      inputField.value
    //      font-awesome -> <i calss="far fa-trash-alt"></i>

    // una funzione che cambia la classe (aggiunge sbarrata)
    //      agganciarsi nell'html
    //      for
    //      classList.toggle -> text-decotation:line.through (css)

    // una funziona che elimina il task
    //      agganciarsi nell'html
    //      for
    //      remove

window.onload = function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", handlesubmit)
}