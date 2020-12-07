var start = new Date();

function stopTime() {
  var stop = new Date();

  var startseconds = start.getSeconds();
  var stopseconds = stop.getSeconds();
  var difference = stopseconds - startseconds;

alert("It has been" +difference+ "seconds it is time to watch a movie");


}
