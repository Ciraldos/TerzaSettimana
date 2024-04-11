const generateMainBoard = function(){
    //funziona che crea il tabellone
    const tableDiv = document.getElementById("table");
    for(let i = 0; i < 90; i++) {
        const numDiv = document.createElement("div");
        numDiv.classList.add("cell");
        numDiv.innerText = i + 1;
        tableDiv.appendChild(numDiv);
    }
}


const fillArray = function() {
    // inserire in un array 
    const arr = []
    for (let i = 0; i < 90; i++) {
      arr.push(i + 1)
    }
    return arr
}

const getRandomNum = function (range) {
    // generare un numero random
    const i = Math.floor(Math.random() * range.length)
    const random = range.splice(i, 1)[0]
    return random
  }
  

const generateRandNumber = function(range) {
    const numRandom = getRandomNum(range);
    const numGeneratorButton = document.getElementById("numGenerator");
    const randomNumberElement = document.getElementById("number");
    // Associa la funzione all'evento click del pulsante
    numGeneratorButton.addEventListener("click", function() {
        // Ottieni l'elemento in cui mostrare il numero
        randomNumberElement.innerText = numRandom;})
    // associare la classe..
}

const generateUserBoards = function () {
    // genera e gestisce le tabelline
}


generateMainBoard()