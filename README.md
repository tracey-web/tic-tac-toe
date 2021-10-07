# Tic Tac Toe - Project0

## Project Brief

### Technical Requirements

:white_check_mark: Render a game board in the browser
:white_check_mark: Switch turns between X and O (or whichever markers you select)
:white_check_mark: Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
:white_check_mark: Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
:white_check_mark: Use Javascript for DOM manipulation
:white_check_mark: Deploy your game online, where the rest of the world can access it
:white_check_mark: Use semantic markup for HTML and CSS (adhere to best practices)

### Bonus Content Attepted
These are for extra credit! Don't focus on these until you've hit the core requirements.

* Keep track of multiple game rounds with a win counter
* Allow players to customize their tokens (X, O, name, picture, etc)
* Get inventive with your styling, e.g. use hover effects or animations to spiff things up
Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
* Support custom board sizes: default is 3x3 but you could allow users to choose a larger board
* Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide
* TRICKIEST: Create an AI opponent: teach Javascript to play an unbeatable game against you

### Necessary Deliverables
:white_check_mark: A working game, built by you, hosted somewhere on the internet
:white_check_mark: A link to your hosted working game in the URL section of your Github repo
:white_check_mark: A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
:white_check_mark: A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

## Code Discussion

### Psudo Code & Plan

:pacman: need $your_turn & $winner etc. variables 
:pacman: create board with css - table, rows and cells. 
:pacman: player turn as a boolean O = true, X = false 
:pacman: take turn - click on square 
:pacman: current player switches to next player and next player becomes the current player 
:pacman: error if player clicks on a cell already active 
:pacman: is the game over? 
:pacman: mark/change cell style (change class) to show as engaged 
:pacman: $winner based on the cell state - check all 4 directions 
:pacman:no? are there empty cells? next player, else there is a tie 

### Coding process

:speech_balloon: more to come.
