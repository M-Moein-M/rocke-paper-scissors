const scoreSection = document.getElementsByClassName('score')[0];
const matchSection = document.getElementsByClassName('match')[0];
const optionsElements = document.querySelectorAll('.options');

var computerScore = 0;
var playerScore = 0;

var computerChoice; // shows the last choice by computer
var playerChoice;  // shows the last choice by player

hideElement(scoreSection);
hideElement(matchSection);

document.getElementById("initiate_game").addEventListener('click', beginGame);
optionButtons = document.getElementsByClassName('options-button');
for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', optionClicked);
}

function optionClicked() {

    changeHands2Rock();

    document.querySelector('.hands').classList.add('shake');
    for (var item of optionsElements)
        hideElement(item);

    let animationTime = 900; // 900 is the duration that it takes to finish the shake animation
    let buttonClicked = this;

    if (buttonClicked.id === 'rock_button')
        playerChoice = 0;
    else if (buttonClicked.id === 'paper_button')
        playerChoice = 1;
    else if (buttonClicked.id === 'scissors_button')
        playerChoice = 2;

    calculateResult();

    setTimeout(function () {

        document.querySelector('.hands').classList.remove('shake');
        for (var item of optionsElements)
            showElement(item);

        changeHands();

        document.querySelector('#player_score').innerHTML = playerScore.toString();
        document.querySelector('#computer_score').innerHTML = computerScore.toString();

        // console.log(playerScore + '    ' + computerScore);
        // console.log(playerChoice + '    ' + computerChoice);
    }, animationTime);
}

function changeHands2Rock(){
    document.getElementById('player_hand').src = 'assets/rock.png';
    document.getElementById('computer_hand').src = 'assets/rock.png';
}

function changeHands() {
    let playerImageSrc = '';
    switch (playerChoice) {
        case 0 :
            playerImageSrc = 'assets/rock.png';
            break;
        case 1 :
            playerImageSrc = 'assets/paper.png';
            break;
        case 2 :
            playerImageSrc = 'assets/scissors.png';
            break;
    }

    let computerImageScr = '';
    switch (computerChoice) {
        case 0 :
            computerImageScr = 'assets/rock.png';
            break;
        case 1 :
            computerImageScr = 'assets/paper.png';
            break;
        case 2 :
            computerImageScr = 'assets/scissors.png';
            break;
    }
    document.getElementById('player_hand').src = playerImageSrc;
    document.getElementById('computer_hand').src = computerImageScr;
}

function calculateResult() {
    // 0 is rock
    // 1 is paper
    // 2 is scissors

    computerChoice = Math.floor(Math.random() * 3);

    switch (playerChoice) {
        case 0:
            if (computerChoice === 1)
                computerScore++;
            else if (computerChoice === 2)
                playerScore++;
            break;
        case 1:
            if (computerChoice === 0)
                playerScore++;
            else if (computerChoice === 2)
                computerScore++;
            break;
        case 2:
            if (computerChoice === 0)
                computerScore++;
            else if (computerChoice === 1)
                playerScore++;
            break;
    }

}

function beginGame() {
    let introSection = document.getElementsByClassName('intro')[0];
    hideElement(introSection);

    showElement(scoreSection);
    showElement(matchSection);
}

function showElement(element) {
    element.classList.remove('hide');
}

function hideElement(element) {
    element.classList.add('hide');
}