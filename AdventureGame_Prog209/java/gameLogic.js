
//Arrays for player to move around the world , flavor text, and for images ."

let map = [];

map[0] = "You decend to the undercroft and look once more on the door to the surface and saftey.  Torches gutter in their sconces casting enough light for you to see by.  Based on their age you can tell they have been recently replaced.  The stairs behind you head SOUTH deeper into the creatures lair and if only you had a team of miners a collapsed tunnel leads to the EAST.";
map[2] = "When you crawl into the room one of the skeletons eyes begin to glow.  You grasp your knife between sweaty hands preparing for a fight.  The skeleton issues an ethereal chuckle at your display.  “Mortal if I wished you dead there would be nothing you could do to stop me.  But I sense that you seek to destroy my tormentor and an enemy of my enemy is my ally.  Take my armaments and the key to his lair.  The riddle to his lair is mere childs play but I will give it to you anyway.  The answer is……”  Suddenly a roar of anger reverberates from somewhere deep in the undercroft.  In answer the skeleton slowly crumbles to dust but you swear a look of satisfaction crosses its face before the end.";
map[4] = "As you walk down the hallway you can hear its chuffing breath and smell its putrid musk before you can ever see it.  When it finally comes into view the horror it is pales in comparison to its lair. What seems like hours passes as you take in its atrocities but eventually it notices you.  The creature bellows out a challenge and swings its arms wide brandishing its blood soaked implements.  The time for thought is past now it is now the time for action!";
map[5] = "You descend the stairs and force open the door.  A loud creak issues forth from the door echoing into the lair of the creature below you.  A smell of high carrion from somewhere deeper in the undercroft catches your nose almost causes you to retch.  There is a door to the EAST and a hall way to the SOUTH.";
map[6] = "You have to cover your face as you have found the source of the smell. The cells here are not locked as their occupants will never attempt to leave on their own.  Even averting your gaze you can tell that the creature living in the undercroft has a healthy appetite.  To the EAST is another door leading you deeper into the depraved creature’s lair.";
map[7] = "Flies buzz above an open cask suggesting at its gruesome contents.  The singular cell here also is unlocked although it thankfully has no occupant.  Beyond the bend of the room to the SOUTH is another door.";
map[9] = "An ancient door stands in your way but by the sounds coming from beyond it you know this is the last hurdle before you face the beast. Set in the door are three dials that are currently locked and an oddly shaped set of holes. An ancient and weathered inscription above the door reads “The wyvern watched from upon its perch and chuckled at the two lesser species below it.  Wolf and eagle were at it again battling over wolf’s kill.  Eagle soared above wolf and swooped down upon him but wolf jumped higher than eagle believed he could and bore eagle to the earth.  Now wolf had both dinner and a snack.”";
map[10] = "Descending even further you find yourself at a dead end.  A barred gate keeps you from moving further. To the NORTH lies the room you just came from.";
map[12] = "The cells here are stuffed near to capacity stoking your anger and steeling your nerves.  The creature must pay for what it has done!  To the EAST another door beckons you forward.";
map[13] = "Bloody paw prints lead up the stairs to the EAST and by how fresh they are you can tell the undercrofts villain is at home.  ";
map[14] = "Again the fresh paw prints up the stairs to the NORTH tell you that this is most definitely the way to the villain’s lair.";
map[44] = "There is a secret beneath your city.  For years it has slept biding it's time and was all but forgotten.  Now it again wanders the woods at night taking what does not belong to it. You alone know where it lairs and while none will come to help you someone must put the evil to rest.  Armed only with a rusty knife do you dare venture into the undercroft in search of the horror beneath?";
map[55] = "With a snicker snack of your magical spear you delt blow after blow to the creature.  Its claws sought to rend you but your shield had a mind of its own and met them mid swing time and time again.  In the end it drew one last ragged breath, blood flecking its spittle, and died a quiet death fitting for a creature of the shadows.  The child you found is the only living soul who will ever believe you and with her parents dead you are now her sole guardian. Years later you and that child live a more peaceful life and when asked about your mementos you laugh them off as if they aren’t anything special.  But you both know and someday you will hand those tools down to her for if another creature takes up residence in the undercroft someone will need to deal with it.";
map[65] = "Bravery can only take a person so far.  You faced the creature with what little you had but blow after blow the creature bested you.  In the end it hung you in a corner and you had to listen as it snacked late into the night.  As if the gods looked favorably on your deeds what little life was left in you fled before its next meal. Your last thoughts were to the people left behind in the city.  Undefended.  Unprepared.  Unwilling to accept the monster fleecing their flock.";
map[75] = "You went right up to the door of the undercroft but some part of you decided that a night cap and a barred door were far more prudent.   Live another day you told yourself but you know what will be sacrificed by leaving it alive one more night.  Perhaps you will head back to the town guard tomorrow and tell them again how it’s not wolves.  Or, maybe you will make a fool of yourself with the mayor again.  Or, maybe you will find the courage to go back and finish what only you can.";



