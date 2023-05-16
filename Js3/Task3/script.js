
var time = {
  hours: 12,
  minutes: 30,
  seconds: 45
};

function displayTime(time) {
  var formattedTime = formatTime(time.hours) + ":" + formatTime(time.minutes) + ":" + formatTime(time.seconds);
  console.log("Текущее время:", formattedTime);
}

function changeTimeBySeconds(time, seconds) {
  time.seconds += seconds;

  if (time.seconds >= 60) {
    var minutesToAdd = Math.floor(time.seconds / 60);
    time.minutes += minutesToAdd;
    time.seconds %= 60;
  }

  if (time.minutes >= 60) {
    var hoursToAdd = Math.floor(time.minutes / 60);
    time.hours += hoursToAdd;
    time.minutes %= 60;
  }

  normalizeTime(time);
}

function changeTimeByMinutes(time, minutes) {
  time.minutes += minutes;

  if (time.minutes >= 60) {
    var hoursToAdd = Math.floor(time.minutes / 60);
    time.hours += hoursToAdd;
    time.minutes %= 60;
  }

  normalizeTime(time);
}
function changeTimeByHours(time, hours) {
  time.hours += hours;

  normalizeTime(time);
}

function normalizeTime(time) {
  if (time.seconds >= 60) {
    var minutesToAdd = Math.floor(time.seconds / 60);
    time.minutes += minutesToAdd;
    time.seconds %= 60;
  }

  if (time.minutes >= 60) {
    var hoursToAdd = Math.floor(time.minutes / 60);
    time.hours += hoursToAdd;
    time.minutes %= 60;
  }

  time.hours %= 24;
}

function formatTime(value) {
  return value.toString().padStart(2, "0");
}





displayTime(time);

changeTimeBySeconds(time, 30);
displayTime(time);

changeTimeByMinutes(time, 15);
displayTime(time);

changeTimeByHours(time, 1);
displayTime(time);

  