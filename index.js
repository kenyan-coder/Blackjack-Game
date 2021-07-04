
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

// create a function to start the game
function startGame() {
    sumEl.textContent="Sum: " + sum;
    cardsEl.textContent="Cards: " + firstCard +" "+ secondCard;
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
    console.log("Drawing a new card from the deck!")
}