let images = [];
images[0] = "room0.jpg";
images[2] = "room2.jpg";
images[4] = "room4.jpg";
images[5] = "room5.jpg";
images[6] = "room6.jpg";
images[7] = "room7.jpg";
images[9] = "room9.jpg";
images[10] = "room10.jpg";
images[12] = "room12.jpg";
images[13] = "room13.jpg";
images[14] = "room14.jpg";
images[44] = "room44.gif";
images[55] = "room55.gif";
images[65] = "room65.gif";
images[75] = "room75.gif";

//VARIABLES 

//sets loading screen
let mapLocation = 44;

//items for player to interact with
let spear = false;
let shield = false;
let key = false;

//puzzle attributes
let puzzleSolved = false;
let roomSearched = false;
let dial1Locked = true;
let dial2Locked = true;
let dial3Locked = true;
//let trapDisarmed = false;

//Copied straight from the book 

let image = document.querySelector("img");

let item = "";

let playersInput = "";

let gameMessage = "";

let actionsIKnow = ["location","set the top dial as wyvern", "set the middle dial as wolf", "set the bottom dial as eagle", "use key", "take key", "take spear", "take shield", "north", "east", "south", "west", "attack", "spear", "shield", "key", "search", "new", "save game", "load game", "wyvern", "wolf", "eagle"];
let action = "";

let output = document.querySelector("#output");
let input = document.querySelector("#input");


//intial render to show loading screen
render();

//FUNCTIONS
//new game resets all values to base and the map location to 0 and then renders to show location
function newGame() {

    mapLocation = 0;
    spear = false;
    shield = false;
    key = false;
    puzzleSolved = false;
    roomSearched = false;
    dial1Locked = true;
    dial2Locked = true;
    dial3Locked = true;
    //trapDisarmed = false;

    render();
    
}


//saves above variables to localstorage and then alerts player of successful save
function saveGame() {

    localStorage.setItem("mapSave", mapLocation);
    localStorage.setItem("spearSave", spear);
    localStorage.setItem("shieldSave", shield);
    localStorage.setItem("keySave", key);
    localStorage.setItem("puzzleSolvedSave", puzzleSolved);
    localStorage.setItem("roomSearchedSave", roomSearched);
    localStorage.setItem("dial1LockedSave", dial1Locked);
    localStorage.setItem("dial2LockedSave", dial2Locked);
    localStorage.setItem("dial3LockedSave", dial3Locked);
    //localStorage.setItem("trapDisarmedSave", trapDisarmed);
    
    document.getElementById("saveLoad").innerHTML = "<br/><em>Game Saved<em/>";
 

}


//creates new values for saved variables in local storage and then converts the strings back into
//their native format.  then saves current values as local storage then calls to render to show saved location
function loadGame() {

    let saveMap = localStorage.getItem("mapSave");
    let spearSave = localStorage.getItem("spearSave");
    let shieldSave = localStorage.getItem("shieldSave");
    let keySave = localStorage.getItem("keySave", key);
    let puzzleSolvedSave = localStorage.getItem("puzzleSolvedSave");
    let roomSearchedSave = localStorage.getItem("roomSearchedSave");
    let dial1Saved = localStorage.getItem("dial1LockedSave");
    let dial2Saved = localStorage.getItem("dial2LockedSave");
    let dial3Saved = localStorage.getItem("dial3LockedSave");
    //let trapDisarmedSaved = localStorage.getItem("trapDisarmedSave");

    mapLocation = parseInt(saveMap);
    spear = (spearSave === "true");
    shield = (shieldSave === "true");
    key = (keySave === "true");
    puzzleSolved = (puzzleSolvedSave === "true");
    roomSearched = (roomSearchedSave === "true");
    dial1Locked = (dial1Saved === "true");
    dial2Locked = (dial2Saved === "true");
    dial3Locked = (dial3Saved === "true");
    //trapDisarmedSaved = (trapDisarmedSaved === "true");

    render();


}



