let Px = -50
let Py = 0

let Bx = 0
let By = 0

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  translate(300, 300);
  circle(Px, Py, 60);
  
  rect(Bx, By, 20, 6);
  
  
  
//bullet movement
  
 if (keyIsDown(32)){
   for (let i = 0; i < 10; i +=1)
   Bx += 1
 }
  
  
  

// movement controls
  
  if (keyIsDown(68)){
    Px += 5
  }
  
  if (keyIsDown(65)){
    Px -= 5
  }
  if (keyIsDown(87)){
    Py -= 5
  }
  if (keyIsDown(83)){
    Py += 5
  }
  
}


  
  
  