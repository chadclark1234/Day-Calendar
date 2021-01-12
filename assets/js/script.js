//TODAYS CURRENT DATE
$("#currentDay").html(moment().format("dddd MMMM Do YYYY"));

//BUILD OUT ROW/COLUMNS
for (let hour = 9; hour <= 17; hour++) {
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
  //COLUMNS FOR TEXT
  let $colTextDiv = $("<div>");
  $colTextDiv.addClass("col-md-9");
  $colTextDiv.addClass("textarea");
  //COLUMNS FOR SAVE ICON
  let $colSaveDiv = $("<div>");
  $colSaveDiv.addClass("col-md-1");
  $colSaveDiv.addClass("saveBtn");
  // APPEND NEW ITEMS
  $(".container").append($rowDiv);
  $rowDiv.append($colTimeDiv);
  $rowDiv.append($colTextDiv);
  $rowDiv.append($colSaveDiv);
}

console.log(moment().format("H"));
console.log(moment().format("h"));
console.log(moment().calendar());
console.log(moment().format("dddd MMMM Do YYYY"));
