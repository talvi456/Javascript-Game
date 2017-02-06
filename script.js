$(document).ready(function() {

  console.log("script loaded!") // yay!!!

//-------------------BELOW IS MULTIPLAYER LOGIC IN VS MODE

    var currentTurn = 0; //Variable that keeps track of turns.
    var players = ['one', 'two'];

//-------------------Main Click Event that is the core of all logic
    $('.box').mousedown(function(){
      $(this).data('player', players[ currentTurn%2 ]); // Save data with the node
      $(this).addClass('P-' + players[ currentTurn%2 ]);
        if(currentTurn%2==0){
              // console.log('inside player one  ' + currentTurn + " <-turn and this-> " + this); //tests conditional logic
               playerOneLogic() //activates player one logic to place an O on the grid
              // console.log('activate playerONE logic ' + currentTurn + " <-turn and this-> " + this); //tests player logic
               currentTurn = currentTurn + 1;
              // console.log(currentTurn%2); //makes sure the turn has been added
               checkGameState()
        } else {
              // console.log('inside player two  ' + currentTurn + " <-turn and this-> " + this);
               playerTwoLogic() //activates player two logic to place an O on the grid
              // console.log('activate playerTWO logic ' + currentTurn + " <-turn and this-> " + this);
               currentTurn++;
              // console.log(currentTurn%2);
               checkGameState()
        }
    });
});

function validateMove(){
}

function checkGameState(){

  var victoryConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [1, 4, 8], [6, 4, 2] ];
  var boards = $('.box').map(function(index, element){
    return $(element).data('player') || 0;
  });

  var selection;
  var i = i-1;
  for (var i = 0; i < victoryConditions.length; i++) {
    selection = victoryConditions[i].map(function(element){
      return boards[element];
    })

  // var victoryFilterPlayerOne =  selection.filter(function(victory){
  //       for(var i=0; i<victory.length; i++){
  //           if(victory[i]=="one", "one", "one"){
  //           //    console.log(victory[i] " this is p1 victory array");
  //               alert("Player one has won the game! Congratulations player one, you are officially superior to player two.  Play again??");
  //           }
  //           // else {
  //           //   alert "Player two has won"
  //           // }
  //           //resetBoard()
  //       }
  //       return false;
  //   });
  //
  //   console.log(victoryFilterPlayerOne);
  //
  //   var victoryFilterPlayerTwo =  selection.filter(function(victory){
  //         for(var i=0; i<victory.length; i++){
  //             if(victory[i]=="two", "two", "two"){
  //             //    console.log(victory[i] " this is p2 victory array");
  //                 alert("Player two has won the game! Congratulations player one, you are officially superior to player two. Play again?");
  //                 resetBoard();
  //                 return true;
  //             }
  //         }
  //         return false;
  //     });
  //
  //   console.log(victoryFilterPlayerTwo);

    // ? are all the "selection" the same?
    // if (selection===[i["one", "one", "one"]]){
    //   alert("Player one has won the game! Congratulations player one, you are officially superior to player two. Maybe you want to play again to show this loser who is boss?");
    // } else if (selection===[i["two", "two", "two"]]){
    //   alert("Player one has won the game! Congratulations player one, you are officially superior to player two. Maybe you want to play again to show this loser who is boss?");
    // }
    // console.log(i);
    // console.log([i["one", "one", "one"]]);
    console.log(selection);
  }

}




//------------------------------Boring functionality--------------------

function playerOneLogic(){
  // logic for 9 different boxes for PLAYER ONE

      $('.One').mouseup(function() {
        $('.rowOneColOne').html('X');
      });

      $('.Two').mouseup(function() {
          $('.rowTwoColOne').html('X');
      });

      $('.Three').mouseup(function() {
          $('.rowThreeColOne').html('X');
      });

      $('.Four').mouseup(function() {
          $('.rowOneColTwo').html('X');
      });

      $('.Five').mouseup(function() {
          $('.rowTwoColTwo').html('X');
      });

      $('.Six').mouseup(function() {
          $('.rowThreeColTwo').html('X');
      });

      $('.Seven').mouseup(function() {
          $('.rowOneColThree').html('X');
      });

      $('.Eight').mouseup(function() {
          $('.rowTwoColThree').html('X');
      });

      $('.Nine').mouseup(function() {
          $('.rowThreeColThree').html('X');;
      });
  return;
  }

  function playerTwoLogic(){
    // logic for 9 different boxes for PLAYER TWO
        $('.One').mouseup(function() {
            $('.rowOneColOne').html('O');
        });

        $('.Two').mouseup(function() {
            $('.rowTwoColOne').html('O');
        });

        $('.Three').mouseup(function() {
            $('.rowThreeColOne').html('O');
        });

        $('.Four').mouseup(function() {
            $('.rowOneColTwo').html('O');
        });

        $('.Five').mouseup(function() {
            $('.rowTwoColTwo').html('O');
        });

        $('.Six').mouseup(function() {
            $('.rowThreeColTwo').html('O');
        });

        $('.Seven').mouseup(function() {
            $('.rowOneColThree').html('O');
        });

        $('.Eight').mouseup(function() {
            $('.rowTwoColThree').html('O');
        });

        $('.Nine').mouseup(function() {
            $('.rowThreeColThree').html('O');
        });
      return;
      }

      function resetBoard(){
      // clears the board
        $('.box').mouseup(function() {
            $('.box').html(' ');
        });
      };
