let order = []
let clickedOrder = []
let score = 0
const TWO_FIFTY_TOUSAND_SECONDS = 250

// pegando as cores via html
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')

// Acende a próxima cor
const lightColor = (element, number) => {
  number = number * (TWO_FIFTY_TOUSAND_SECONDS * 2)

  setTimeout(() => {
    element.classList.add('selected')
  }, number - TWO_FIFTY_TOUSAND_SECONDS)

  setTimeout(() => {
    element.classList.remove('selected')
  })
}

// Retorna cor
const createColorElement = (color) => {
  switch(color) {
    case 0:
      return one
    case 1:
      return two
    case 2:
      return three
    case 3:
      return four
    case 4:
      return five
    case 5:
      return six
    case 6:
      return seven
    case 7:
      return eight
  }
}

// Cria a ordem aleatoria de cores
const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 8)
  order[order.length] = colorOrder
  clickedOrder = []

  for(let index in order) {
    let elementColor = createColorElement(order[index])
    lightColor(elementColor, Number(index) + 1)
  }
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
const checkOrder = () => {
  for(let index in clickedOrder) {
    if(clickedOrder[index] != order[index]) {
      gameOver()
      break
    }
  }

  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou!\nInciando próximo nível`)
    nextLevel()
  }
}

// Click do usuário
const click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, TWO_FIFTY_TOUSAND_SECONDS)

}

// Próximo Level
const nextLevel = () => {
  score += 1
  shuffleOrder()
}

// Game Over
const gameOver = () => {
  alert(`Pontuação: ${score}\nVocê perdeu`)
  order = []
  clickedOrder = []
}

// Iniciar o jogo
const playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
  score = 0

  nextLevel()
}

playGame()

one.onclick = () => click(0)
two.onclick = () => click(1)
three.onclick = () => click(2)
four.onclick = () => click(3)
five.onclick = () => click(4)
six.onclick = () => click(5)
seven.onclick = () => click(6)
eight.onclick = () => click(7)