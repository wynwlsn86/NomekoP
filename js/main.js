let player1 = [];
let cpu = [];
let yourTurn = true;
let characters = document.querySelectorAll('.characters');
let topText = document.querySelector('.top-text');
let startButton = document.querySelector('.start-button');
let titleText = document.querySelector('.title-text');
let char1 = document.querySelector('#char1');
let char2 = document.querySelector('#char2');
let char3 = document.querySelector('#char3');
let char4 = document.querySelector('#char4');
let char5 = document.querySelector('#char5');
let char6 = document.querySelector('#char6');
let charArray = [char1, char2, char3, char4, char5, char6];


let dropStart = () => {
    startButton.style.animation = 'drop-in 4s ease-in-out forwards';
    titleText.innerHTML = 'NOMEKOP';
    titleText.style.animation = 'fade-in 4s ease-in-out 3s forwards';
}

window.onload = dropStart();
//Start button to drop in, and title to fade in on a delax



let fadeIn = () => {
    for(let i = 0; i < characters.length; i++){
        characters[i].style.animation = 'fade-in 2s ease-in-out forwards';
    };
    
    topText.innerHTML = 'Select Your Character'
    topText.style.animation = 'fade-in 3s ease-in-out 1s forwards';
    startButton.style.animation = 'pull-out 5s ease-in-out 1s forwards';
    titleText.style.display = 'none';
    //can i reverse fade the start button out using fade in, in reverse?
    
};

startButton.addEventListener('click', fadeIn);
//Fade in Function to run after Start is fired onClick

let disappear = (num) => {
    player1.push(charArray.splice(num,1));
        console.log(charArray);
        console.log(player1[num]);
    for(let i = 0; i < charArray.length; i++){
            charArray[i].style.display = 'none';
        }
    topText.style.display = 'none';
};

let cpuChar = () => {
    let cpuRand = charArray[Math.floor(Math.random() * 5)];
    cpu.push(cpuRand); 
    cpuRand.style.display = 'block';
    cpuRand.style.margin = '0% 0% 0% 80%';
    console.log(cpu);
};

function selectChar () {
    if(this === char1){
        disappear(0);
        cpuChar();
        this.style.postion = 'absolute';
        this.style.marginTop = '200px';
        this.style.marginLeft = '10px';
        this.style.zIndex = '2';
    }
    if(this === char2){
        disappear(1);
        cpuChar();
        this.style.postion = 'absolute';
        this.style.marginTop = '200px';
        this.style.zIndex = '2';
    }
    if(this === char3){
        disappear(2);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '200px';
        this.style.zIndex = '2';
    }
    if(this === char4){
        disappear(3);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '200px';
        this.style.zIndex = '2';
    }
    if(this === char5){
        disappear(4);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '200px';
        this.style.zIndex = '2';
    }
    if(this === char6){
        disappear(5);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '200px';
        this.style.zIndex = '2';
    }
};

for(let i = 0; i < characters.length; i++){
    characters[i].addEventListener('click', selectChar);
};
//This whole section selects a character for player and cpu and makes others dissappear. Will also put the 2 characters in the right postions for battle







//make the battle menu appear









//class out different characters









//class out movesets








//functions for moves. when user selects a move set 'turn = false' until animation completes to prevent further inputs then 'turn = true'









//set keydown eventlisteners









//check for winner









//victory screen