//the big taco.  please see below for comments on what playGame does
function playGame() {

    //Get the player's input and convert it to lowercase 

    playersInput = input.value;

    playersInput = playersInput.toLowerCase();


    //Reset these variables from the previous turn 

    gameMessage = "";

    action = "";


    //Figure out the player's action 

    for (i = 0; i < actionsIKnow.length; i++) {

        if (playersInput.indexOf(actionsIKnow[i]) !== -1) {

            action = actionsIKnow[i];

            console.log("player's action: " + action);

            break;

        }

    }

    //Choose the correct action from case 

    switch (action) {

        case "location":

            gameMessage = mapLocation;
            break;

        //teach the player game terms
        case "key": case "spear": case "shield":
            gameMessage = "<br/>Try take item or use item instead";
            break;


        case "take key":
            if (mapLocation === 10) {
                gameMessage = "<br/>You strain to reach the key and barely hook it with the tip of your fingers.  It is oddly shaped and hangs heavy on your belt.";
                key = true;
            }
            else {
                gameMessage = "<br/>I don't understand that.  ";
            }
            
            break;

        case "take spear":

            if (mapLocation === 2) {
                spear = true;
                gameMessage = "<br/>Despite obvious neglect the spear looks as though it was forged yesterday.  With it you feel more formidable.";
                
            }
            else {
                gameMessage = "<br/>I don't understand that.  ";  
            }
            
            break;

        case "take shield":

            if (mapLocation === 2) {
                shield = true;
                gameMessage = "<br/>Hefting the shiled you are almost unbalanced as it holds none of the weight you had expected.  Behind it's bulk you feel neigh on invulnerable.";
                
            }

            else {
                gameMessage = "<br/>I don't understand that.  ";
            }
            
            break;

        case "use key":

            if (mapLocation === 9) {

                if (key === true) {
                    dial1Locked = false;
                    gameMessage = "<br/> An audbile clunk can be heard and the top dial spins halfway between a bear and a wolf.";
                }

                else {
                    gameMessage = "<br/>Try as you might nothing you have will work as a key.";
                }
            }

            else if (key === true) {

                gameMessage = "<br/>You try the key in every lock like object near you.  Nothing happens.";
            }

            else {
                gameMessage = "<br/>I don't understand that.";
            }

            break;

            //next three are the logic handling for the puzzle.  Player must first use the key and then solve the puzzle.
            //Until the player "unlocks" all three dials the puzzle cant be solved.

        case "wyvern":
            if (mapLocation === 9) {
                if (dial1Locked === false) {
                    dial2Locked = false;
                    gameMessage = "<br/> An audbile clunk can be heard and the middle dial spins halfway between a moth and an owl.";
                }
                else {
                    gameMessage = "<br/>You try with all your might but the dial remains in its current position.";
                }
            }

            else {

                gameMessage = "<br/>I don't understand that.";
            }
            
            
            break;

        case "wolf":
            if (mapLocation === 9) {
                if (dial2Locked === false) {
                    dial3Locked = false;
                    gameMessage = "<br/> An audbile clunk can be heard again and the bottom dial spins halfway between an owl and an eagle.";
                }
                else {
                    gameMessage = "<br/>You try with all your might but the dial remains in its current position.";
                }
            }

            else {
                gameMessage = "<br/>I don't understand that.";
            }
            

            break;

        case "eagle":
            if (mapLocation === 9) {
                if (dial3Locked === false) {
                    puzzleSolved = true;
                    gameMessage = "<br/> Grinding noises sound from above as unseen mechanisims strain to move the door from your path.  As it slides to the side you can begin to see a hallway that stretches to the NORTH and the demon of undercroft.";
                }
                else {
                    gameMessage = "You try with all your might but the dial remains in its current position.";
                }
            }

            else {

                gameMessage = "<br/>I don't understand that.";
            }


            break;

        case "north":
            //determines if user is in a room that they could go north in.. all other directions mimic this
            if (mapLocation === 5 || mapLocation === 10 || mapLocation === 12 || mapLocation === 14) {
                mapLocation -= 5;
            }

            //ensures starting page feels like a seperate entity by doing nothing when prompted for an action again as above
            else if (mapLocation === 44 || mapLocation === 55 || mapLocation === 65 || mapLocation === 75  ) {

                console.log("player attempting to go north in non dungeon screen");
            }


            //allows player to escape the dungeon
            else if (mapLocation === 0) {

                mapLocation = 75;
            }

            //ensures secret room stays secret... shhh....
            else if (mapLocation === 7 && roomSearched === false) {
                gameMessage = " <br/> You cannot go north from here.";
            }

            else if (mapLocation === 7 && roomSearched === true) {
                mapLocation -= 5;
            }


            else if (mapLocation === 9 && puzzleSolved === false) {
                gameMessage = " <br/> You must solve the puzzle first.";
            }

            else if (mapLocation === 9 && puzzleSolved === true) {

                mapLocation -= 5;
                
            }

            

            else {
                //mapLocation -= 5; 
                gameMessage = " <br/> You cannot go north from here.";
            }
            
            

            break;


        case "east":

            if (mapLocation === 5 || mapLocation === 6 || mapLocation === 12 || mapLocation === 13) {

                mapLocation += 1;
            }

            else if (mapLocation === 44 || mapLocation === 55 || mapLocation === 65 || mapLocation === 75) {

                console.log("player attempting to go east in non dungeon screen");
            }

            else {
                //mapLocation += 1;
                gameMessage = " <br/> You cannot go east from here."; 
            }

            

            break;


        case "south":

            if (mapLocation === 0 || mapLocation === 5 || mapLocation === 7 || mapLocation === 9) {

                mapLocation += 5;
            }
            else if (mapLocation === 2) {

                //subtle hint the player is on the right track
                if (shield === true && spear === true) {
                    gameMessage = "<br/>Shield strapped to your arm and spear at hand you feel ready to defeat the evil.";
                    mapLocation += 5;
                }
                else {

                    mapLocation += 5;
                }

            }

            else if (mapLocation === 4) {

                gameMessage = "<br/>You think of fleeing but your instincts tell you the demon would simply cut you down.";
            }

            else if (mapLocation === 44 || mapLocation === 55 || mapLocation === 65 || mapLocation === 75) {

                console.log ("player attempting to go south in non dungeon screen");
            }

            else {

                //mapLocation += 5;
                gameMessage = " <br/> You cannot go south from here.";
            }

            

            break;


        case "west":

            if (mapLocation === 6 || mapLocation === 7 || mapLocation === 13 || mapLocation === 14) {

                mapLocation -= 1;
            }

            else if (mapLocation === 44 || mapLocation === 55 || mapLocation === 65 || mapLocation === 75) {

                console.log("player attempting to go west in non dungeon screen");
            }

            else {
                //mapLocation -= 1;
                gameMessage = " <br/> You cannot go west from here.";
            }

            

            break;

        case "attack":

            if (mapLocation === 4) {

                //player wins
                if (shield === true && spear === true) {

                    window.open("../winPage.html");
                    
                }

                //player loses
                else {

                    mapLocation = 65;
                }
            }

            else if (mapLocation === 44 || mapLocation === 55 || mapLocation === 65 || mapLocation === 75) {

                console.log("player attempting to attack in non dungeon screen");
            }

            else if (spear === true) {

                gameMessage = "<br/>You swing your spear in a practice arc.  You look and feel formidable.";
            }

            else {

                gameMessage = "<br/>You slash at the darkness surrounding you.  Your blade is light and nimble but feels less than adequate.";
            }

            

            break;

        case "search":
            
            if (mapLocation === 2) {

                gameMessage = " <br/> In the pile of dust the skeleton leaves behind you find a spear and shield that do not show the wear of time.";

            }

            else if (mapLocation === 10) {

                gameMessage = "<br/>You swear you see something just around the corner.  Getting down on your belly you see a key just out of easy reach.";

            }

            else if (mapLocation === 6 || mapLocation === 12) {

                gameMessage = " <br/> You search through the remnants and find nothing.  You are now filthy.";

            }

            else if (mapLocation === 7) {

                roomSearched = true;
                gameMessage = " <br/> You wisely search the cell first before the barrel.  The previous occupant dug a small tunnel barely large enough for a person to the NORTH.";

            }

            else {

                gameMessage = " <br/> You search the room but find nothing.";
            }

            break;

        default:

            gameMessage = " <br/> I don't understand that.";

    }


    //Render the game 

    render();


}



function render() {

    //sets the flavor text based on the current map location in the map array

    output.innerHTML = map[mapLocation];

    //sets the picture as above
    image.src = "../Images/" + images[mapLocation];  


    //Display the game message 

    output.innerHTML += "<br><em>" + gameMessage + "</em>";

    //resets the save message

    document.getElementById("saveLoad").innerHTML = "";


}

