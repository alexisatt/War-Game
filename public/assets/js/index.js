// globals
var player1Cards
var player2Cards
var p1Score = 26;
var p2Score = 26;

document.getElementById('player1Results').innerHTML = p1Score;
document.getElementById('player2Results').innerHTML = p2Score;

//Deck with ranks:
const starterDeck = [
    {'img': '2_of_clubs.png',"rank": 1},{'img': '3_of_clubs.png',"rank": 2},{'img': '4_of_clubs.png',"rank": 3},{'img': '5_of_clubs.png',"rank": 4},{'img': '6_of_clubs.png',"rank": 5},{'img': '7_of_clubs.png',"rank": 6},{'img': '8_of_clubs.png',"rank": 7},{'img': '9_of_clubs.png',"rank": 8},{'img': '10_of_clubs.png',"rank": 9},{'img': 'jack_of_clubs2.png',"rank": 10},{'img': 'queen_of_clubs2.png',"rank": 11},{'img': 'king_of_clubs2.png',"rank": 12},{'img': 'ace_of_clubs.png',"rank": 13},{'img': '2_of_diamonds.png',"rank": 1},{'img': '3_of_diamonds.png',"rank": 2}, {'img': '4_of_diamonds.png',"rank": 3}, {'img': '5_of_diamonds.png',"rank": 4},{'img': '6_of_diamonds.png',"rank": 5},{'img': '7_of_diamonds.png',"rank": 6},{'img': '8_of_diamonds.png',"rank": 7},{'img': '9_of_diamonds.png',"rank": 8},{'img': '10_of_diamonds.png',"rank": 9},{'img': 'jack_of_diamonds2.png',"rank": 10},{'img': 'queen_of_diamonds2.png',"rank": 11},{'img': 'king_of_diamonds2.png',"rank": 12},{'img': 'ace_of_diamonds.png',"rank": 13},{'img': '2_of_hearts.png',"rank": 1},{'img': '3_of_hearts.png',"rank": 2},{'img': '4_of_hearts.png',"rank": 3},{'img': '5_of_hearts.png',"rank": 4},{'img': '6_of_hearts.png',"rank": 5},{'img': '7_of_hearts.png',"rank": 6},{'img': '8_of_hearts.png',"rank": 7},{'img': '9_of_hearts.png',"rank": 8},{'img': '10_of_hearts.png',"rank": 9},{'img': 'jack_of_hearts2.png',"rank": 10},{'img': 'queen_of_hearts2.png',"rank": 11},{'img': 'king_of_hearts2.png',"rank": 12},{'img': 'ace_of_hearts.png',"rank": 13},{'img': '2_of_spades.png',"rank": 1},{'img': '3_of_spades.png',"rank": 2},{'img': '4_of_spades.png',"rank": 3},{'img': '5_of_spades.png',"rank": 4},{'img': '6_of_spades.png',"rank": 5},{'img': '7_of_spades.png',"rank": 6},{'img': '8_of_spades.png',"rank": 7}, {'img': '9_of_spades.png',"rank": 8}, {'img': '10_of_spades.png',"rank": 9},{'img': 'jack_of_spades2.png',"rank": 10},{'img': 'queen_of_spades2.png',"rank": 11},{'img': 'king_of_spades2.png',"rank": 12},{'img': 'ace_of_spades.png',"rank": 13}
   ]


function initialize_game() {

  //Shuffled Our Deck:
  for (let i = 0; i < 52; i++) {
    // We are taking our tempCard and placing it in the random position (randomIndex)
    let shuffledCards = starterDeck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    starterDeck[i] = starterDeck[randomIndex]
    starterDeck[randomIndex] = shuffledCards;
  }
  //console.log(starterDeck)

  //Player 1 gets the first 26 cards from the random shuffled deck. 
  player1Cards = starterDeck.splice(26)
            //  console.log(player1Cards)

  //Player 2 gets the last 26 cards from the random shuffled deck. 
  player2Cards = starterDeck.splice(-26)
            //  console.log(player2Cards)
}

function sendScores(){
    document.getElementById('player1Results').innerHTML = p1Score;
    document.getElementById('player2Results').innerHTML = p2Score;

    if (p1Score === 0){
        console.log('player 1 lost')
        p1Score = 26;
        p2Score = 26;
        start_round()
     
    } else if (p2Score === 0){
        console.log('player 2 lost')
        p1Score = 26;
        p2Score = 26;
        start_round()
       
    }
}


function start_round() {
  
  //Make it random out of the 26 cards received by players:
  let card = Math.floor(Math.random() * 26)

  //Place the image
  let selectedCardImg = player1Cards[card].img
  document.getElementById('p1Card').src = "./images/cards/" + selectedCardImg


  //Place the image
  let selectedCardImg2 = player2Cards[card].img
  document.getElementById('p2Card').src = "./images/cards/" + selectedCardImg2

  if (player1Cards[card].rank < player2Cards[card].rank) {
    //Player 2 Wins
    player2Cards.push(player1Cards[card])
    player1Cards.splice(player1Cards[card],1)

    localStorage.setItem('links', JSON.stringify(player1Cards));

    p1Score--;
    p2Score++;

    sendScores()
   // console.log(JSON.stringify(player2Cards))
   
  } else if (player1Cards[card].rank > player2Cards[card].rank) {

    //Player 1 Wins
    player1Cards.push(player2Cards[card])
    player2Cards.splice(player2Cards[card],1)

    localStorage.setItem('links', JSON.stringify(player1Cards));
  

    //console.log('PLAYER 1 CARD')
   // console.log(player1Cards)
   // console.log('PLAYER 2 CARDs')
   // console.log(player2Cards)

    p1Score++;
    p2Score--;

    sendScores()

  } else {
    // alert("TIE!")
    console.log('WAR!');
    console.log(player1Cards)
    console.log(player2Cards)

    sendScores()

  }

}

initialize_game();




