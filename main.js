function preload()
{

}

function setup()
{
    canvas = createCanvas(550, 550);
   canvas.position(750, 150)

    video = createCapture(VIDEO)
    video.position(30,150)
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#969A97');
}