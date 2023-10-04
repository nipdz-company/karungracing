let jump;
let finish;
let x,y
let pemain1, pemain2
let bg

function garis(x, y){
  line(x, y, x, height-y)
}

function preload(){
  soundFormats('mp3')
  jump = loadSound('jump.mp3')
  finish = loadSound('finish.mp3')
  bg = loadImage('background.png')
  p1 = loadImage('player1.png')
  p2 = loadImage('player2.png')
}

function setup(){
  createCanvas(600,400);
  
  pemain1 = new pemain(90, p1)
  pemain2 = new pemain(200, p2)
}

function draw(){
  background(1000,1000,1000)
  background(bg)
  garis(80,40)
  garis(width-100,50)
  
  pemain1.tampilkan()
  pemain2.tampilkan() 
  
  pemain1.finish()
  pemain2.finish()
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    pemain1.maju()
    jump.play()
  }
  else if(keyCode === RIGHT_ARROW){
    pemain2.maju()
    jump.play()
  }
}