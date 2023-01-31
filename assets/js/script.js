document.addEventListener('DOMContentLoaded', () => {
    
  const cardArray = [ // creates an array of images giving them an index of 0-11
        {
            name:'Haaland',
            img: 'assets/images/HaalandUp.jpg'
        },
        {
            name:'Haaland',
            img: 'assets/images/HaalandUp.jpg'
        },
        {
            name:'Mbappe',
            img: 'assets/images/MbappeUp.jpg'
        },
        {
            name:'Mbappe',
            img: 'assets/images/MbappeUp.jpg'
        },
        {
            name:'Messi',
            img: 'assets/images/Messi.jpg'
        },
        {
            name:'Messi',
            img: 'assets/images/Messi.jpg'
        },
        {
            name:'Ronaldo',
            img: 'assets/images/RonaldoUp.jpg'
        },
        {
            name:'Ronaldo',
            img: 'assets/images/RonaldoUp.jpg'
        },
        {
            name:'Neymar',
            img: 'assets/images/DebruyneUp.jpg'
        },
        {
            name:'Neymar',
            img: 'assets/images/DebruyneUp.jpg'
        },
        {
            name:'Rashford',
            img: 'assets/images/RashfordUp.jpg'
        },
        {
            name:'Rashford',
            img: 'assets/images/RashfordUp.jpg'
        }
    ]

cardArray.sort(()=> 0.5 - Math.random())

//creating board picking out element in the HTML file grid

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen =[]
  var cardsChosenId = []
  var cardsWon =[]

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')  // creates an element for each card above
            card.setAttribute('src', 'assets/images/Blank.jpg') // sets the attribute of this elemnt to have src and then points to the image
            card.setAttribute('data-id', i) 
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

//check for matches code

  function checkForMatch () {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')  //when a match is found this changes the images so they dont go back to turned over
        cards[optionOneId].setAttribute('src', 'assets/images/red.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/images/red.jpg')
        cardsWon.push(cardsChosen)
    }
    else {  // the cards dont match so they go back to being blank
        cards[optionOneId].setAttribute('src', 'assets/images/Blank.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/images/Blank.jpg')
        
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){  //checks if the cards won array is equal to 6 and stops the game.
        resultDisplay.textContent = 'You have won the Champions League!!! ' //displays text when cardWon runs.
        setTimeout(function(){  //this function restarts the game after 5 seconds once complete.
            window.location.reload();
         }, 5000); 
    } 
  }


//flip your card

  function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500) //checks for match after .5 of a second
    }
  }

createBoard()
})

