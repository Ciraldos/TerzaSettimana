
const handlesubmit = function (e) {
    e.preventDefault();
    // invoca la funziona che genera la lista
    createTask();
    // invoca la funzione che cambia la classe (aggiunge sbarrato)
    changeClass();
    // invoca la funzione che elimina il task
    removeTask();   
}
    // una funzione che genera la lista con il nuovo task
    //      aggangiarsi nell'html
    //      utilizzare template literals per stampare direttamente anche dell'html
    //      inputField.value
    //      font-awesome -> <i class="far fa-trash-alt"></i>
    function createTask(){
        let tasks = document.querySelector("#tasks")
        let inputField = document.querySelector("#todo input")
        let newTask = `
            <div class="task">
                <span id="taskname">
                    ${inputField.value}
                </span>
                <button class="remove">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `
        tasks.innerHTML += newTask;
        inputField.value="";
      }
      



    // una funzione che cambia la classe (aggiunge sbarrata)
    //      agganciarsi nell'html
    //      for
    //      classList.toggle -> text-decotation:line.through (css)

    
    
    // una funziona che elimina il task
    //      agganciarsi nell'html
    //      for
    //      remove

    function removeTask(){
        let removeButtons = document.querySelectorAll(".remove");
        for(let i=0;i<removeButtons.length;i++){
            removeButtons[i].addEventListener("click",function(){
                removeButtons[i].remove;
            })
        }
    }
//NON FUNZIONA


window.onload = function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", handlesubmit)
}