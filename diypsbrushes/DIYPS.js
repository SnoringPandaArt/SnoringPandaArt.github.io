var img;
var initials = 'bv'; // your initials
var choice = '1'; // starting choice
var screenbg = 250; // off white background
var lastscreenshot = 61; // last screenshot never taken

function preload() {
  img = loadImage('https://dma-git.github.io/images/74.png'); // Load an image
}

function setup() {
  createCanvas(600, 600); // Canvas size
  background(screenbg); // Set background color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // Set choice to the key that was pressed
    clear_print(); // Check to see if it is clear screen or save image
  }
  if (mouseIsPressed) {
    newkeyChoice(choice); // If the mouse is pressed, call newkeyChoice
  }
}

function newkeyChoice(toolChoice) {
  if (toolChoice == '1') {  // Sidewalk
    stroke(169, 169, 169); // Dark gray
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // Building
    fill(100, 100, 255); // Light blue
    noStroke();
    rect(mouseX - 20, mouseY - 60, 40, 60); // Building
    
  } else if (toolChoice == '3') { // Windows
    fill(255); // White
    noStroke();
    rect(mouseX - 10, mouseY - 10, 20, 10); // Window
    
  } else if (toolChoice == '4') { // Streetlight
    stroke(0);
    strokeWeight(2);
    line(mouseX, mouseY, mouseX, mouseY - 30); // Pole
    fill(255, 255, 0); // Light
    ellipse(mouseX, mouseY - 35, 10, 10); // Light on top
    
  } else if (toolChoice == '5') { // Car
    fill(255, 0, 0); // Red car
    noStroke();
    rect(mouseX - 15, mouseY - 10, 30, 10); // Car body
    
  } else if (toolChoice == '6') { // Road
    stroke(50);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY); // Road line
    
  } else if (toolChoice == '7') { // Tree
    fill(0, 128, 0); // Green
    noStroke();
    ellipse(mouseX, mouseY, 20, 20); // Tree top
    fill(139, 69, 19); // Brown trunk
    rect(mouseX - 5, mouseY, 10, 20); // Tree trunk
    
  } else if (toolChoice == '8') { // Traffic Sign
    fill(255, 255, 0); // Yellow sign
    noStroke();
    rect(mouseX - 5, mouseY - 20, 10, 20); // Sign post
    fill(255, 0, 0); // Red triangle
    triangle(mouseX - 15, mouseY - 20, mouseX + 5, mouseY - 20, mouseX - 5, mouseY - 5); // Traffic sign
    
  } else if (toolChoice == '9') { // Cloud
    fill(255); // White
    noStroke();
    ellipse(mouseX, mouseY, 60, 30); // Cloud shape
    
  } else if (toolChoice == '0') { // Sun
    fill(255, 215, 0); // Gold
    noStroke();
    ellipse(mouseX, mouseY, 40, 40); // Sun
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image
    image(img, mouseX, mouseY, 50, 50);
  }
}

function clear_print() {
  // Clear the screen or save an image
  if (key == 'x' || key == 'X') {
    background(screenbg); // Reset the background color
  } else if (key == 'm' || key == 'M') { // Change save key to 'm'
    saveme(); // Save an image of the screen
  }
}

function saveme() {
  // Save the canvas with a filename based on initials, date, and time
  let filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) { // Avoid taking more than one screenshot per second
    saveCanvas(filename, 'jpg');
    key = "";
  }
  lastscreenshot = second(); // Set this to the current second
}
