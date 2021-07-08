let player ={
    name:"Per Borgen",
    chips:"$145"
}

//array of ordered cards
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent=player.name+ ": " +player.chips;

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13) +1 
    if (randomCard > 10){
        return 10
    }else if(randomCard ===1){
        return 11
    }else{
        return randomCard
    }
    
}

// create a function to start the game
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum=firstCard+secondCard
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
    if(isAlive===true && hasBlackJack===false)  {
    //create a new card variable
    let newCard = getRandomCard()
    //update the sum variable
    sum +=newCard
    //push card into new array
    cards.push(newCard)
    renderGame()
    }
}