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




