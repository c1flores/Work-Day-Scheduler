/*Dynamically Updating Header Content with Moment.js*/

//Display current day and date in header
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDate);


/*Set state of readiness.*/
$(document).ready(function() {

//Event listener to read user-selected event to save
$(".saveBtn").on("click", function() {
 
//Discover hourly block description values
var event = $(this).siblings(".description").val();
var hour = $(this).parent().attr("id");

//Save user-input to local storage
localStorage.setItem(hour, event);

})})
