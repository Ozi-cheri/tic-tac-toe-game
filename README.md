# Tic Tac Toe Game

![Screenshot](assets/images/screenshot1.png)

## Project Overview
This is a web-based Tic-Tac-Toe game designed for two players X and O, featuring a clean and responsive design. Players alternate between placing X and O on a 3x3 grid, with the game determining the winner based on standard Tic-Tac-Toe rules. The game also includes a scoreboard, player turn indicator, and a play again option. Additionally, there is  404 error page for handling none-existent pages and  a custom favicon to enhance the game branding.

## Table of Contents
- [Features](#features)
- [User Experience](#user-experience)
- [User Stories](#user-stories)
- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [Wireframes](#wireframes)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Frameworks, Libraries And Tools](#frameworks-libraries-and-tools)
- [Code Validation](#code-validation)
- [Accessibility](#accessibility)
- [Manual Testing](#manual-testing)
- [Future Enhancements](#future-enhancements)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## Features
- **Two-player game**: Because it is a two player game,they alternates turns between themselves.It clearly indicates whose turn it is on the board

![Screenshot](assets/images/screenshot19.png)

- **Header**: The header which is boldy written contains the name  of the website.

![Screenshot](assets/images/screenshot3.png)

- **Scoreboard**: This tracks each player’s score throughout multiple rounds respectively.

![Screenshot](assets/images/screenshot4.png)


- **Win and Draw Detection**: In this part, it declares the winner when a player gets three marks in a row (horizontally, vertically, or diagonally), or announces a draw when the board is full.

![Screenshot](assets/images/screenshot9.png)

Reference image when a draw is achieved

![Screenshot](assets/images/screenshot8.png)

- **Play Again**: The play again button allows players to reset the board and start a new game without resetting the scores. 

![Screenshot](assets/images/screenshot7.png)

- **404  Error Page**: If a user attempts to visit a non-existent page on the site, they will be directed to a custom 404 error page that includes a friendly message and a link to return to the home page.To test the 404 page, navigate to any incorrect URL (e.g., /non-existent-page).You will be redirected to the 404.html page.

![Screenshot](assets/images/screenshot15.png)

- **Favicon**: A custom favicon has been included to enhance the game's branding. The favicon file is located in the assets/favicon/folder.

[Back to Top](#)

## User Experience
 * The game is designed to provide an intuitive and engaging user experience, with a clean layout and clear instructions. The game board is large and responsive, ensuring that players can easily click on the cells on both desktop,laptops,ipads and mobile devices. The current player's turn is displayed prominently, along with real-time score updates. An "Instructions" popup is available for new users making the game more engage and flexible to use.

## User Stories
 * As a new player,i want to see clear instructions for the game,so I can understand how to play before starting.

 * As Player X or Player O,i want to see whose turn it is clearly displayed,so i know when it’s my turn to make a move.

 * As a user,i want the game to declare a winner and update the score automatically and immediately so I can see results right after the game ends.

 * As a user,i want to be able to restart the game at any time,so I can quickly start over if i make a mistake.

 * As a  User,i want the game layout to adjust to my screen size,so i can comfortably play the game on any device i want.

 * As a Player,i want to be notified of a draw,so i know when neither player has won.

 * As a user,i want a simple, accessible scoreboard,
so I can easily keep track of my score against my opponent.

## Color Scheme 

![Screenshot](assets/images/screenshot20.png)


 * Color: Beige (#F5F5DC). The beige color is used as the background for the entire page, creating a warm and inviting look. 

 * Color: Light yellow (#eb4). The  game-box area has a light yellow background, which helps distinguish it as the primary interactive area. 
Scoreboard, player o,x and player's turn section inherits the game-box, #eb4 background color as well.

 * Color: Teal green (#397979) is used for the game board with a medium gray (#555) background when hovered to signal interactivity, making it clear when a cell is clickable.

 * Color: Teal Green (#397979) here is used again for play again,instructions and close button with a dark gray(#333) background when hovered while the Popup Instructions Box uses the beige color as the background color.

## Typography

 * The font family used for this project is **Arial, sans-serif**, which is known for its readability and modern feel.
 * Sans-serif is used as a fallback in case Arial isn’t available on the user's device.

 ## Wireframes



                                                    
 |  Page       |             Mobile  Version        |         Desktop Version
 |-------------|------------------------------------|--------------------------------
 |  Home       |![Ref](assets/wireframes/image4.png)|![Ref](assets/wireframes/image3.png)
 |             |                                    |
 |             |                                    |
 |             |                                    |
 |Instructions |![Ref](assets/wireframes/image6.png)|![Ref](assets/wireframes/image5.png)
 |             |                                    |
 |             |                                    |
 |             |                                    |
 | Page 404    |![Ref](assets/wireframes/image2.png)|![Ref](assets/wireframes/image1.png)
 |             |                                    |
 

[Back to Top](#)

## How To Play 
 * When the instruction button is clicked, the how to play pops up.
 The game begins with Player x's turn.Players take turns clicking on empty squares to place their marks (X or O).The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the round.If all squares are filled and no player has three in a row and vise versa, the game declares a draw.To start a new round, click the "Play Again" button. The scores remain, but the board resets for a new game to start.Players can keep track of their scores using the scoreboard above the game board. This section can be closed by using the **close button** below at the left corner.

 ![Screenshot](assets/images/screenshot2.png)


## Technologies Used

- **HTML5**: For structuring the content of the game.
- **CSS3**: For styling the layout and making the game responsive across devices.
- **JavaScript**: For game logic, including turn-based play, score tracking, and result declaration.

## Frameworks Libraries And Tools 

* This project leverages various technologies, programs, and validation tools to ensure functionality, style, and accessibility. Below are lists of the main tools used:

* [Favicon Generator](https://favicon.io/): It was used to created a custom favicon for the application, enhancing brand identity and easy browser tab recognition.

* [W3C HTML Validator](https://validator.w3.org/): Used to check the HTML code for syntax errors, ensuring proper HTML structure and compatibility across browsers.
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): Evaluates the CSS code, checking for errors in syntax, property usage, and compatibility with standards.
* [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/): Evaluates web accessibility, ensuring the project meets web content accessibility guidelines.
* [Am I Responsive](http://ami.responsivedesign.is/): Used to preview how the project appears on different device sizes, ensuring responsiveness across various screens.
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/): It was used to test responsiveness and  accessibility.
* [JSHint](https://jshint.com/): It was used to validate  JavaScript code.
* [Gitpod](https://gitpod.io) : This was used for writting codes, commit and then pushed to Github.
* [GitHub](https://github.com) : It was used to store the project after pushing.
* [Balsamiq](https://balsamiq.com/) : This was used to create wireframes for both mobile and desktop versions.

* [Coolors](https://coolors.co/) : This was used to generate a color palette.




 [Back to Top](#) 
 
 ## Testing


 * Testing Game Board


|User Story| Acceptance Criteria|    Test Case        |    Expected Result
|----------|--------------------|---------------------|--------------------     
|1.Start a |-Game board is      |-Open the game.check |-All cells are empty.     
|new game  |empty at the start  |if all cells are     |            
|          |                    |empty.               | 
|          |                    |                     |
|2.See     |-Display shows which|-Open the game,      |-Display shows 
|player    |player's turn it is.|confirm the initial  |correct player
| turn     |                    |display shows player |turn.
|          |                    |x's turn.            |
|          |                    |                     |
|3.Display |-Player scores      |-Play and win games  |-Scores update 
| score    |are visible.it      |as player x and o.   |accurately.
|          |updates after each  |Check if each players|
|          |game.               |scores increase  as  |
|          |                    |they play.           |
|          |                    |                     |
|4.Play    |-Button is visible  |-When clicked,it     |-It resets the 
| again    |and clickable.      |reset the board to   |game board.
|          |                    |empty.               |
|          |                    |                     |
|5.How to  |-Instruction button |-When clicked, it    |When clicked,it pops up
|Play      |is visible and      |displays how to      |how to play.Close 
|          |clickable.          |play.Close button is |button is functional too.
|          |                    |visible and clickable|


 ## Code Validation

 * All HTML, CSS, and JavaScript codes for the Tic-Tac-Toe game has been validated using [W3C HTML Validator](https://validator.w3.org/)
 [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 [JSHint](https://jshint.com/) respectfully, to ensure it meets web standards and is free from syntax errors.

 * HTML Validation

 ![Screenshot](assets/images/screenshot18.png)

 * CSS Validation

 ![Screenshot](assets/images/screenshot17.png)

 * JavaScript Validation

 ![Screenshot](assets/images/screenshot21.png)


 ## Accessibility 

 * Google Lighthouse                                                              [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
 was used to analyze the quality of the page focusing on performance, accessibility, SEO and best practices.  

 ### lighthouse Reports

 * Home Page

 ![Screenshot](assets/images/screenshot6.png)

  * 404 Page

 ![Screenshot](assets/images/screenshot5.png)


 * Accessibility Testing with WAVE
    * To ensure the Tic-Tac-Toe game is accessible to a wide range of users, I used the WAVE (Web Accessibility Evaluation Tool) to scan the game interface and identify any accessibility barriers. This included checking color contrast, image alt text, and HTML structure.

![Screenshot](assets/images/screenshot16.png)
 
 [Back to Top](#) 

 ## Manual Testing

* Browser Compatibility


  * The game was tested on both desktop and mobile versions of each browser to ensure responsive design and optimal functionality. Key functionalities like game board interactions, score display, the play gain and instruction buttons were verified in each browser.

 |  Browser          |  Outcome                    |   Result
 |-------------------|-----------------------------|-------------------
 | 1.Google Chrome   |- Responsiveness,appearance  | Pass
 |                   | and game funtions looks     |	
 |                   | good.                       |
 | 2.Mozilla Firefox |- Responsiveness,appearance  | Pass
 |       	         | and game function looks     |   
 |               	 | good.                       |    
 | 3.Safari          |- Responsiveness,appearance  | Pass
 |                   | and game function looks     |
 |                   | good.                       | 
 | 4.Microsoft Edge  |- Responsiveness,appearance  | Pass
 |                   | and game function looks     |
 |                   | good.                       |
 
 ## Future Enhancements

 * A functionality to store player scores locally using browser
 storage will be added allowing players to track their game starts over multiple sessions.
 * The user experience will be enhance by adding sound effects when placing markers and animations for game events like winning or drawing.

 ## Solved Bugs 

 * After deploying to **Github**, I noticed that the title,play again button, instructions button,scoreboard were not well positioned on the page as intended.
 The issue was due to missing and  incorrect Css styles. It was fixed by adding the appropriate Css rules to ensure they are all well positioned.

 * The "How to Play" content, which explains the game instructions, was not properly displayed on the screen. The content overflowed the game board. I decided to adjust the css by adding modal box to display the content correctly.

 ## Deployment 

The site was deployed to Github pages through the following steps.

1.In the Github Repository, click on the setting tab at the top.
 
2.Scroll down to the Pages section.

3.From the Source section ,click the dropdown called none and select the main Branch and save.

4.After a few moments, the page refreshes automatically and a link to the website is generated.

The live site can be found here https://ozi-cheri.github.io/tic-tac-toe-game/


 ### Local Clone
 *   Sign up or log in on Gitup
 *   Click the **code** button and copy the provided link.
 *   Enter git clone in the terminal, paste the link and run.

 git clone https://github.com/ozi-cheri/tic-tac-toe-game.git


### How to Fork a Repository
 * Go to the Repository, open the GitHub repository you want to fork.
 * At the top-right corner, click the **Fork** button. This will create a copy of the repository under your GitHub account.

 ## Credits 

 ### Content

 * [Bro Code Javascript Tutorial For Begginners](https://www.youtube.com/watch?v=Ihy0QziLDf0&list), [Openjavascript on YouTube](https://www.youtube.com/watch?v=cTe5vQAm2So),
 [Stack Overflow](https://stackoverflow.com/) and  [W3Schools](https://www.w3schools.com/) were consulted while i develop the project to gain more understanding of some codes.

The idea for the instruction pop up was adapted from 
[W3Schools](https://www.w3schools.com/howto/howto_js_popup.asp)
and
[W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp).

[Back to Top](#)

## Acknowledgements

 * Code institute for the platform.
 * My Mentor Gareth McGirr for his supports and feedbacks.


























