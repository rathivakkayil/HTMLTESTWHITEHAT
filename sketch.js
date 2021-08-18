var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(800, 800);
  btn_r = createButton("R");
  btn_r.position(200,450);
  btn_r.mousePressed(red_bg);
 
  btn_green = createButton("GREEN");
  btn_green.position(300,450);
  btn_green.mousePressed(green_bg);
}
function red_bg()
{
 r = 255;
 g = 0;
 b = 0;
}

function green_bg()
{
 r = 0;
 g = 255;
 b = 0;
}
function draw() {
  background(r,g,b);


//drawSprites();
}


