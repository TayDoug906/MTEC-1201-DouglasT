function setup() {
createCanvas(670, 670)



}
function draw(){

  background(200)
  noStroke()
  fill(255, 80, 67)
  circle (90,90, 175, 175)
  
  fill(255, 120, 20)
  circle(90, 580, 175, 175)
  
  fill(123,123,255)
  rect(500,500,175,175)

  fill(198,78,126)
  hex(580,90,175,175)

  fill(158,1,200)
  rect(500,0,175,175)
  
stroke(255,0,0)
strokeWeight(3)
circle(mouseX,mouseY, 20)
line(width/2,width/2,mouseX,mouseY)

}

