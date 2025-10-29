let x = 400, y = 100, x1 = 0, y1 = 0
let xV = 4, yV = 2
let col1, col2;
let img, img1, img2,img3,img4
let imageShown = false
let imageShown1 = false

let Music 
let count = 0
function preload() {
  img = loadImage("tuff.png")
  img1 = loadImage("download.jpeg")
  img2 = loadImage("download (1).jpeg")
  Music = loadSound("Coolmusic.mp3")
  img3 = loadImage("handy.png")
  img4 = loadImage("Cupcake.jpeg")
}
function setup() {
  


  createCanvas(windowWidth, windowHeight)
  // createCanvas(1920,1080)
  col1 = color('#851400')
  col2 = color('#00e2f2')

  strokeWeight(3)

  

  //framerate(12)
Music.play()
}

function draw() {
  //background(150)
  background(img4);
  // imageMode(CENTER)
  fill(col1)
  ellipse(x, y, 50)
  fill(col2)
  ellipse(x1, y1, 50)
  text("combo x" + count,200,75)
  textSize(25)

 if (mouseIsPressed === true) {
    cursor(CROSS, 8, 8);
  } else {
    cursor(CROSS);
  }
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
    col1 = color(random(255), random(255), random(255))
    imageShown1 = true
    setTimeout(disappearImage, 500)
    count++

  }
  image(img2, 80, 82, 175, 175)
  if (imageShown1 == true) {
    image(img1, 80, 82, 175, 175)
  }

  distance = dist(mouseX, mouseY, x1, y1)

  if (distance < 25 && mouseIsPressed == true) {
    print("HI")
    x1 = random(width)
    y1 = random(height)
    col2 = color(random(255), random(255), random(255))
    imageShown = true
    setTimeout(disappearImage, 500)
    count++
  }

  if (imageShown == true) {
    image(img, 80, 82, 175, 175)


  }

  y += yV
  x += xV
  x1++
  y1++

  //image(img1,80,82,175,175)

}
function disappearImage() {
  imageShown = false
  imageShown1 = false

}
let mySound;

  



 


  

  
 

audioplay()

