status1 = "";
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function preload() {
    img = loadImage("");
}
function modelloaded() {
    console.log("Cocossd is initialized")
    status1 = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results) {
if (error) {
    console.log(error);
}
console.log(results);
}
