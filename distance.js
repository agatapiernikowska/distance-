(function () {
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
// Dodanie wspolrzednych do listy i sumowanie km
    total.textContent = result.distance.toFixed(5) + ' km'
    resultsNode.innerHTML = '';
    points.forEach(function (point) {
      var listItem = document.createElement('li');
      listItem.textContent = point.lat + ' latitude; ' + point.long + ' longitude'
      resultsNode.appendChild(listItem);
    })
  })

  // Wyznaczanie odległości w km
  function calcDistance(startLat, startLong, stopLat, stopLong) {
    var dLat = Math.pow((stopLat - startLat), 2);
    var dLon = (stopLong - startLong);
    var x = Math.cos((stopLat * Math.PI) / 180) * dLon;
    var a = Math.pow(x, 2);
    var f = (40075.704 / 360);
    var j = dLat + a;
    var h = Math.sqrt(j);
    var w = h * f;
    return w;
  }
}())