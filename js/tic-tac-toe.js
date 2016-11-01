$(document).ready(function () {
  var times = 0;
  $(".square").on("click", function () {
    // debugger
    if (times === 0) {
      $(this).text("O");
      times = 1;
      console.log("Times var = " + times);
    } else if (times === 1) {
      $(this).text("X");
      times = 2;
      console.log("Times var in else if = " + times);
    } else {
      $(this).text("");
      times = 0;
      console.log(("Times var in else = " + times));
    }
  });
});
