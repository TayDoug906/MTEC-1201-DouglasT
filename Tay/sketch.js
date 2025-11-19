let num = 100;
let slider


let img, img1, img2, img3, img4, img5;
let Music;
let Music1;
let Music2;
let imageShown = false;
let imageShown1 = false;
let imageshown2 = false; 
//images and music
function preload(){
  img = loadImage("Lace_Leave.png");
  img1 = loadImage("Lace_Run.png");
  img2 = loadImage("Lace.png");

  Music = loadSound("Lace_.mp3")
  Music1 = loadSound("Grim.mp3")
  Music2 = loadSound("Mantis.mp3")
}
function setup(){
   createCanvas(windowWidth, windowHeight);
  slider = createSlider(1, 200)
 
}

//Cursor
function draw() {
  cursor(CROSS);
   background(0)

  let r = map (mouseX, 0, width, 0,255)
  let b = map(mouseX,0,width,255,0)
  let col =color(r,0,b)
  col = color (r,0,b)
  console.log(r)

  fill(col)
  ellipse(mouseX,mouseY,150)
}

//Everything else
