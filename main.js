function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

status="";
objects=[];
object_name=[];
utterThis="";
synth = "";

function find() {
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    object_name=document.getElementById("name").value;
    document.getElementById("status").innerHTML="Detecting Objects🔎";
    document.getElementById("decect").innerHTML="🔎";
}
function modelLoaded() {
    console.log("Model Has Loaded🔃")
    status=true;
}

function draw() {
    image(video,0,0,400,300);


if (status != "") {
    objectdetector.detect(video,gotResult);
    for (i = 0; i < objects.length; i++) {
    fill("#f28ba0");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("#f28ba0");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    if (objects[i].label==object_name) {
        document.getElementById("status").innerHTML=object_name+" "+"Found";
        synth = window.speechSynthesis;
        utterThis=new SpeechSynthesisUtterance(object_name+" "+"Found")
    }
    synth.speak(utterThis);
}


}
}


function gotResult(error,results) {
if(error) {
   console.error(error);
}
else{
   console.log(results);
   objects=results;
}
}
