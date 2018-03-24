//Get a reference to the stage and output
let stage = document.querySelector("#stage");
let output = document.querySelector("#output");

//Arrow key codes
let UP = 38;
let DOWN = 40;
let RIGHT = 39;
let LEFT = 37;

//Add a keyboard listener
window.addEventListener("keydown", keydownHandler, false);

//Arrays to store the location of tiles and game objects
let gameMap = {

    objects:
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 5, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0]
    ],



    tiles:
    [
        [1, 2, 1, 0, 0, 0, 3, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 2, 0, 0, 0],
        [1, 2, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 1, 2]
    ]


}

//Assigning tiles and objects a value to match above map
let tileVar = {
    blank: 0,
    oilRig: 2,
    warBoy: 1,
    garage: 3,
    car: 4,
    hunterKiller: 5
};

//Sets beginning values and holds current values for fuel,ammo,exp
let gameVar = {
    fuel: 10,
    ammo: 10,
    experience: 0
};

//Starting gameMessage
let gameMessage = "Get to your garage before they find you!";

//The size of each cell
let SIZE = 64;

//The number of rows and columns
let ROWS = gameMap.tiles.length;
let COLUMNS = gameMap.tiles[0].length;

//Variables to store the car and monsters location
let carRow;
let carColumn;
let monsterRow;
let monsterColumn;

//Loop to set current icon location for car and monster
for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
        if (gameMap.objects[row][column] === tileVar.car) {
            carRow = row;
            carColumn = column;
        }
        if (gameMap.objects[row][column] === tileVar.hunterKiller) {
            monsterRow = row;
            monsterColumn = column;
        }
    }
}

render();


//Function to handle what happens when the player clicks the arrow keys
function keydownHandler(event) {
    switch (event.keyCode) {

        //Each case will clear the current cell and then add for down/right and decrement for up/left
        //it will then update the map with the objects current location
        case UP:
            if (carRow > 0) {
                //clears
                gameMap.objects[carRow][carColumn] = 0;

                //decrement because up
                carRow--;

                //update the array with current location
                gameMap.objects[carRow][carColumn] = tileVar.car;
            }
            break;

        case DOWN:
            if (carRow < ROWS - 1) {
                gameMap.objects[carRow][carColumn] = 0;
                carRow++;
                gameMap.objects[carRow][carColumn] = tileVar.car;
            }
            break;

        case LEFT:
            if (carColumn > 0) {
                gameMap.objects[carRow][carColumn] = 0;
                carColumn--;
                gameMap.objects[carRow][carColumn] = tileVar.car;
            }
            break;

        case RIGHT:
            if (carColumn < COLUMNS - 1) {
                gameMap.objects[carRow][carColumn] = 0;
                carColumn++;
                gameMap.objects[carRow][carColumn] = tileVar.car;
            }
            break;
    }

    //switch to find out what type of tile the car is on
    switch (gameMap.tiles[carRow][carColumn]) {
        case tileVar.blank:
            break;

        case tileVar.warBoy:
            fight();
            break;

        case tileVar.oilRig:
            trade();
            break;

        case tileVar.garage:
            endGame();
            break;
    }

    //Move the monster
    moveMonster();


    //Find out if the hunting party "monster" has found our hero.  Is determined by if hero and monster are in the same cell
    if (gameMap.objects[carRow][carColumn] === tileVar.hunterKiller) {
        endGame();
    }

    //Subtract some fuel each turn
    //issue was with missing space between gameVar.fuel and decrement -- note to self --
    gameVar.fuel--;

    //Find out if you have enough guzzle to carry on
    if (gameVar.fuel <= 0 ) {
        endGame();
    }

    //Render the game
    render();
}


