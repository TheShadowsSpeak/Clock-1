var Hour, Minute, Second;
var HourAngle, MinuteAngle, SecondAngle;

//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  
    
}


function draw() {
background("Gold")
 angleMode(DEGREES);
 Hour=hour();
 Minute=minute();
 Second=second();
 SecondAngle=map(Second,0,60,0,360)
 MinuteAngle=map(Minute,0,60,0,360)
 HourAngle=map(Hour,0,12,0,360)
 console.log(Minute)
 
 
 translate(200,200)
 rotate(-90)
 push()
 stroke("Green")
 strokeWeight(15);
 rotate(HourAngle);
 line(0,0,100,10);
 pop()
 push()
 stroke("Purple")
 strokeWeight(10)
 rotate(MinuteAngle);
 line(0,0,100,10)
 pop()
 push()
 stroke("Silver")
 strokeWeight(5)
 rotate(SecondAngle);
 line(0,0,100,10)
 pop()
 
 
drawSprites();
 
}



