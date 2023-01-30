document.addEventListener('DOMContentLoaded', () => {
    //images for cards
  const cardArray = [
        {
            name:'Haaland',
            img: 'images/Haaland.jpg'
        },
        {
            name:'Haaland',
            img: 'images/Haaland.jpg'
        },
        {
            name:'Mbappe',
            img: 'images/Mbappe.jpg'
        },
        {
            name:'Mbappe',
            img: 'images/Mbappe.jpg'
        },
        {
            name:'Messi',
            img: 'images/Messi.jpg'
        },
        {
            name:'Messi',
            img: 'images/Messi.jpg'
        },
        {
            name:'Ronaldo',
            img: 'images/Ronaldo.jpg'
        },
        {
            name:'Ronaldo',
            img: 'images/Ronaldo.jpg'
        },
        {
            name:'Neymar',
            img: 'images/Neymar.jpg'
        },
        {
            name:'Neymar',
            img: 'images/Neymar.jpg'
        },
        {
            name:'Rashford',
            img: 'images/Rashford.jpg'
        },
        {
            name:'Rashford',
            img: 'images/Rashford.jpg'
        }
    ]
//creating board
    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/Blank.jpg')
            card.setAttribute('data-id', i)
            //event listener
            grid.appendChild(card)
        }
    }
createBoard()
})