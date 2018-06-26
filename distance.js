// Dodawanie kolejnych punktów

var addButton=document.getElementsByClassName("button")[0];
var newPosition=document.getElementById("new-position");

var createNewPointElement=function(){
  var listItem=document.createElement("li");
  var labelLat=document.createElement("label");
  var inputLat=document.createElement("input");
  var labelLong=document.createElement("label");
  var inputLong=document.createElement("input");

  inputLat.type="number";
  inputLong.type="number";
  inputLat.placeholder="54.479732";
  inputLong.placeholder="18.566830";
  inputLat.step="0.000001";
  inputLong.step="0.000001";
  inputLat.min="-90";
  inputLat.max="90";
  inputLong.min="-90";
  inputLong.max="90";
  listItem.appendChild(labelLat);
  listItem.appendChild(inputLat);
  listItem.appendChild(labelLong);
  listItem.appendChild(inputLong);
  labelLat.innerText="Szerokość geograficzna"
  labelLong.innerText="Długość geograficzna"
  return listItem;
}

var addPoint=function(){
  var listItem=createNewPointElement(addButton);
  newPosition.appendChild(listItem);
}

addButton.onclick=addPoint;

// Wyznaczanie odległości w km

function calcDistance(startLat,startLong,inputLat,inputLong) {
  var dLat = Math.pow((inputLat-startLat),2);
  var dLon = (inputLong-startLong);
  var x = Math.cos((inputLat*Math.PI)/180)*dLon;
  var a = Math.pow(x,2);
  var f = (40075.704/360);
  var j = dLat+a;
  var h = Math.sqrt(j);
  var w = h*f;
  return w;
}

var addButton2=document.getElementsByClassName("btn")[0];

// var newScore=document.getElementById("wyniki");

// var createNewScoreElement=function(){
//   var listScore=document.createElement("li");
//   return listScore;
// }
//
// var addScore=function(){
//   var listScore=createNewScoreElement(addButton2);
//   newScore.appendChild(listScore);
//   var calc = calcDistance();
// }

addButton2.onclick=calcDistance();