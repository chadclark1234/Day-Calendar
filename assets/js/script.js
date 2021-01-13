//TODAYS CURRENT DATE
$("#currentDay").html(moment().format("dddd MMMM Do YYYY"));
let currentHour = moment().format("H");

//ADJUSTIBLE HOUR RANGE OF SCHEDULE-24HR CLOCK
let startHour = 9;
let endHour = 20;

//BUILD OUT ROW/COLUMNS
for (let hour = startHour; hour <= endHour; hour++) {
  let index = hour - 9;

  // ROWS
  let $rowDiv = $("<div>");
  $rowDiv.addClass("row");
  $rowDiv.addClass("plannerRow");
  $rowDiv.attr("data-hour", hour);

  // COLUMNS FOR TIME
  let $colTimeDiv = $("<div>");
  $colTimeDiv.addClass("col-md-2");
  $colTimeDiv.addClass("hour");

  //CALCULATE 24HR TIME INTO 12HR AM/PM
  const time = hour > 12 ? hour - 12 : hour;
  const amPM = hour >= 12 && hour != 24 ? `${time} pm` : `${time} am`;

  // SPAN TO DISPLAY TIME IN DIV
  let $timeSpan = $("<span>");
  $timeSpan.attr("class", "time");
  $timeSpan.html(amPM);

  //COLUMNS FOR TEXT
  let $colTextDiv = $("<textarea>");
  $colTextDiv.addClass("col-md-9");
  $colTextDiv.addClass("textarea");

  //COLUMNS FOR SAVE BUTTON
  let $colSaveDiv = $("<div>");
  $colSaveDiv.addClass("col-md-1");
  $colSaveDiv.addClass("saveBtn");
  $colSaveDiv.addClass("fas fa-save");

  // APPEND NEW ITEMS TO DOM
  $(".container").append($rowDiv);
  $rowDiv.append($colTimeDiv);
  $rowDiv.append($colTextDiv);
  $rowDiv.append($colSaveDiv);
  $colTimeDiv.append($timeSpan);

  //CHANGE BACKGROUND OF ROWS BASED ON TIME
  if (hour == currentHour) {
    $colTextDiv.addClass("present");
    console.log("current");
  } else if (hour < currentHour) {
    $colTextDiv.addClass("past");
    console.log("past");
  } else {
    $colTextDiv.addClass("future");
    console.log("future");
  }
}

// console.log(moment().format("H"));
// console.log(moment().format("h"));
// console.log(moment().calendar());
// console.log(moment().format("dddd MMMM Do YYYY"));
