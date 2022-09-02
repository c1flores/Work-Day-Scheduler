/*Dynamically Updating Header Content with Moment.js*/

//Display current day and date in header
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(currentDate);

/*Set state of readiness for program to run upon user interaction.*/
$(document).ready(function () {
  //Event listener to read user-selected event to save
  $(".saveBtn").on("click", function () {
    //Discover hourly block description values
    var event = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    //Save user-input to local storage
    localStorage.setItem(hour, event);
  });

  //Create timeUpdate function to indicate if an hour block is in the past, present, or future.*/

  function timeUpdate() {
    //Retrieve current time and store in variable currentTime
    var currentTime = moment().hour();

    //Iterate through time blocks and compare block time to currentTime value to set color indicator changes
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      if (blockHour < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  //Get user-input from local storage if there's any
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  //Run timeUpdate function to dynamically update block color indicators upon loading application
  timeUpdate();
})
