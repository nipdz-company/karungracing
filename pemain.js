class pemain{
  constructor(y,img){
    this.size = 80
    this.img = img
    this.x = 10
    this.y = y
    this.speed = 10
  }
  
  tampilkan(){
    image(this.img, this.x, this.y, this.size, this.size)
  }
  
  maju(){
    this.x += this.speed
  }
  finish(){
    if(this.x>width-100) {
      finish.play()
      fill(this.warna)
      textSize(50)
      textAlign(CENTER)
      text('FINISH', width/2 , height/2)
      noLoop()
    }
  } 
}