//on load function ensures text and pictures show up when the page loads
window.onload = function () {
    //gets the canvas to draw to and sets it as 2d
    var c = document.getElementById("alienCanvas");
    var ctx = c.getContext("2d");

    //gathers image to use below and sets up gradient for text
    var img = document.getElementById("alien");
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);

    //sets the background color and creates the rectangle of the sign
    ctx.fillStyle = "#ffd700";
    ctx.fillRect(0, 0, 100, 150);

    //adds alien image and sets size of image
    ctx.drawImage(img, 20, 40, 55, 70);

    //sets font color , size, and adds text 
    gradient.addColorStop("1.0", "black");
    ctx.fillStyle = gradient;
    ctx.font = "18px Roadway";
    ctx.fillText("ALIEN", 20, 25);
    ctx.fillText("CROSSING", 5, 135);


    //starts new canvas and gets image by id
    var c = document.getElementById("noGhosts");
    var ctx = c.getContext("2d");


    //draws outer triangle for yield sign and then fills with red
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(0, 30);
    ctx.lineTo(150, 30);
    ctx.lineTo(75, 200);
    ctx.lineTo(0, 30);
    ctx.fillStyle = "#cc0605";
    ctx.fill();

    //draws inner triangle for yeild sign and then fills white
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(20, 40);
    ctx.lineTo(130, 40);
    ctx.lineTo(75, 175);
    ctx.lineTo(20, 40);
    ctx.fillStyle = "#ffffff ";
    ctx.fill();


    //re-uses gradient var from above, and then sets up/ places text
    gradient.addColorStop("1.0", "black");
    ctx.fillStyle = gradient;
    ctx.font = "15px Roadway";
    ctx.fillText("YIELD", 50, 60);
    ctx.fillText("TO", 65, 80);
    ctx.fillText("TROLLS", 45, 100);


}