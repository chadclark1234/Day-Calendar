//TODAYS CURRENT DATE
$("#currentDay").html(moment().format("dddd MMMM Do YYYY"));
let startHour = 9;
let endHour = 17;

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
  const amPM = hour >= 12 ? `${time} pm` : `${time} am`;

  // SPAN TO DISPLAY TIME IN DIV
  let $timeSpan = $("<span>");
  $timeSpan.attr("class", "time");
  $timeSpan.html(amPM);

  //COLUMNS FOR TEXT
  let $colTextDiv = $("<textarea>");
  $colTextDiv.addClass("col-md-9");
  $colTextDiv.addClass("textarea");

  //COLUMNS FOR SAVE ICON
  let $colSaveDiv = $("<div>");
  $colSaveDiv.addClass("col-md-1");
  $colSaveDiv.addClass("saveBtn");
  $colSaveDiv.addClass("far fa-save saveIcon");

  // APPEND NEW ITEMS TO DOM
  $(".container").append($rowDiv);
  $rowDiv.append($colTimeDiv);
  $rowDiv.append($colTextDiv);
  $rowDiv.append($colSaveDiv);
  $colTimeDiv.append($timeSpan);
}

// // CHANGE BACKGROUND OF ROWS BASED ON TIME
// // let currentHour = moment().format("H");
// // if (currentHour === scheduleHour){
//   // change background to .present
// }else if (currentHour < scheduleHour){
//   // change background to .past
// }else {
//   // change background to .future
// }
// console.log(currentHour);

// console.log(moment().format("H"));
// console.log(moment().format("h"));
// console.log(moment().calendar());
// console.log(moment().format("dddd MMMM Do YYYY"));
