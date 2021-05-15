function setup() {
  createCanvas(800,400);
  sargam=createSprite(400, 200, 50, 50);
  ana=createSprite(420, 269, 50, 50);
}
function loves() {//when distahnce of both object decrease 
//the difference of the horizontal distance of both the objects is equals to sum of half of  their widht
if(sargam.x-ana.x<=(sargam.width+ana.width)/2 && ana.x-sargam.x<=(sargam.width+ana.width)/2
&& sargam.y-ana.y<=(sargam.height+ana.height)/2 && ana.y-sargam.y<=(sargam.height+ana.height)/2)

{
  sargam.shapeColor="red"
  ana.shapeColor="red"
}
else{
  sargam.shapeColor="grey"
  ana.shapeColor="grey"
}
  
}
function draw() {
  
  background("blue");  
  drawSprites();
  sargam.y=mouseY
  sargam.x=mouseX
loves()
}