let x,y
let pemain1, pemain2
function garis(x1, y1){
  line(x1, y1)
}

function garis(x,y){
  line(x,y,x, height-y)
}


function setup(){
  createCanvas(600,400);
  
  pemain1 = new pemain(100, 'red')
  pemain2 = new pemain(300, 'blue')
}

function draw(){
  background(1000,1000,1000)
  background(bg)
  

  
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
