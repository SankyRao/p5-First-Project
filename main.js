function preload()
{

}

function setup()
{
canvas = createCanvas(500,500)
canvas.center()
video = createCapture(VIDEO)
video.hide()

}

function draw()
{
image(video,65,65,380,380)
fill("Grey")
circle(50,50,60)
circle(460,50,60)
circle(460,460,60)
circle(50,460,60)

fill("black")
rect(80,40,350,20)
rect(450,80,20,350)
rect(80,450,350,20)
rect(40,80,20,350)

noFill()
}