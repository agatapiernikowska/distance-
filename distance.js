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

function calcDistance(lat1,lon1,lat2,lon2) {
  var dLat = Math.pow((lat2-lat1),2);
  var dLon = (lon2-lon1);
  var x = Math.cos((lat2*Math.PI)/180)*dLon;
  var a = Math.pow(x,2);
  var f = (40075.704/360);
  var j = dLat+a;
  var h = Math.sqrt(j);
  var w = h*f;
  return w;
}

