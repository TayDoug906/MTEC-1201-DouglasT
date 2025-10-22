let x = 400, y = 100, x1 = 0, y1 = 0
let xV = 4, yV = 2
let col1, col2;
let img,img1

function preload(){
 img = loadImage("tuff.png")
 img1 = loadImage("download.jpeg")

}
function setup() {

  createCanvas(windowWidth, windowHeight)
  col1 = color('#851400')
  col2 = color('#00e2f2')

  strokeWeight(3)
 imageMode(CENTER)

  //framerate(12)

}

function draw() {
  background(150)
  fill(col1)
  ellipse(x, y, 50)
  fill(col2)
  ellipse(x1, y1, 50)

  if (x > width) {
    x = 0

  }
  if (y > height) {
    y = 0
  }

  if (x1 > width) {
    x1 = 0

  }
  if (y1 > height) {
    y1 = 0
  }

  let distance = dist(mouseX, mouseY, x, y);
  // print(distance)
  if (distance < 25 && mouseIsPressed == true) {
    print("HI")
    x = random(width)
    y = random(height)
    col1 =color(random(255), random(255), random(255))
  }
  distance = dist(mouseX, mouseY, x1, y1)

  if (distance < 25 && mouseIsPressed == true) {
    print("HI")
    x1 = random(width)
    y1 = random(height)
    col2 =color(random(255), random(255), random(255))
   image(img,40,41,40,42)
  }
  y+= yV
  x+= xV
  x1++
  y1++

  //image(img1,40,41,80,82)
  
}



