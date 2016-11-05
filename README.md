# Tic Tac Toe Instructions

## Step 1: Create board

Build a Tic Tac Toe board:

1. Create tic-tac-toe.html consisting of a 3x3 grid of button elements. Give each of the buttons in the grid the same class, say "square".
2. Download jquery.js and copy to your directory.
3. Put ```<script src="jquery.js"></script>``` in the head section of your page.
4. Create tic-tac-toe.js in your directory.
5. Put ```<script src="tic-tac-toe.js"></script>``` in the head section of your page just below the jQuery.
Give each of the buttons in the grid the same class, say "square".


## Step 2: Clickable Buttons

Make it so that when you click on a square (a button), the text of the button changes to "o".


## Step 3: Toggle Buttons

Make it so that when you click on a square, the first time, it changes to "o", the second time it changes to "x", and the third time it changes back to blank - "".


## Step 4: Freezing

Make it so that clicking on a filled square (non-blank) will have no effect. Example, you click on a square to turn it to "o". Clicking on it again will cause no change. You will no longer be able to produce "x" squares, at least temporarily.

## Step 5: Game play

Now alternate between "o"'s and "x"'s. Example,

1. You click the first open square, it turns to "o"
2. You click on the second open square, it turns to "x"
3. You click on the first open square again, it doesn't change


## Step 6: Game winner

If "o" or "x" make a row, declare the winner by putting alert text on an element on the page.

1. Select the button elements using a CSS selector
2. Get the text values of the individual buttons into an array (you have the option of doing either 1-dimensional or 2-dimensional array)
3. Write a function or use one you've written to determine the winner
4. Announce the winner


## Bonus

* Keep score - keep track of how many wins vs losses for o vs x
* Make it so the player plays against a computer AI - the AI doesn't have to be smart
* Make it appear as if the AI is thinking (pause for like 5 seconds and display "thinking...")
* Put easter eggs or April fools jokes in there. Maybe just as you thought you were going to win, when you click on the winning square the opponent's piece is put in it instead
