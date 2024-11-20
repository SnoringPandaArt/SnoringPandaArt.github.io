var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var level = 0; // Keep track of the current level
var levelThreshold = 5; // Threshold score to change to the next level
var speedFactor = 2; // Base speed of the ball
var ballSpeedX = 4; // Ball speed in X direction
var ballSpeedY = 4; // Ball speed in Y direction

function setup() {
  createCanvas(601, 601);
  textAlign(CENTER);
  textSize(25);
}// end of setup

function draw() {
  background(230);
  
  if (level === 0) {
    levelZero();
  } else if(level === 1) {
    levelOne();
  } else if (level === 2) {
    levelTwo();
  } else if (level === 3) {
    levelThree();
  } else if (level === 4) {
    levelFour();
  } else if (level === 5) {
    levelFive();
  } else if (level === 6) {
    youWin();
  }
}// end of draw

function levelZero(){

  //add notice here
text("Welcome to Headache! Click to Play!", width / 2, height / 2);
}

function mouseClicked(){
  level = 1;
  
}
function levelOne() {
  text("Level 1", width / 2, height - 20);
  text("Score: " + score, width / 2, 30);
  
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
  if (score >= levelThreshold) {
    level = 2;
    ballSize = 30;
  }
}

function levelTwo() {
  text("Level 2", width / 2, height - 20);
  text("Score: " + score, width / 2, 30);
  
  speedFactor = 4;
  ballx += random(-speedFactor, speedFactor);
  bally += random(-speedFactor, speedFactor);
  
  ballx = constrain(ballx, 0 + ballSize / 2, width - ballSize / 2);
  bally = constrain(bally, 0 + ballSize / 2, height - ballSize / 2);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
  if (score >= levelThreshold * 2) {
    level = 3;
    ballSize = 20;
    speedFactor = 6;
  }
}

function levelThree() {
  text("Level 3", width / 2, height - 20);
  text("Score: " + score, width / 2, 30);
  
  speedFactor = 8;
  ballx += random(-speedFactor, speedFactor);
  bally += random(-speedFactor, speedFactor);
  
  ballx = constrain(ballx, 0 + ballSize / 2, width - ballSize / 2);
  bally = constrain(bally, 0 + ballSize / 2, height - ballSize / 2);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
  if (score >= levelThreshold * 3) {
    level = 4;
    ballSize = 10;
    speedFactor = 10;
  }
}

function levelFour() {
  text("Level 4", width / 2, height - 20);
  text("Score: " + score, width / 2, 30);
  
  speedFactor = 12;
  ballx += random(-speedFactor, speedFactor);
  bally += random(-speedFactor, speedFactor);
  
  ballx = constrain(ballx, 0 + ballSize / 2, width - ballSize / 2);
  bally = constrain(bally, 0 + ballSize / 2, height - ballSize / 2);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
  if (score >= levelThreshold * 4) {
    level = 5;
    ballSize = 40;  // Increase the ball size for Level 5
    ballSpeedX = 5;
    ballSpeedY = 5;
  }
}

function levelFive() {
  text("Level 5", width / 2, height - 20);
  text("Score: " + score, width / 2, 30);

  // Bouncing Ball Behavior
  ballx += ballSpeedX;
  bally += ballSpeedY;
  
  // If the ball hits the boundaries, reverse direction
  if (ballx - ballSize / 2 <= 0 || ballx + ballSize / 2 >= width) {
    ballSpeedX *= -1; // Reverse X direction
  }
  if (bally - ballSize / 2 <= 0 || bally + ballSize / 2 >= height) {
    ballSpeedY *= -1; // Reverse Y direction
  }
  
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
  // Transition to "You Win" when score reaches 25
  if (score >= 25) {
    level = 6; // You win!
  }
}

function youWin() {
  background(0, 255, 0); // Green background for "You Win!"
  textSize(40);
  fill(255);
  text("YOU WIN!", width / 2, height / 2 - 40);
  textSize(25);
  text("Final Score: " + score, width / 2, height / 2 + 40);
  noLoop(); // Stop the game loop
}
