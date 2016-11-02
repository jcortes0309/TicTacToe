$(document).ready(function () {
  var counter = 0;
  var square_value = "";
  var board = [];
  var counter_x = 0;
  var counter_o = 0;
  var counter_draw = 0;
  var turns = 0;

  $(".play_again").on("click", function () {
    $(this).hide();
    board = [];
    $(".square")
      .prop("disabled", false)
      .text("")
      .css("background-color", "white");
    $(".winner").hide();
    turns = 0;
  });

  $(".square").on("click", function () {
    square_value = $(this).text();
    if (square_value === "") {
      if (counter === 0) {
        $(this)
          .text("O")
          .css("background-color", "red")
          .css("color", "white");
        counter = 1;
        console.log("counter var = " + counter);
      } else if (counter === 1) {
        $(this)
          .text("X")
          .css("background-color", "navy")
          .css("color", "white");
        counter = 0;
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
        console.log("Board length is: " + board.length);
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
      console.log("XXXXXX wins! YAY!");
      $(".x_wins").text(counter_x);
      console.log(counter_x);
      return 'X';
    } else if (isWinner(board, 'O')) {
      counter_o = counter_o + 1;
      console.log("OOOOOO wins! YAY!");
    $(".o_wins").text(counter_o);
      console.log(counter_o);
      return 'O';
    } else {
      return null;
    }
    return null;
  }
});
