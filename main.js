song="";
song1="";
function preload()
{
    song=loadSound("song.mp3");
    song1=loadSound("song1.mp3")
}
scoreRightWrist=0;
scoreLeftWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('posenet is initalized');
}
function draw() {
    Image(video,0,0,600,500);
}
function play()
 {
song.play();
song.setVolume(1);
song.rate(1);
}