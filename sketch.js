
let img;
let safe;
let x = 700;
let y = 630;

function preload(){
  img = loadImage('kitty.png');
}
function setup() {
  let canvas = createCanvas(1000, 800);
  canvas.parent('maze-holder');
  background('#3A232A');
  image(img,x,y, 150,150);
  safe = true;
}

function draw() {
  background('#3A232A');
  //maze
 noStroke();
 rect(700, 600, 20, 200); //verticle left
 rect(700, 600, 150, 20);// horizontal
 rect(830, 350, 20, 250);// verticle right
 rect(700, 330, 150, 20);// horizontal
 rect(700, 330, 20, 100);// verticle down
 rect(830, 0, 20, 130); // verticle top 
 rect(400, 110, 300, 20); // h
 rect(400, 110, 20, 160);//v 
 rect(180, 270, 300, 20); // h
 rect(0, 110, 200, 20); // h
 rect(200, 270, 20, 160);// v
 rect(180, 430, 300, 20); // h
 rect(460, 440, 20, 160); //v
 rect(0, 600,250,20 );
 circle(30,30, 40); //end point

 image(img,x,y, 150,150);
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    x += 20;
  } else if (keyCode === DOWN_ARROW) {
   y+=20;
  } else if (keyCode === LEFT_ARROW) {
    x -= 20;
  } else if (keyCode === UP_ARROW) {
    y-=20;
  }

  
}

