var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;

function placeMaker(spotId){
    if(!gameOver){
        //get the spot by spotId
        var spot = document.getElementById(spotId);
        //if the spot is empty, change spot.innerHTML to mark the spot
        if(spot.innerHTML === ''){
            spot.innerHTML = currentPlayer;
            totalMove++;
            currentPlayerWon();
        }
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('1');
    var s2 = document.getElementById('2');
    var s3 = document.getElementById('3');
    var s4 = document.getElementById('4');
    var s5 = document.getElementById('5');
    var s6 = document.getElementById('6');
    var s7 = document.getElementById('7');
    var s8 = document.getElementById('8');
    var s9 = document.getElementById('9');

    if((s1.innerHTML===s2.innerHTML && s2.innerHTML===s3.innerHTML && s1.innerHTML != '')||
    (s4.innerHTML===s5.innerHTML && s5.innerHTML===s6.innerHTML && s4.innerHTML != '')||
    (s7.innerHTML===s8.innerHTML && s8.innerHTML===s9.innerHTML && s7.innerHTML != '')||
    (s1.innerHTML===s4.innerHTML && s4.innerHTML===s7.innerHTML && s1.innerHTML != '')||
    (s2.innerHTML===s5.innerHTML && s5.innerHTML===s8.innerHTML && s2.innerHTML != '')||
    (s3.innerHTML===s6.innerHTML && s6.innerHTML===s9.innerHTML && s3.innerHTML != '')||
    (s1.innerHTML===s5.innerHTML && s5.innerHTML===s9.innerHTML && s1.innerHTML != '')||
    (s3.innerHTML===s5.innerHTML && s5.innerHTML===s7.innerHTML && s3.innerHTML != ''))
    gameOver = true;



    updateGameStatus();
}

function updateGameStatus(){
    var statusBoard = document.getElementById('status');
    if(gameOver){
        if(currentPlayer === 'X')
        statusBoard.innerHTML = "Player X Wins!";
        else if(currentPlayer === 'O')
        statusBoard.innerHTML = "Player O Wins!";
    }
    else if(totalMove === 9) 
        statusBoard.innerHTML = "Its a Draw";
    else if(currentPlayer ==='X'){
        currentPlayer = 'O';
        statusBoard.innerHTML = "Player O's Turn";
    }else if(currentPlayer === 'O'){
        currentPlayer = 'X';
        statusBoard.innerHTML = "Player X's Turn";
    }
    

}
