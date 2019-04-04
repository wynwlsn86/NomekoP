let player1 = [];
let cpu = [];
let yourTurn = true;
let currentCharacter = null;
let cpuCharacter = null;
let cpuMove = 0;
let characterMove;
let updateHealth;
let healthPrecent;
let totalHealth;
let newHealth = 100;
let cpuHealth;
let damage = 0;
let playSong = document.querySelector('#playSong');
let attackSound = document.querySelector('#attackSound');
let characters = document.querySelectorAll('.characters');
let topText = document.querySelector('.top-text');
let startButton = document.querySelector('.start-button');
let titleText = document.querySelector('.title-text');
let battleMenu = document.querySelector('.battle-menu');
let allUses = document.querySelectorAll('.allUses');
let moves1Uses = document.querySelector('.move1-uses');
let moves2Uses = document.querySelector('.move2-uses');
let moves3Uses = document.querySelector('.move3-uses');
let moves4Uses = document.querySelector('.move4-uses');
let cpuMenu = document.querySelector('.cpu-move');
let showCpuMove = document.querySelector('.cpu-move-result');
let battleMoves = document.querySelectorAll('.moves');
let characterName = document.querySelector('.character-name')
let healthBar = document.querySelector('.healthBar');
let health = document.querySelector('.health');
let cpuBar = document.querySelector('.cpuBar');
let cpuHealthBar = document.querySelector('.cpu-health')
let cpuName = document.querySelector('.cpu-name');
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
    constructor(name, dmg, uses, sound){
        this.name = name;
        this.dmg = dmg;
        this.uses = uses;
        this.sound = sound;
    }
    use() {
        this.uses = this.uses - 1;
    }
    playSound() {
        attackSound.setAttribute('src', `${this.sound}`)
    }
};

//Moves Class

let chargeBlast = new Moves('Charge Blast', 15, 8, '#');
let dash = new Moves('Dash', 18, 5, '#');
let topSpin = new Moves('Charge Blast', 24, 3, '#');
let flameBlast= new Moves('Flame Blast', 30, 2, '#');
//megaMan Moves

let smash = new Moves('Smash', 30, 2, '#');
let hop = new Moves('Hop', 15, 8, '#');
let pound = new Moves('Pound', 24, 3, '#');
let kick = new Moves('Kick', 18, 5, '#');
//mario Moves
let chomp = new Moves('Chomp', 15, 8, './images/kirbyCho.wav');
let kirbyKick = new Moves('Kirby Kick', 18, 5, './images/kirbyKick.wav');
let explode = new Moves('Explode', 24, 3, './images/kirbyExp.wav');
let hurricaneBlast = new Moves('Hurricane Blast', 30, 2, './images/kirbyHur.wav');
//kirby Moves
let slice = new Moves('Slice', 15, 8, '#');
let limitBreak = new Moves('Limit Break', 18, 5, '#');
let omniSlash = new Moves('Omni Slash', 24, 3, '#');
let knights = new Moves('Knights of the Round', 30, 2, '#');
//cloud Moves
let slash = new Moves('Slash', 15, 8, './images/link2.wav');
let dukuNut = new Moves('Duku Nut', 18, 5, './images/link4.wav');
let leapingSlash = new Moves('Leaping Slash', 24, 3, './images/link3.wav');
let tornadoSlash = new Moves('Tornado Slash', 30, 2, './images/link.wav');
//link Moves
let sonicPoke = new Moves('Sonic Poke', 15, 8, '#');
let sonicKick = new Moves('Sonic Kick', 18, 5, '#');
let sonicBlade = new Moves('Sonic Blade', 24, 3, '#');
let sonicBoom = new Moves('Sonic Bloom', 30, 2, '#');
//animations not set #############################################

//Moves

let megaMan = new Characters('Mega-Man', 200, [chargeBlast, dash, topSpin, flameBlast]);

let mario = new Characters('Mario', 200, [hop, kick, pound, smash]);

let kirby = new Characters('Kirby', 200, [chomp, kirbyKick, explode, hurricaneBlast]);

let cloud = new Characters('Cloud', 200, [slice, limitBreak, omniSlash, knights]);

let link = new Characters('Link', 200, [slash, dukuNut, leapingSlash,tornadoSlash]);

let guile = new Characters('Guile', 200, [sonicPoke, sonicKick, sonicBlade, sonicBoom]);


//Characters
//All Characters and Moves defined########################################
/////////////////////////////////////////////////////////////////






let dropStart = () => {
    startButton.style.animation = 'drop-in 4s ease-in-out forwards';
    titleText.innerHTML = 'NOMEKOP';
    titleText.style.animation = 'fade-in 4s ease-in-out 3s forwards';
}

window.onload = dropStart();
//Start button to drop in, and title to fade in on a delax
//First state, button drops in with tittle###############################
///////////////////////////////////////////////////////////////////////////