//Function to move the "monster" in a seemingly random direction 
//Borrowed from islandAdventure as the logic was sound and fits current game
function moveMonster() {

    //Sets the 4 possible directions our monster can move
    let UP = 1;
    let DOWN = 2;
    let LEFT = 3;
    let RIGHT = 4;

    //An array to store the valid direction that
    //the monster is allowed to move in
    let validDirections = [];

    //The final direction that the monster will move in
    let direction = undefined;

    //Find out what kinds of things are in the cells 
    //that surround the monster. If the cells contain nothing,
    //push the corresponding direction into the validDirections array
    if (monsterRow > 0) {
        let thingAbove = gameMap.tiles[monsterRow - 1][monsterColumn];
        if (thingAbove === tileVar.blank) {
            validDirections.push(UP);
        }
    }
    if (monsterRow < ROWS - 1) {
        let thingBelow = gameMap.tiles[monsterRow + 1][monsterColumn];
        if (thingBelow === tileVar.blank) {
            validDirections.push(DOWN);
        }
    }
    if (monsterColumn > 0) {
        let thingToTheLeft = gameMap.tiles[monsterRow][monsterColumn - 1];
        if (thingToTheLeft === tileVar.blank) {
            validDirections.push(LEFT);
        }
    }
    if (monsterColumn < COLUMNS - 1) {
        let thingToTheRight = gameMap.tiles[monsterRow][monsterColumn + 1];
        if (thingToTheRight === tileVar.blank) {
            validDirections.push(RIGHT);
        }
    }

    
    //If a valid direction was found, Randomly choose one of the 
    //possible directions and assign it to the direction variable
    if (validDirections.length !== 0) {
        let randomNumber = Math.floor(Math.random() * validDirections.length);
        direction = validDirections[randomNumber];
    }

    //Move the monster in the chosen direction
    switch (direction) {
        case UP:
            //Clear the monster's current cell
            gameMap.objects[monsterRow][monsterColumn] = 0;
            //Subtract 1 from the monster's row
            monsterRow--;
            //Apply the monster's new updated position to the array
            gameMap.objects[monsterRow][monsterColumn] = tileVar.hunterKiller;
            break;

        case DOWN:
            gameMap.objects[monsterRow][monsterColumn] = 0;
            monsterRow++;
            gameMap.objects[monsterRow][monsterColumn] = tileVar.hunterKiller;
            break;

        case LEFT:
            gameMap.objects[monsterRow][monsterColumn] = 0;
            monsterColumn--;
            gameMap.objects[monsterRow][monsterColumn] = tileVar.hunterKiller;
            break;

        case RIGHT:
            gameMap.objects[monsterRow][monsterColumn] = 0;
            monsterColumn++;
            gameMap.objects[monsterRow][monsterColumn] = tileVar.hunterKiller;
    }
}

//Function to generate a number between supplied min/max
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to handle trade
function trade() {
    //oil is set by adding current xp and a random num between 3 and 7
    //cost is determined by random num between 2 and 6
    let oilAvail = gameVar.experience + getRndInteger(3, 7);
    let cost = getRndInteger(2, 12);

    //logic to compare the cost to the ammo the hero has and determine if they can purchase
    if (gameVar.ammo > cost) {
        gameVar.fuel += oilAvail;
        gameVar.ammo -= cost;
        gameVar.experience += 2;

        gameMessage
            = "You buy " + oilAvail + " guzzle"
            + " for " + cost + " bullets."
    }
    else {
        //message to let the player know they didn't have enough ammo
        gameVar.experience += 1;
        gameMessage = "You don't have enough ammo!<br/>"
    }
}

//ROCK EM SOCK EM CARS!! AKA Combat function.
function fight() {

    //Generate loot.. this helps determine enemy strength
    let lootFuel = getRndInteger(1, 3);
    let lootAmmo = getRndInteger(1, 5);

    //Heros strength == to exp + ammo
    let heroPower = gameVar.experience + gameVar.ammo;

    //Enemies strength == their loot + rndm num 1-7
    let warboyPower = lootAmmo + lootFuel + getRndInteger(1, 7);

    //If you lose , lose ammo == warboy power divided by 4
    if (warboyPower > heroPower) {

        let lostAmmo = Math.round(warboyPower / 4);
        gameVar.ammo -= lostAmmo;
       
        //Give the player some experience for trying  
        gameVar.experience += 1;

        //Update the game message
        gameMessage
        = "You fought and lost " + lostAmmo + " ammo.<br/>"
        + " Your strength: " + heroPower
        + " Their strength: " + warboyPower;
    }

    //You win!!
    else {
        gameVar.ammo += lootAmmo;
        gameVar.fuel += lootFuel;

        //Add some experience  
        gameVar.experience += 2;

        //Update the game message
        gameMessage
            = "You fight and WIN " + lootAmmo + " ammo and " + lootFuel + " fuel.<br/>"
            + " Your strength: " + heroPower
            + " Their strength: " + warboyPower;
    }
}

