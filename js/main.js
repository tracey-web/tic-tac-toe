// Project0 - Tic Tac Toe

/* 
- need $your_turn & $winner etc. variables 
- create board with css - table, rows and cells. 
- player turn as a boolean O = true, X = false 
- take turn - click on square 
- current player switches to next player and next player becomes the current player 
- error if player clicks on a cell already active 
- is the game over? 
- mark/change cell style (change class) to show as engaged 
- $winner based on the cell state - check all 4 directions 
- no winner? are there empty cells? next player, else there is a tie 
*/ 

$(document).ready(function(){

  // Create board by selecting all of the td's into the variable 
  const $squares = $("#board td"); 

  // The game states 
  let $your_turn = $("#turn"); 
  let $winner = $("#winner"); 

});