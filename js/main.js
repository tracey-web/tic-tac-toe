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
- no? are there empty cells? next player, else there is a tie 
*/ 

// reset tournament function - needs to be outside document so scoped to the window
function resetTournament() {
    localStorage.clear(); 
    window.location.reload();
}

$(document).ready(function () { 
    // set local storage for saving the number of wins for player x and player 0
    if(!localStorage.getItem("X-wins") || !localStorage.getItem("O-wins")) {
        localStorage.setItem("X-wins", 0);
        localStorage.setItem("O-wins", 0);
    }

    $("#x-total-wins").html(localStorage.getItem("X-wins"));
    $("#o-total-wins").html(localStorage.getItem("O-wins"));

    
    
    // Create board by selecting all of the td's into the variable 
    const $squares = $("#board td"); 
    
    // The game states 
    let $your_turn = $("#turn"); 
    let $winner = $("#winner");
    let $turn_prompt = $("#turn-prompt"); 
    
    // Player turn boolean O = true, X = false 
    let turn = false; 
    
    // Board square selection 
    $squares.on("click", function () { 
    
        // current player switches to next player and next player becomes the current player 
      let current_player = turn ? "O" : "X"; 
      let other_player = turn ? "X" : "O"; 
    
      // error if player clicks on a square already is 
      if ($(this).data("player") != null) { 
        window.alert("This square is already in play!"); 
        return; 
      } 
    
      // is the game over? 
      if ($winner.html() != "") { 
        window.alert("GAME OVER!"); 
        return; 
      } 
 
      // change square style (change class) to show as engaged 
      $(this) 
        .data("player", current_player) 
        .html(current_player) 
        .toggleClass("pushed"); 
 
        // second player's turn 
      turn = !turn; 
      $your_turn.html(other_player); 
 
      // is there a win and are there still empty squares on the board? 
      if (!checkWin() && $(".pushed").length === 9) { 
        $your_turn.html("GAME OVER"); 
        $winner.html("It's a TIE!!"); 
      } 
    }); 
    
 
    const checkWin = function () {
      for (let i = 0; i < 3; i++) { 
        let j = 3 * i; 
        if ( 
          $squares.eq(j).data("player") === $squares.eq(j + 1).data("player") && 
          $squares.eq(j).data("player") === $squares.eq(j + 2).data("player") && 
          $squares.eq(j).data("player") != null 
        ) { 
          // Highlight wining squares 
          $squares.eq(j).addClass("winning-square"); 
          $squares.eq(j + 1).addClass("winning-square"); 
          $squares.eq(j + 2).addClass("winning-square"); 

          // WINNER!
          $turn_prompt.hide(); 
          $your_turn.html("GAME OVER!"); 
          $winner.html($squares.eq(j).data("player")); 
          storeWin($squares.eq(j).data("player"))
          return true; 
        } 
      } 

      // check row vertically 
      for (let i = 0; i < 3; i++) { 
        if ( 
          $squares.eq(i).data("player") === $squares.eq(i + 3).data("player") && 
          $squares.eq(i).data("player") === $squares.eq(i + 6).data("player") && 
          $squares.eq(i).data("player") != null 
        ) { 
          // highlight winning squares 
          $squares.eq(i).addClass("winning-square"); 
          $squares.eq(i + 3).addClass("winning-square"); 
          $squares.eq(i + 6).addClass("winning-square"); 

          // WINNER!
          $turn_prompt.hide();  
          $your_turn.html("GAME OVER"); 
          $winner.html($squares.eq(i).data("player")); 
          storeWin($squares.eq(i).data("player"))
          return true; 
        } 
      } 

      // check row diagonally left to right 
      if ( 
        $squares.eq(0).data("player") === $squares.eq(4).data("player") && 
        $squares.eq(0).data("player") === $squares.eq(8).data("player") && 
        $squares.eq(0).data("player") != null 
      ) {
        $squares.eq(0).addClass("winning-square"); 
        $squares.eq(4).addClass("winning-square"); 
        $squares.eq(8).addClass("winning-square"); 

        // WINNER!!!
        $turn_prompt.hide();  
        $your_turn.html("GAME OVER!"); 
        $winner.html($squares.eq(0).data("player")); 
        storeWin($squares.eq(0).data("player"));
        return true; 
      } 

      // check squares diagonally right to left 
      if ( 
        $squares.eq(2).data("player") === $squares.eq(4).data("player") && 
        $squares.eq(2).data("player") === $squares.eq(6).data("player") && 
        $squares.eq(2).data("player") != null 
      ) { 
        // highlight winning $squares 
        $squares.eq(2).addClass("winning-square");
        $squares.eq(4).addClass("winning-square"); 
        $squares.eq(6).addClass("winning-square"); 

        // WINNER!!!
        $turn_prompt.hide();  
        $your_turn.html("GAME OVER!"); 
        $winner.html($squares.eq(2).data("player")); 
        storeWin($squares.eq(2).data("player"));
        return true; 
      }
      return false; 
    };

    const storeWin = function (winner) {
        const currentWins = localStorage.getItem(`${ winner }-wins`)
        localStorage.setItem(`${ winner }-wins`, parseInt(currentWins) + 1);
    }
  });