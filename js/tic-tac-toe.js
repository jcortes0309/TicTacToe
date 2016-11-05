$(document).ready(function () {
  var counter = 0;
  var square_value = "";
  var board = ["", "", "", "", "", "", "", "", ""];
  var counter_x = 0;
  var counter_o = 0;
  var counter_draw = 0;
  var turns = 0;
  var random_location;

  $(".play_again").on("click", function () {
    $(this).hide();
    board = ["", "", "", "", "", "", "", "", ""];
    $(".square")
      .prop("disabled", false)
      .text("")
      .css("background-color", "white");
    $(".winner").hide();
    turns = 0;
  });

  $(".square").on("click", function () {
    random_location = getRandomIntInclusive();
    square_value = $(this).text();
    if (square_value === "") {
      if (counter === 0) {
        $(this)
          .text("O")
          .css("background-color", "red")
          .css("color", "white");
        counter = 1;
        console.log("counter var = " + counter);
        console.log(board);
        console.log(random_location);
        console.log(board[random_location]);
        debugger
        counter = ai_turn(counter);
      }

      var button_name = $(this).attr('name');
      console.log("Button name is: " + button_name);
      var button_value = $(this).text();
      console.log("Button value is: " + button_value);
      push_to_board(button_name, button_value);
      var winner = tictactoe(board);
      if (winner) {
        if (winner === "X") {
          $("p")
            .text(winner + " WINS!")
            .css("background-color", "navy")
            .show();
        } else {
          $("p")
            .text(winner + " WINS!")
            .css("background-color", "red")
            .show();
        }
        $(".square").prop("disabled", true);
        $(".play_again").show();
      } else {
        console.log("Keep playing");
        console.log(board);
      }
      turns = turns + 1;
      console.log("Turns = " + turns);
      if (turns === 9) {
        $(".play_again").show();
        $("p")
          .text("It's a draw")
          .css("background-color", "black")
          .show();
        counter_draw = counter_draw + 1;
        $(".draw").text(counter_draw);
      }
    }
  });

  // Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
  function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function ai_turn(counter) {
    while (board[random_location] !== "") {
      console.log(board[random_location]);
      random_location = getRandomIntInclusive();
    }

    $("[name='random_location']")
      .text("X")
      .css("background-color", "navy")
      .css("color", "white");

    console.log("Random location is: " + random_location);
    counter = 0;
    return counter;
  }

  function push_to_board(name, value) {
    var location = Number(name);
    board[location] = value;
  }

  function isWinner(board, player) {
    if (board[0] === player && board[1] === player && board[2] === player) {
      return true;
    }
    if (board[3] === player && board[4] === player && board[5] === player) {
      return true;
    }
    if (board[6] === player && board[7] === player && board[8] === player) {
      return true;
    }
    if (board[0] === player && board[3] === player && board[6] === player) {
      return true;
    }
    if (board[1] === player && board[4] === player && board[7] === player) {
      return true;
    }
    if (board[2] === player && board[5] === player && board[8] === player) {
      return true;
    }
    if (board[0] === player && board[4] === player && board[8] === player) {
      return true;
    }
    if (board[2] === player && board[4] === player && board[6] === player) {
      return true;
    }
  }

  function tictactoe(board) {
    if (isWinner(board, 'X')) {
      counter_x = counter_x + 1;
      $(".x_wins").text(counter_x);
      console.log(counter_x);
      return 'X';
    } else if (isWinner(board, 'O')) {
      counter_o = counter_o + 1;
    $(".o_wins").text(counter_o);
      console.log(counter_o);
      return 'O';
    } else {
      return null;
    }
    return null;
  }
});
