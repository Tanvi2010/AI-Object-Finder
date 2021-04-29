function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function find() {
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects🔎";
    object=document.getElementById("name").value;
    
}
function modelLoaded() {
    console.log("Model Has Loaded🔃")
    status=true;
}

function draw() {
    image(video,0,0,400,300);
}
