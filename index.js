
let firstCard = 10
let secondCard = 4
//array of ordered cards
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

// create a function to start the game
function startGame(){
    renderGame();
}
function renderGame() {
    sumEl.textContent="Sum: " + sum;
    cardsEl.textContent="Cards: " 
      // Create a for loop that renders out all the cards instead of just two
      for (let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " " ;
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    //Display the message to the user.  
    messageEl.textContent = message;

}
function newCard(){   
    //create a new card variable
    let newCard = 7
    //update the sum variable
    sum +=newCard
    //push card into new array
    cards.push(newCard)
    renderGame()

}