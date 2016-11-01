$(document).ready(function () {
  var counter = 0;
  var square_value = "";
  var board = ["","","","","","","","",""];

  $(".play_again").on("click", function () {
    $(this).hide();
    board = ["","","","","","","","",""];
    $(".square")
      .prop("disabled", false)
      .text("");
    $(".winner").hide();
  });

  $(".square").on("click", function () {
    square_value = $(this).text();
    if (square_value === "") {
      if (counter === 0) {
        $(this).text("O");
        counter = 1;
        console.log("counter var = " + counter);
      } else if (counter === 1) {
        $(this).text("X");
        counter = 0;
      }
      var button_name = $(this).attr('name');
      var button_value = $(this).text();
      push_to_board(button_name, button_value);
      var winner = tictactoe(board);
      if (winner) {
        $("p")
          .text(winner + " WINS!")
          .show();
        $(".square").prop("disabled", true);
        $(".play_again").show();
        console.log(board);
      } else {
        console.log("Keep playing");
        console.log(board.length);
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
      console.log("XXXXXX wins! YAY!");
      return 'X';
    } else if (isWinner(board, 'O')) {
      console.log("OOOOOO wins! YAY!");
      return 'O';
    } else {
      return null;
    }
    return null;
  }
});
