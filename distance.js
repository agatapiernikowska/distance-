var distanceFormNode = document.querySelector('#distance-form');
var latNode = document.querySelector('#lat');
var longNode = document.querySelector('#long');
var totalNode = document.querySelector('#total');
var resultsNode = document.querySelector('#results');
var points = [];

distanceFormNode.addEventListener('submit', function (event) {
  event.preventDefault();
  var result;
  points.push({ lat: parseFloat(latNode.value), long: parseFloat(longNode.value) })

  result = points.length < 2 ? { distance: 0 } : points.reduce(function (result, next) {
    return {
      lat: next.lat,
      long: next.long,
      distance: (result.distance || 0) + calcDistance(result.lat, result.long, next.lat, next.long)
    }
  })

})

// // Wyznaczanie odległości w km
//
// function calcDistance() {
//   var startLat;
//   var startLong;
//   var inputLat = document.forms["Form"]["inputLat_" + indexPoint].value;
//   var inputLong = document.forms["Form"]["inputLong_" + indexPoint].value;
//
//   if (lastLat != 0 && lastLat != inputLat) {
//     startLat = lastLat;
//   }
//   else {
//     startLat = document.forms["Form"]["startLat"].value;
//   }
//   if (lastLong != 0 && lastLong != inputLong) {
//     startLong = lastLong;
//   }
//   else {
//     startLong = document.forms["Form"]["startLong"].value;
//   }
//
//   var dLat = Math.pow((inputLat - startLat), 2);
//   var dLon = (inputLong - startLong);
//   var x = Math.cos((inputLat * Math.PI) / 180) * dLon;
//   var a = Math.pow(x, 2);
//   var f = (40075.704 / 360);
//   var j = dLat + a;
//   var h = Math.sqrt(j);
//   var w = h * f;
//
//   result = result + w;
//   lastLat = inputLat;
//   lastLong = inputLong;
//   alert(w);
// }
//
// var addButton2 = document.getElementsByClassName("btn")[0];
// addButton2.onclick = calcDistance;
//
// // Dodawanie wyników do listy
// var newScore=document.getElementById("wyniki");
// var createNewScoreElement=function(){
//   var listScore=document.createElement("li");
//   return listScore;
// }
//
// var addScore=function(){
//   var listScore=createNewScoreElement(addButton2);
//   newScore.appendChild(listScore);
//   listScore.appendChild(calcDistance());
// }

