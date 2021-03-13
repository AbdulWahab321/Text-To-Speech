var canvas,input,buttun,title,title1,input3,buttun4;
var PLAY=1
var START=0
var gameState;
function setup(){
  createCanvas(800,600)
  gameState=PLAY;
  input3=createInput("Type your name here");
  input3.position(50,300);
  input12=createInput("Type text here");
  input12.position(50,500)
  buttun=createButton("OK")
  buttun.position(250,300)
  buttun1=createButton("Convert")
  buttun1.position(250,500)
  buttun.mousePressed(sayname)
  buttun1.mousePressed(say)
}


function draw(){
  background("pink");


 if(gameState===PLAY){
  
  
  title=createElement("h1")
  title1=createElement("h3")
  title5=createElement("h3")
  title2=createElement("h1")
  title2.html("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  ")
  
  title.html("TEXT-SPEECH CONERTER APP");
  title5.html("Type your name here and press ok")
  title1.html("Type text and press the button to convert text to speech");
 
  

  title.position(50,50);
  title1.position(15,400);
  title2.position(50,52);
  title5.position(50,200) 

  
 }
}
function say(){
  var sou=new SpeechSynthesisUtterance();
  sou.text=input12.value()
  sou.pitch=100;
  window.speechSynthesis.speak(sou);

 
  
}
function sayname(){
  var sou=new SpeechSynthesisUtterance();
  sou.text= "    Welcome    "           +     input3.value()+        "         Lets Start"
  sou.pitch=100;
  window.speechSynthesis.speak(sou);
}
function sayError(){
  var sou=new SpeechSynthesisUtterance();
  sou.text= "    Sorry please Type your name correctly"
  sou.pitch=100;
  window.speechSynthesis.speak(sou);
}