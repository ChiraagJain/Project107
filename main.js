function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Evj3kZS09/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotRsults);
}
function gotRsults(error,results){
    console.log('got result');
}