const themeMusic = document.getElementById("themeMusic");
const noGas = document.getElementById("noGas");
const warParty = document.getElementById("warParty");
const winMusic = document.getElementById("winMusic");

//hides gameboard, shows winboard, stops themeMusic, plays winu
function winGame() {
    let score = gameVar.ammo + gameVar.fuel + gameVar.experience;
    let winBoard = document.getElementById("winBoard")
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.style.display = "none";
    winBoard.style.display = "block";
    
    themeMusic.pause();
    winMusic.play();

    output2.innerHTML


        += "<br>Congratulations you made it home!<br/><br/> Your final score is: " + score;

}
function endGame() {
    if (gameMap.tiles[carRow][carColumn] === tileVar.garage) {
        //Calculate the score
        let score = gameVar.ammo + gameVar.fuel + gameVar.experience;

        

        winGame();

        console.log(`music stoped/started
                     winGame func completed`);

        
    }
    else if (gameMap.objects[carRow][carColumn] === tileVar.hunterKiller) {

        themeMusic.pause();
        warParty.play();

        gameMessage
            = "The war party has found you! <br/>  Better luck next time.";

        console.log(`music stoped/started
                     warBoys win`);
    }
    else {
        //if no gas stops themeMusic and plays no gas music
        if (gameVar.fuel <= 0) {
            themeMusic.pause();
            noGas.play();
            gameMessage += "<br/> You've run out of guzzle!";

            console.log(`music stoped/started
                        out of gas`);
        }
        if (gameVar.ammo <=0) {
            gameMessage += "<br/> You've run out of ammo and cannot defend yourself!";
        }
        
        gameMessage
            += " Better luck next time.";
    }

    //Remove the keyboard listener to end the game
    window.removeEventListener("keydown", keydownHandler, false);
}

function render() {
    //Clear the stage of img cells
    //from the previous turn

    if (stage.hasChildNodes()) {
        for (let i = 0; i < ROWS * COLUMNS; i++) {
            stage.removeChild(stage.firstChild);
        }
    }

    //Render the game by looping through the map arrays
    for (let row = 0; row < ROWS; row++) {
        for (let column = 0; column < COLUMNS; column++) {
            //Create a img tag called cell
            let cell = document.createElement("img");

            //Set it's CSS class to "cell"
            cell.setAttribute("class", "cell");

            //Add the img tag to the <div id="stage"> tag
            stage.appendChild(cell);

            //Find the correct image for this map cell
            switch (gameMap.tiles[row][column]) {
                case tileVar.blank:
                    break;

                case tileVar.oilRig:
                    cell.src = "../images/oilRig.png";
                    break;

                case tileVar.warBoy:
                    cell.src = "../images/warBoy.png";
                    break;

                case tileVar.garage:
                    cell.src = "../images/garage.png";
                    break;
            }

            //Add the car and hunterKiller to the map
            switch (gameMap.objects[row][column]) {
                case tileVar.car:
                    cell.src = "../images/car.png";
                    break;

                case tileVar.hunterKiller:
                    cell.src = "../images/hunterKiller.png";
                    break;
            }

            //Position the cell 
            cell.style.top = row * SIZE + "px";
            cell.style.left = column * SIZE + "px";
        }
    }

    //Display the game message
    output.innerHTML = gameMessage;

    //Display the player's food, gold, and experience
    output.innerHTML
        += "<br>Guzzle: " + gameVar.fuel + ", Ammo: "
        + gameVar.ammo + ", Experience: " + gameVar.experience;
}
