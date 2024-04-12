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
    const random = getRandomNum(range)
    const randNumDiv = document.getElementById('randNum')
    randNumDiv.innerText = 'Numero: ' + random
    const cells = document.querySelectorAll('#id .cell')
    cells[random - 1].classList.add('highlight')
    const userCells = document.querySelectorAll('.user-board .cell')
    userCells.forEach((cell) => {
    if (parseInt(cell.innerText) === random) {
      cell.classList.add('highlight')
    }
  })

    
    // associare la classe..
}

const generateUserBoards = function () {
    const usersNumber = document.getElementById('usersNumber').value
    const container = document.querySelector('#container')
    if (parseInt(usersNumber) > 0) {
      for (let i = 0; i < parseInt(usersNumber); i++) {
        const range = fillArray()
        const board = document.createElement('div')
        board.className = 'board user-board'
        for (let i = 0; i < 24; i++) {
          const random = getRandomNum(range)
          board.innerHTML += `<div class='cell'>${random}</div>`
        }
        container.appendChild(board)
      }
    }
  }
  

window.onload = function() {
    generateMainBoard()
    const array = fillArray()
    const randBtn = document.getElementById('randBtn')
    randBtn.addEventListener('click', function () {
        generateRandNumber(array)
      })
    const userBoardBtn = document.getElementById('cardsGenerator')
    userBoardBtn.onclick = generateUserBoards
    
    

}
