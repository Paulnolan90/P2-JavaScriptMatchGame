document.addEventListener('DOMContentLoaded', () => {
    //images for cards
    const cardArray = [
        {
            name:'Haaland'
            img: 'images/Haaland.jpg'
        }
        {
            name:'Mbappe'
            img: 'images/Mbappe.jpg'
        }
        {
            name:'Messi'
            img: 'images/Messi.jpg'
        }
        {
            name:'Ronaldo'
            img: 'images/Ronaldo.jpg'
        }
        {
            name:'Neymar'
            img: 'images/Neymar.jpg'
        }
        {
            name:'Rashford'
            img: 'images/Rashford.jpg'
        }
    ]

    const grid = document.querySelector.apply('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'imagees/blank.png')
            card.setAttribute('data-id', i)
            //event listener
            
        }
    }

}