let player1 = [];
let cpu = [];
let yourTurn = true;
let currentCharacter = null;
let cpuCharacter = null;
let cpuMove = 0;
let newHealth = 100;
let damage = 0;
let totalHealth;
let updateHealth;
let healthPrecent;
let characters = document.querySelectorAll('.characters');
let topText = document.querySelector('.top-text');
let startButton = document.querySelector('.start-button');
let titleText = document.querySelector('.title-text');
let battleMenu = document.querySelector('.battle-menu');
let cpuMenu = document.querySelector('.cpu-move');
let battleMoves = document.querySelectorAll('.moves');
let characterName = document.querySelector('.character-name')
let healthBar = document.querySelector('.healthBar');
let health = document.querySelector('.health');
let char1 = document.querySelector('#char1');
let char2 = document.querySelector('#char2');
let char3 = document.querySelector('#char3');
let char4 = document.querySelector('#char4');
let char5 = document.querySelector('#char5');
let char6 = document.querySelector('#char6');
let charArray = [char1, char2, char3, char4, char5, char6];

class Characters {
    constructor(name, hp, moves){
        this.name = name;
        this.hp = hp;
        this.moves = moves;
    }
    takeDmg(dmg) {
        this.dmg = dmg;
        this.hp = this.hp - this.dmg;
    }
};

//Character Class


class Moves {
    constructor(name, dmg, uses, animation){
        this.name = name;
        this.dmg = dmg;
        this.uses = uses;
        this.animation = animation;
    }
};

//Moves Class

let chargeBlast = new Moves('Charge Blast', 10, 8, '#');
let dash = new Moves('Dash', 12, 4, '#');
let topSpin = new Moves('Charge Blast', 14, 3, '#');
let flameBlast= new Moves('Flame Blast', 20, 1, '#');
//megaMan Moves

let smash = new Moves('Smash', 20, 1, '#');
let hop = new Moves('Hop', 10, 8, '#');
let pound = new Moves('Pound', 14, 3, '#');
let kick = new Moves('Kick', 12, 4, '#');
//mario Moves
let chomp = new Moves('Chomp', 10, 8, '#');
let kirbyKick = new Moves('Kirby Kick', 12, 4, '#');
let explode = new Moves('Explode', 14, 3, '#');
let hurricaneBlast = new Moves('Hurricane Blast', 20, 1, '#');
//kirby Moves
let slice = new Moves('Slice', 10, 8, '#');
let limitBreak = new Moves('Limit Break', 12, 4, '#');
let omniSlash = new Moves('Omni Slash', 14, 3, '#');
let knights = new Moves('Knights of the Round', 20, 1, '#');
//cloud Moves
let slash = new Moves('Slash', 10, 8, '#');
let dukuNut = new Moves('Duku Nut', 12, 4, '#');
let leapingSlash = new Moves('Leaping Slash', 14, 3, '#');
let tornadoSlash = new Moves('Tornado Slash', 20, 1, '#');
//link Moves
let sonicPoke = new Moves('Sonic Poke', 10, 8, '#');
let sonicKick = new Moves('Sonic Kick', 12, 4, '#');
let sonicBlade = new Moves('Sonic Blade', 14, 3, '#');
let sonicBoom = new Moves('Sonic Bloom', 20, 1, '#');
//animations not set #############################################

//Moves

let megaMan = new Characters('Mega-Man', 200, [chargeBlast, dash, topSpin, flameBlast]);

let mario = new Characters('Mario', 200, [smash, hop, pound, kick]);

let kirby = new Characters('Kirby', 200, [chomp, kirbyKick, explode, hurricaneBlast]);

let cloud = new Characters('Cloud', 200, [slice, limitBreak, omniSlash, knights]);

let link = new Characters('Link', 200, [slash, dukuNut, leapingSlash,tornadoSlash]);

let guile = new Characters('Guile', 200, [sonicPoke, sonicKick, sonicBlade, sonicBoom]);


//Characters

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
    for(let i = 0; i < charArray.length; i++){
            charArray[i].style.display = 'none';
        }
    topText.style.display = 'none';
};

