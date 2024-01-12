const displayCondition = document.getElementById('displaying');
const playerPoints = document.getElementById('wins');
const drawsPoints = document.getElementById('draws');
const lostPoints = document.getElementById('lose');
const playerChoose = document.getElementById('player');
const computerChoose = document.getElementById('computer');

const lostText = 'You Lost!';
const drawtext = `It's Draws!`;
const winText = 'You Wins!';
const textPlayers = 'Players : ';
const textComputers = 'Computers : ';
const winPointText = 'Wins : ';
const drawPointText = 'Draws :';
const lostPointText = 'Lost :';

let winCounter = 0;
let lostCounter = 0;
let drawCounter = 0;

function calculate(events){
    const numbers = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    const computers = choices[numbers];

    if (events === computers){
        displayCondition.textContent = drawtext;
        displayCondition.style.color = 'gray';
        console.log('draws!');
        drawCounter++;
    }
    else if (events === 'rock'){
        if (computers === "scissors"){
            displayCondition.textContent = winText;
            displayCondition.style.color = 'rgb(26, 255, 26)';
            winCounter++;
        }
        else{
            displayCondition.textContent = lostText;
            displayCondition.style.color = 'rgb(255, 66, 66)';
            lostCounter++;
        }
    }
    else if(events === 'paper'){
        if (computers === "rock"){
            displayCondition.textContent = winText;
            displayCondition.style.color = 'rgb(26, 255, 26)';
            winCounter++;
        }
        else{
            displayCondition.textContent = lostText;
            displayCondition.style.color = 'rgb(255, 66, 66)';
            lostCounter++;
        }
    }
    else if (events === 'scissors'){
        if (computers === "paper"){
            displayCondition.textContent = winText;
            displayCondition.style.color = 'rgb(26, 255, 26)';
            winCounter++;
        }
        else{
            displayCondition.textContent = lostText;
            displayCondition.style.color = 'rgb(255, 66, 66)';
            lostCounter++;
        }
    }
    playerChoose.textContent = textPlayers + events;
    computerChoose.textContent = textComputers + computers;

    playerPoints.textContent = winPointText + winCounter;
    drawsPoints.textContent = drawPointText + drawCounter;
    lostPoints.textContent = lostPointText + lostCounter;
}
