const scoreSection = document.getElementsByClassName('score')[0];
const matchSection = document.getElementsByClassName('match')[0];
const optionsElements = document.querySelectorAll('.options');

var computerScore = 0;
var playerScore = 0;

hideElement(scoreSection);
hideElement(matchSection);

document.getElementById("initiate_game").addEventListener('click', beginGame);
optionButtons = document.getElementsByClassName('options-button');
for (var i = 0; i < optionButtons.length; i++){
    optionButtons[i].addEventListener('click', optionClicked);
}

function optionClicked(){

    document.querySelector('.hands').classList.add('shake');
    for (var item of optionsElements)
        hideElement(item);

    let animationTime = 900; // 900 is the duration that it takes to finish the shake animation
    let buttonClicked = this;
    setTimeout(function () {

        if (buttonClicked.id === 'rock_button')
            console.log('ROCK');
        else if (buttonClicked.id === 'paper_button')
            console.log('PAPER');
        else if (buttonClicked.id === 'scissors_button')
            console.log('SCISSORS');

        document.querySelector('.hands').classList.remove('shake');
        for (var item of optionsElements)
            showElement(item);
    }, animationTime);



}

function beginGame() {
    var introSection = document.getElementsByClassName('intro')[0];
    hideElement(introSection);

    showElement(scoreSection);
    showElement(matchSection);
}

function showElement(element){
    element.classList.remove('hide');
}
function hideElement(element){
    element.classList.add('hide');
}