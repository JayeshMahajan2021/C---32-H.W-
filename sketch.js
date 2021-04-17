const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg() ;
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 04 && hour<= 18) {
        bg = "sunrise1.png"; 
        }
    else{
        bg = "sunset12.png"; 
        } 
    
    
    backgroundImg = loadImage(bg);

}
