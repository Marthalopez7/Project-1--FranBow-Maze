
let img;
let x = 700;
let y = 630;
let kittyh = 150;
let kittyw = 150;
let maze = [];

function preload(){
  img = loadImage('kitty.png');
}
function setup() {
  let canvas = createCanvas(1000, 800);
  canvas.parent('maze-holder');

 
  maze = [
    [700, 600, 20, 200],//verticle left
    [700, 600, 150, 20],// horizontal
    [830, 350, 20, 250],// verticle right
    [700, 330, 150, 20],// horizontal
    [700, 330, 20, 100],// verticle down
    [830, 0, 20, 130], // verticle top 
    [400, 110, 300, 20], // h
    [400, 110, 20, 160],//v 
    [180, 270, 300, 20], // h
    //[0, 110, 200, 20], // h
    [200, 270, 20, 160],// v
    [180, 430, 300, 20], // h
    [460, 440, 20, 160], //v
    [0, 600,250,20],
  ];
}

function draw() {
  background('#3A232A');
  //maze
 noStroke();
 fill(0);

 for (let w of maze) {
  rect(w[0],w[1],w[2], w[3]);
 }
fill('#ffdce8')
 circle(30,30, 40); //end point

 image(img,x,y, kittyh,kittyw);

 if(endpoint()){
  text("Congrats! You've made it out the maze!", 200, 400 )
  noLoop();
 }
}

function hit (px, py) {
  for (let m = 0; m < maze.length; m++){
    let rx = maze[m][0];
    let ry = maze[m][1];
    let w = maze[m][2];
    let h = maze[m][3];

    if (
      py + kittyh > ry && 
      px + kittyw > rx &&
      px < (rx + w) &&
      py < (ry + h)
    ) {
      return true;
    } 
  } return false;
} 

function keyPressed(){
  let afterx = x;
  let aftery = y;

  if (keyCode === RIGHT_ARROW) {
     afterx += 20;
  } else if (keyCode === DOWN_ARROW) {
   aftery+=20;
  } else if (keyCode === LEFT_ARROW) {
    afterx -= 20;
  } else if (keyCode === UP_ARROW) {
    aftery-=20;
  }

  if (!hit(afterx,aftery)){
    x = afterx;
    y = aftery;
  }
}

function endpoint(){
  let cx = 30;
  let cy = 30;
  let r = 20

  let ex = cx;
  let ey = cy;

  if (cx < x) {
    ex = x;
  } else if (cx > x + kittyw) {
    ex = x = kittyw
  }

  if (cy < y) {
    ey = y;
  } else if (cy > y + kittyh) {
    ey = y + kittyh;
  }

  let d = dist(cx,cy,ex,ey);
  return d < r;
}

