//Madeline driving, Emel typing


//create variables for sound files, play.pause buttons, volume slider, canvas, and volume/amplitude 
var sound, amplitude, cnv;
var button;
var bg;
var volhistory = [];
var slider;
var sound2;

//preload audio files in order to remove awkward silence
function preload(){
  sound = loadSound('shoulderKiss copy.mp3');
  sound2 = loadSound('holdingOn.mp3')
}

//set canvas to be same size as background image, assign values ot varibles
function setup() {
  bg = loadImage('vaporwave.jpg');
  cnv = createCanvas(800,449);
  amplitude = new p5.Amplitude();
  button = createButton("play");
  button.mousePressed(togglePlaying);
  slider = createSlider(0, 1, 0.5, 0.01)
  
  //if else statement to add functionality to the play-pause button
  function togglePlaying(){
    if (!sound.isPlaying()) {
    sound.play();
    button.html("pause");
  }  
  else {
   sound.pause();
   button.html("play");
 }
  }
  
  //function togglePlaying(){
    //if (!sound2.isPlaying()) {
    //sound2.play();
    //button.html("pause");
  //}  
  //else {
   //sound2.pause();
   //button.html("play");
 //}
  //}
}

function draw() {
  background(bg) //set background to image
  sound.setVolume(slider.value()) //sets volume to the value of the slider
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200); //sets values for the slider bar to reference
  volhistory.push(level)
  
  //sets prerequisites for the shape
  stroke(255)
  noFill()
  beginShape(); //begins to draw the shape
  
  //for statement that assigns the  vertecies of each shape to the values for amplitude
  for (var i = 0; i < volhistory.length; i++){
    console.log(volhistory[i]);
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  
  endShape(); //ends the drawing of the shape
  
  if (volhistory.length > width) { //if statement where if the length of the shape is greater than the width of the canvas, 
                                    //it will start from the begining of the canvas and overwrite (splice) the previous image.
    volhistory.splice(0,1);
  }
}