let fadeIn = () => {
    for(let i = 0; i < characters.length; i++){
        // characters[i].style.animation = 'fade-in 2s ease-in-out forwards';
        characters[i].className = 'fader-in';
    };
    topText.innerHTML = 'Select Your Character'
    topText.style.animation = 'fade-in 3s ease-in-out 1s forwards';
    startButton.style.animation = 'pull-out 5s ease-in-out 1s forwards';
    titleText.style.display = 'none';
    //can i reverse fade the start button out using fade in, in reverse?
    
};
startButton.addEventListener('click', fadeIn);
//Characters fade-in, in the line-up for selection############################
//////////////////////////////////////////////////////////////////////////////
//Fade in Function to run after Start is fired onClick



let disappear = (num) => {
    player1.push(charArray.splice(num,1));
    for(let i = 0; i < charArray.length; i++){
            charArray[i].style.display = 'none';
        }
    topText.style.display = 'none';
};
//Sets not chosed characters to display none##############################
/////////////////////////////////////////////////////////
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
    cpuName.innerHTML = cpuCharacter.name;
    battleMenu.style.display = 'block';
    healthBar.style.display = 'block';
    cpuBar.style.display = 'block';
    playSong.setAttribute('src', './images/ff7.mp3')
};


function selectChar () {
    titleText.innerHTML = ' ';
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

function chooseCpuMove () {
    console.log(this);
    let randomNum = Math.floor(Math.random() * 4);
    cpuMove = cpuCharacter.moves[randomNum];
    showCpuMove.innerText = cpuMove.name;
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
    cpuCharacter.takeDmg(characterMove.dmg);
    cpuHealth = cpuCharacter.hp;
    cpuHealthPrecent = (cpuCharacter.hp / 200) * 100;
    cpuHealthBar.style.width = cpuHealthPrecent + '%';
    currentCharacter.takeDmg(cpuMove.dmg);
    healthPrecent =  (currentCharacter.hp / 200) * 100;
    health.style.width = healthPrecent + '%';
    console.log(cpuHealth, 'cpu hp');
    if(healthPrecent <= 60 && healthPrecent > 30){
        console.log('yellow');
        health.style.backgroundColor = 'yellow';
    }
    else if(healthPrecent <= 30 && healthPrecent > 10){
        console.log('red');
        health.style.backgroundColor = 'red';
    }
    else if(healthPrecent <= 10 && healthPrecent > 0){
        console.log('deading');
        health.style.backgroundColor = 'rgb(88, 1, 1)';
    }
    else if(healthPrecent <= 0){
        console.log('dead');
        if(currentCharacter.name === 'Mario'){
            char1.style.display = 'none';
        }
        if(currentCharacter.name === 'Kirby'){
            char2.style.display = 'none';
        }
        if(currentCharacter.name === 'Cloud'){
            char3.style.display = 'none';
        }
        if(currentCharacter.name === 'Link'){
            char4.style.display = 'none';
        }
        if(currentCharacter.name === 'Mega-Man'){
            char5.style.display = 'none';
        }
        if(currentCharacter.name === 'Guile'){
            char6.style.display = 'none';
        }
        playSong.setAttribute('src', './images/defeat.mp3')
        titleText.style.display = 'block';
        titleText.innerText = 'DEFEATED!!!!';
        titleText.style.color = 'red';
        battleMenu.style.display = 'none';



        cpuBar.style.display = 'none';

        healthBar.style.display = 'none';
        health.style.display = 'none';
        startButton.innerHTML = 'Continue?';
        startButton.display = 'block';
        startButton.style.width = '400px';
        startButton.style.animation = 'drop-in 4s ease-in-out forwards';

    };
    if(cpuHealthPrecent <= 60 && cpuHealthPrecent > 30){
        console.log('yellow');
        cpuHealthBar.style.backgroundColor = 'yellow';
    }
    else if(cpuHealthPrecent <= 30 && cpuHealthPrecent > 10){
        console.log('red');
        cpuHealthBar.style.backgroundColor = 'red';
    }
    else if(cpuHealthPrecent <= 10 && cpuHealthPrecent > 0){
        console.log('deading');
        cpuHealthBar.style.backgroundColor = 'rgb(88, 1, 1)';
    }
    else if(cpuHealthPrecent <= 0){
        console.log('dead');
        if(cpuCharacter.name === 'Mario'){
            char1.style.display = 'none';
        }
        if(cpuCharacter.name === 'Kirby'){
            char2.style.display = 'none';
        }
        if(cpuCharacter.name === 'Cloud'){
            char3.style.display = 'none';
        }
        if(cpuCharacter.name === 'Link'){
            char4.style.display = 'none';
        }
        if(cpuCharacter.name === 'Mega-Man'){
            char5.style.display = 'none';
        }
        if(cpuCharacter.name === 'Guile'){
            char6.style.display = 'none';
        }
        titleText.style.display = 'block';
        titleText.innerText = 'VICTORY!!!!';
        titleText.style.color = 'green';
        battleMenu.style.display = 'none';


        cpuBar.style.display = 'none';
        healthBar.style.display = 'none';
        health.style.display = 'none';
        playSong.setAttribute('src', './images/victory.mp3')
        startButton.innerHTML = 'Continue?';
        startButton.display = 'block';
        startButton.style.width = '400px';
        startButton.style.animation = 'drop-in 4s ease-in-out forwards';
    };
};

let pleaseWait = () => {
    battleMoves[0].innerText = '';
    battleMoves[1].innerHTML = 'Please Wait...';
    battleMoves[1].style.textAlign = 'center';
    battleMoves[1].style.fontSize = '40pt'
    battleMoves[2].innerHTML = '';
    battleMoves[3].innerHTML = '';
    for(let i = 0; i < allUses.length; i++){
        allUses[i].style.display = 'none';
    };
}

let restoreMoves = () => {
    battleMoves[0].innerText = currentCharacter.moves[0].name;
    battleMoves[1].innerHTML = currentCharacter.moves[1].name;
    battleMoves[1].style.textAlign = 'left';
    battleMoves[1].style.fontSize = '20pt'
    battleMoves[2].innerHTML = currentCharacter.moves[2].name;
    battleMoves[3].innerHTML = currentCharacter.moves[3].name;
    for(let i = 0; i < allUses.length; i++){
        allUses[i].style.display = 'block';
    };
}


function chooseMove () {
    if(this.id === 'move1'){
        if(currentCharacter.moves[0].uses > 0){
            characterMove = currentCharacter.moves[0];
            chooseCpuMove();
            damageCalc();
            pleaseWait();
            currentCharacter.moves[0].playSound();
            setTimeout(restoreMoves, 4000);
            console.log('first', currentCharacter.moves[0].uses);
            currentCharacter.moves[0].use();
            moves1Uses.innerText = `${currentCharacter.moves[0].uses}`
            console.log('second', currentCharacter.moves[0].uses);
        }
        else{
            window.alert('No uses left!');
        }
        
    }
    if(this.id === 'move2'){
        if(currentCharacter.moves[1].uses > 0){
            characterMove = currentCharacter.moves[0];
            chooseCpuMove();
            damageCalc();
            pleaseWait();
            currentCharacter.moves[1].playSound();
            setTimeout(restoreMoves, 4000);
            currentCharacter.moves[1].use();
            moves2Uses.innerText = `${currentCharacter.moves[1].uses}`
        }
        else{
            window.alert('No uses left!');
        }
    }
    if(this.id === 'move3'){
        if(currentCharacter.moves[2].uses > 0){
            characterMove = currentCharacter.moves[0];
            chooseCpuMove();
            damageCalc();
            pleaseWait();
            currentCharacter.moves[2].playSound();
            setTimeout(restoreMoves, 4000);
            console.log('first', currentCharacter.moves[2].uses);
            currentCharacter.moves[2].use();
            moves3Uses.innerText = `${currentCharacter.moves[2].uses}`
            console.log('second', currentCharacter.moves[2].uses);
        }
        else{
            window.alert('No uses left!');
        }
    }
    if(this.id === 'move4'){
        console.log('precheck', currentCharacter.moves[2].uses);
        if(currentCharacter.moves[3].uses > 0){
            characterMove = currentCharacter.moves[0];
            chooseCpuMove();
            damageCalc();
            pleaseWait();
            currentCharacter.moves[3].playSound();
            setTimeout(restoreMoves, 4000);
            console.log('first', currentCharacter.moves[3].uses);
            currentCharacter.moves[3].use();
            moves4Uses.innerText = `${currentCharacter.moves[3].uses}`
            console.log('second', currentCharacter.moves[3].uses);
        }
        else{
            window.alert('No uses left!');
        }
    }
};

let reset = () => {
    for(let i = 0; i < characters.length; i++){
        characters[i].style.display = 'block';
        characters[i].addEventListener('click', selectChar);
        characters[i].style.zIndex = '2';
        characters[i].style.position = 'static';
        characters[i].style.margin = '50px';
        fadeIn();
    };
    let temp = player1.splice(0.1);
    console.log(temp, 'temp');
    charArray.push(temp[0][0]);
    console.log(charArray, 'charArray');
    // charArray.push(player1[0].splice(0,1));
    console.log(player1);
    titleText.innerText= 'Select Your Character';
    titleText.style.marginTop = '50px';
    titleText.style.display = 'block';
    startButton.style.display = 'none';
    health.style.width = '100%';
    healthBar.style.backgroundColor = 'green';
    cpuHealthBar.style.width = '100%';
    cpuHealthBar.style.backgroundColor = 'green';
    moves1Uses.innerText = '8';
    moves2Uses.innerText = '5';
    moves3Uses.innerText = '3';
    moves4Uses.innerText = '2';
};


for(i = 0; i < battleMoves.length; i++){
    battleMoves[i].addEventListener('click', chooseMove);
};

