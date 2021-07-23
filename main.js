function preload(){

}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    Video= createCapture(VIDEO);
    Video.size(350,350);
    Video.hide();

    poseNet= ml5.poseNet(Video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log("The Model is Loaded");
}

function draw(){
image(Video, 0, 0, 350, 350);

}

function setclownfilter(){
   save("LipFilterPicture.png"); 
}

function gotPoses(results){
    console.log("You came")
    if (results.length>0){
        console.log(results);
        console.log("lips x = " + results[0].pose.nose.x);
        console.log("lips y = " + results[0].pose.nose.y);
    }
}