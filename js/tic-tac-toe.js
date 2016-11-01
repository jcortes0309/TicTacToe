$(document).ready(function () {
  var counter = 0;
  var square_value = "";
  // $(".square").on("click", function () {
  //   // debugger
  //   // if (square_value === 'O') {
  //   //
  //   // } else {
  //     if (counter === 0) {
  //       $(this).text("O");
  //       counter = 1;
  //       console.log("counter var = " + counter);
  //     } else if (counter === 1) {
  //       $(this).text("X");
  //       counter = 2;
  //       console.log("counter var in else if = " + counter);
  //     } else {
  //       $(this).text("");
  //       counter = 0;
  //       console.log(("counter var in else = " + counter));
  //     }
  //     square_value = $(this).text();
  //     console.log("Square value is " + square_value);
  //   // }
  // });

  $(".square").on("click", function () {
    square_value = $(this).text();
    console.log("Square value is " + square_value);
    if (square_value === "") {
      $(this).text("O");
    }
  });
});
