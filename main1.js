x1="";
object1=[];
status1="";
function preload(){
    x1=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    g=ml5.objectDetector('cocossd',v);
    document.getElementById("j").innerHTML="Status :  Object Detecting";
}
function draw(){
    image(x1,0,0,640,420);
    console.log("YES!");
    if(status1 != ""){
        for(k=0;k<object1.length;k++){
            console.log("hi!");
            document.getElementById("j").innerHTML="Status : Object Detected";
            z=floor(object1[k].confidence*100);
            text(object1[k].label+" "+z+"%",object1[k].x+15,object1[k].y+15);
            fill("blue");
        noFill();
        stroke("blue");
        rect(object1[k].x,object1[k].y,object1[k].width,object1[k].height);
        }
    }
}
function v(){
    console.log("YES! I am fully loaded");
    status1=true;
    g.detect(x1,ans);
}
function ans(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
    object1=result;
}
function home(){
    window.location="index.html";
}