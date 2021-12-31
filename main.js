song= "music.mp3";
song2="music2.mp3";
leftWristX=0;
leftWristY=0; 
rightWristX=0;
rightWristY=0; 


function setup() {
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log("PoseNet is initialized");
}

function preload() {
song=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function play() {
song.play();
song.setVolume(1);
song.rate(1);

song2.play();
song2.setVolume(1);
song2.rate(1);
} 

function draw() {
image(VIDEO,0,0,600,500);

fill('#FF0000');
stroke('#FF0000');

}

function gotPoses(results) {

    if(results.length> 0 ) {
    console.log(results);
score_leftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = "+score_leftWrist);

    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);

rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);
    }

}