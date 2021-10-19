let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var btn = document.createElement('button');
btn.innerText = "Start the Game!"
btn.addEventListener('click', (startingEvent) => {startingEvent.target.hidden = true});
document.getElementById('next-lbl').appendChild(btn);


// use the value stored in the nextPlayer variable to indicate who the next player is

let playerA = 'X';
let playerB = 'O';



//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
     // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
        for(i = 0; i < 9; i++) {
        let cell = 'c' + (i+1);
        var btn2 = document.createElement('button');
        btn2.className = 'button';
        document.getElementById(cell).appendChild(btn2);
    }
   }

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    
        // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    
    let btn3 = event.target;
    btn3.innerText = nextPlayer;
    
    if (nextPlayer =='X') {
    
        nextPlayer = 'O';
    }
    else if(nextPlayer == 'O'){
        
        nextPlayer = 'X';
    }
   
    event.target.disabled = 'disabled';
    event.target.disabled = true;

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl');
        
        let heading = document.createElement('h1');
        heading.innerText = "Game Over";

        lbl.appendChild(heading);

    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let clicked = true;

    for(i = 0; i < btns.length; i++) {
        if (!btns[i].disabled) {
            clicked = false;
        }
    }
return clicked;

}
