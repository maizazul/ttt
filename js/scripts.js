function Player(mark){
  this.mark = mark;
}
// var player1 = new Player("X");
// player.mark
function Space(mark, markedBy){
  this.mark = mark;
  this.markedBy = markedBy;
}
function Board (coordinates)

function Game(players, board, turn, whosTurn, gameStatus)

$(document).ready(function() {
  $(".square").click(function(event) {
    $(this).text("X");
  });
    event.preventDefault();
});
