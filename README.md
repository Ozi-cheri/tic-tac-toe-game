# Tic Tac Toe Game


## Project Overview
This is a web-based Tic-Tac-Toe game designed for two players X and O, featuring a clean and responsive design. Players alternate between placing X and O on a 3x3 grid, with the game determining the winner based on standard Tic-Tac-Toe rules. The game also includes a scoreboard, player turn indicator, and a play again option. Additionally, there’s a custom 404 error page for handling non-existent pages.

## Table of Contents
- [Features](#features)
- [User Experience](#user-experience)
- [User Stories](#user-stories)
- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Responsive Design](#responsive-design)
- [Future Enhancements](#future-enhancements)
- [Browser Compatibility](#browser-compatibility)
- [Future Enhancements](#future-enhancements)
- [Deployment](#deployment)
- [Credit](#credit)
- [Acknowledgments](#acknowledgments)

## Features
- **Two-player game**: Because it is a two player game,they alternates turns between themselves.

- **Header**: The header which is boldy written contains the of the website.

- **Scoreboard**: This tracks each player’s score throughout multiple rounds respectively.

- **Player Turn Indicator**: It clearly indicates whose turn it is on the board
- **Win and Draw Detection**: In this part, it declares the winner when a player gets three marks in a row (horizontally, vertically, or diagonally), or announces a draw when the board is full.

- **Play Again**: The play again button allows players to reset the board and start a new game without resetting the scores.

- **Responsive Design**: Optimized for both mobile and desktop devices.
- **404  Error Page**: If a user attempts to visit a non-existent page on the site, they will be directed to a custom 404 error page that includes a friendly message and a link to return to the home page.To test the 404 page, navigate to any incorrect URL (e.g., /non-existent-page).You will be redirected to the 404.html page with the proper styling.

- **Favicon**: A custom favicon has been included to enhance the game's branding. The favicon file is located in the /assets/favicon/ folder.


## User Experience
 * The game is designed to provide an intuitive and engaging user experience, with a clean layout and clear instructions. The game board is large and responsive, ensuring that players can easily click on the cells on both desktop,laptops,ipads and mobile devices. The current player's turn is displayed prominently, along with real-time score updates. An "Instructions" popup is available for new users making the game more engage and flexible to use.

## User Stories
 * As a new player,i want to see clear instructions for the game,so I can understand how to play before starting.

 * As Player X or Player O,i want to see whose turn it is clearly displayed,so i know when it’s my turn to make a move.

 * As a user,i want the game to declare a winner and    update the score automatically and immediately so I can see results right after the game ends.

 * As a user,i want to be able to restart the game at any time,so I can quickly start over if i make a mistake.

 * As a  User,i want the game layout to adjust to my screen size,so i can comfortably play the game on any device i want.

 * As a Player,i want to be notified of a draw,so i know when neither player has won.

 * As a user,i want a simple, accessible scoreboard,
so I can easily keep track of my score against my opponent.

## Color Scheme 


 * Color: Beige (#F5F5DC). The beige color is used as the background for the entire page, creating a warm and inviting look. 

 * Color: Light yellow (#eb4). The  game-box area has a light yellow background, which helps distinguish it as the primary interactive area. 
Scoreboard, player o,x and player's turn section inherits the game-box, #eb4 background color as well.

 * Color: Teal green (#397979) is used for the game board with a medium gray (#555) background when hovered to signal interactivity, making it clear when a cell is clickable.

 * Color: Teal Green (#397979) here is used again for play again,instructions and close button with a dark gray(#333) background when hovered while the Popup Instructions Box uses the beige color as the background color.

## Typography

 * The font family used for this project is **Arial, sans-serif**, which is known for its readability and modern feel.
 * Sans-serif is used as a fallback in case Arial isn’t available on the user's device.

## How to play

 The game begins with Player o.Players take turns clicking on empty squares to place their marks (X or O).The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the round.If all squares are filled and no player has three in a row, the game declares a draw.To start a new round, click the "Play Again" button. The scores remain, but the board resets for a new game to start.Players can keep track of their scores using the scoreboard above the game board.















The game is fully responsive and has been tested on a variety of devices

Mobile Phones: Optimized for small screens with touch interactions.
Tablets: Adjusts to fit medium-sized devices with proper layout and sizing.
Desktop: Designed to look sharp and be functional on larger screens.
