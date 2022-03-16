function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelloaded);
}
function modelloaded(){
  console.log("model has loaded");
}
var previous_result;
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotresults);
}
function gotresults(error,results){
if(error){
  console.error(error);
}
else{
  if((results[0].confidence>0.5) && (previous_result!=results[0].label)){
   console.log(results);
   previous_result=results[0].label;
   document.getElementById("result_name").innerHTML=results[0].label;
   document.getElementById("result_accuracy").innerHTML=results[0].confidence;
  }
}
}