let cpuChar = () => {
    let cpuRand = charArray[Math.floor(Math.random() * 5)];
    // cpuCharacter = cpuRand.dataset.name;
    // console.log(cpuCharacter);
    if(cpuRand.id === 'char1'){
        cpuCharacter = mario;
    }
    if(cpuRand.id === 'char2'){
        cpuCharacter = kirby;
    }
    if(cpuRand.id === 'char3'){
        cpuCharacter = cloud;
    }
    if(cpuRand.id === 'char4'){
        cpuCharacter = link;
    }
    if(cpuRand.id === 'char5'){
        cpuCharacter = megaMan;
    }
    if(cpuRand.id === 'char6'){
        cpuCharacter = guile;
    }
    cpuRand.style.display = 'block';
    cpuRand.style.margin = '0% 0% 0% 75%';
};
let battleLift = () => {
    battleMenu.style.animation = 'fade-in 5s ease-in-out 3s forwards';
    // console.log(currentCharacter.moves);
    battleMoves[0].innerText = currentCharacter.moves[0].name;
    battleMoves[1].innerHTML = currentCharacter.moves[1].name;
    battleMoves[2].innerHTML = currentCharacter.moves[2].name;
    battleMoves[3].innerHTML = currentCharacter.moves[3].name;
    characterName.innerHTML = currentCharacter.name;
    battleMenu.style.display = 'block';
    healthBar.style.display = 'block';
};


function selectChar () {
    if(this === char1){
        currentCharacter = mario;
        disappear(0);
        cpuChar();
        this.style.postion = 'absolute';
        this.style.marginTop = '100px';
        this.style.marginLeft = '10px';
        this.style.zIndex = '2';
        battleLift();
    }
    if(this === char2){
        currentCharacter = kirby;
        disappear(1);
        cpuChar();
        this.style.postion = 'absolute';
        this.style.marginTop = '100px';
        this.style.zIndex = '2';
        battleLift();
    }
    if(this === char3){
        currentCharacter = cloud;
        disappear(2);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '100px';
        this.style.zIndex = '2';
        battleLift();
    }
    if(this === char4){
        currentCharacter = link;
        disappear(3);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '100px';
        this.style.zIndex = '2';
        battleLift();
    }
    if(this === char5){
        currentCharacter = megaMan;
        disappear(4);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '100px';
        this.style.zIndex = '2';
        battleLift();
    }
    if(this === char6){
        currentCharacter = guile;
        disappear(5);
        cpuChar();
        this.style.position = 'absolute';
        this.style.marginTop = '100px';
        this.style.zIndex = '2';
        battleLift();
    }
};



for(let i = 0; i < characters.length; i++){
    characters[i].addEventListener('click', selectChar);
};
//This whole section selects a character for player and cpu and makes others dissappear. Will also put the 2 characters in the right postions for battle

let chooseCpuMove = () => {
    let randomNum = Math.floor(Math.random() * 4);
    cpuMove = cpuCharacter.moves[randomNum];
    let addMenu = () => {
        cpuMenu.style.display = 'block';
    };
    setTimeout(addMenu, 1000);
    let removeMenu =() => {
        cpuMenu.style.display = 'none';
    };
    setTimeout(removeMenu, 3000);
};


let damageCalc = () => {
    updateHealth = currentCharacter.hp;
    console.log(updateHealth, 'prior');
    
    currentCharacter.takeDmg(cpuMove.dmg);
    console.log(currentCharacter.hp, 'after dmg');
    healthPrecent =  (currentCharacter.hp / 200) * 100;
    console.log(healthPrecent, '%');
    
    health.style.width = healthPrecent + '%';
    if(healthPrecent <= 60){
        health.style.backgroundColor = 'yellow';
    };
    if(healthPrecent <= 30){
        health.style.backgroundColor = 'red';
    };
    if(healthPrecent <= 10){
        health.style.backgroundColor = 'rgb(88, 1, 1)';
    }
};



function chooseMove () {
    if(this.id === 'move1'){
        chooseCpuMove();
        damageCalc();
        
    }
    if(this.id === 'move2'){
        chooseCpuMove();
        damageCalc();
        // chooseCpuMove();
    }
    if(this.id === 'move3'){
        chooseCpuMove();
        damageCalc();
        // chooseCpuMove();
    }
    if(this.id === 'move4'){
        chooseCpuMove();
        damageCalc();
        // chooseCpuMove();
    }
};


for(i = 0; i < battleMoves.length; i++){
    battleMoves[i].addEventListener('click', chooseMove);
};











//functions for moves. when user selects a move set 'turn = false' until animation completes to prevent further inputs then 'turn = true'









//set keydown eventlisteners



//##########Soo to do damage..... megaMan.takeDmg(character.move#.dmg);
//##########This will change megaMan's health




//check for winner









//victory screen