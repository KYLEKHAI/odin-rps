# odin-rps

Rock Paper Scissors Project
This project is a JavaScript implementation of the classic game Rock Paper Scissors. It serves as a demonstration of basic JavaScript skills and problem-solving abilities, showcasing how to create a functional game It also uses HTML and CSS skills for a simple UI/UX design.

Project Details
The project consists of an HTML file (index.html), a CSS file (style.css), and a JavaScript file (script.js). The HTML file provides the structure of the game interface, the CSS file defines the styling, and the JavaScript file contains the game logic.

HTML Structure
The index.html file contains the following elements:

- The heading displaying the title of the game.
- A description of the game rules and objective.
- An animated GIF illustrating the game.
- A fixed position div at the bottom of the page showing announcements.
- A ticker element within the announcements div.
- The content of the ticker, displaying copyright information.

CSS Styling
The style.css file defines the styling for various elements in the game. It includes the following CSS properties:

text-align, font-family, margin, and padding: Setting styles for text alignment, font, and spacing.
font-size, margin-bottom: Styles applied to the heading element (h1).
.center: Styles for centering the animated GIF.
background-color, height: Setting the background color and height of the page.
.announcements: Styles for the announcements div.
.announcements .ticker: Styling for the ticker element.
.announcements .news-content p: Styling for the text content within the ticker.
JavaScript Logic
The script.js file contains the JavaScript code responsible for the game functionality. It includes the following key components:

getRandomInt(max): A function that generates a random integer between 0 and max.
getComputerChoice(ranNum): A function that maps the generated random number to "Rock", "Paper", or "Scissors" based on specific conditions.
playerWins and computerWins: Variables to keep track of the number of wins for the player and computer.
Button elements for rock, paper, and scissors, each with event listeners.
updateDisplay(result): A function that updates the result display based on the outcome of the game.
playRound(playerSelection): The main function that processes the game logic for each round.
getResult(playerSelection, computerSelection): A function that determines the outcome of a round based on the player's and computer's selections.

Getting Started
To run the Rock Paper Scissors game locally, follow these steps:

Method 1:
Click the link below:
https://kylekhai.github.io/odin-rps/

Method 2:
Download or clone the project repository from GitHub.
Open the index.html file in a web browser.
Click on the buttons to make your choices and play the game.
The game will display the round results and keep track of the score until a player reaches 5 points.
Feel free to explore and modify the code to enhance the game or further develop your JavaScript skills.

This project was created as part of The Odin Project Foundations Course with inspiration from The Odin Project community.
