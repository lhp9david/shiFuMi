let pierre = document.querySelector('#pierre');
let feuille = document.querySelector('#feuille');
let ciseaux = document.querySelector('#ciseaux');
let myScore = 0;
let scoreBot = 0;
let prenom = document.querySelector('#nom').value;


document.querySelector('#valider').addEventListener('click', () => {
    document.querySelector('.information').style.display = 'none';
    document.querySelector('.air').classList.remove('none');
    document.querySelector('.air').classList.add('fadein');
    let prenom = document.querySelector('#nom');
    let regle = document.querySelector('.regle');
    regle.innerText = `Bienvenue dans l'arène ${prenom.value}, pour jouer il te suffit de cliquer sur les boutons en bas. `
    clavier.pause();
})

pierre.addEventListener('click', () => {

    let audioPierre = new Audio('sons/WEAPSwrd_Serpette raclee sur une pierre 3 (ID 0330)_LS.mp3');
    audioPierre.play();
    document.querySelector('.regle').classList.add('none')
    document.querySelector('.myP').remove();
    document.querySelector('.botP').remove();
    document.querySelector('.youWin').classList.remove('block')
    document.querySelector('.youLose').classList.remove('block')
    document.querySelector('.youLose').classList.remove('none')
    document.querySelector('.youWin').classList.remove('none')
    document.querySelector('.youDraw').classList.remove('none')

    const btn = ['<img src="img/ciseaux.png" alt="">', '<img src="img/des-pierres.png" alt="">', '<img src="img/feuille.png" alt="">'];
    const botP = document.createElement('p');
    botP.classList.add('botP');
    botP.innerHTML = `${btn[Math.floor(Math.random() * (3 - 0) + 0)]}`
    document.querySelector('.arene').appendChild(botP);

    if (botP.innerHTML == btn[0]) {
        document.querySelector('#myScore').innerText = myScore += 1;
        document.querySelector('.youLose').classList.add('none')
        document.querySelector('.youWin').classList.add('block')
        document.querySelector('.youDraw').classList.add('none')
    } else if (botP.innerHTML == btn[2]) {
        document.querySelector('#scoreBot').innerText = scoreBot += 1
        document.querySelector('.youWin').classList.add('none')
        document.querySelector('.youLose').classList.add('block')
        document.querySelector('.youDraw').classList.add('none')
    } else {
        document.querySelector('.youWin').classList.add('none')
        document.querySelector('.youLose').classList.add('none')
        document.querySelector('.youDraw').classList.add('block')
    }

    const myP = document.createElement('p');
    myP.classList.add('myP')
    myP.innerHTML = '<img src="img/des-pierres.png" alt="">';
    document.querySelector('.arene').appendChild(myP);

    // ratioVictoire();
    // ratioDefaite();
    victoireDefaite();
});


feuille.addEventListener('click', () => {

    let audioFeuille = new Audio('sons/PAPRHndl_Page qui tourne (ID 0164)_LS.mp3')
    audioFeuille.play();
    document.querySelector('.regle').classList.add('none')
    document.querySelector('.myP').remove();
    document.querySelector('.botP').remove();
    document.querySelector('.youWin').classList.remove('block')
    document.querySelector('.youLose').classList.remove('block')
    document.querySelector('.youLose').classList.remove('none')
    document.querySelector('.youWin').classList.remove('none')
    document.querySelector('.youDraw').classList.remove('none')

    const btn = ['<img src="img/ciseaux.png" alt="">', '<img src="img/des-pierres.png" alt="">', '<img src="img/feuille.png" alt="">'];
    const botP = document.createElement('p');
    botP.classList.add('botP');
    botP.innerHTML = `${btn[Math.floor(Math.random() * (3 - 0) + 0)]}`
    document.querySelector('.arene').appendChild(botP);

    if (botP.innerHTML == btn[1]) {
        document.querySelector('#myScore').innerText = myScore += 1
        document.querySelector('.youLose').classList.add('none')
        document.querySelector('.youWin').classList.add('block')
        document.querySelector('.youDraw').classList.add('none')
    } else if (botP.innerHTML == btn[0]) {
        document.querySelector('#scoreBot').innerText = scoreBot += 1
        document.querySelector('.youWin').classList.add('none')
        document.querySelector('.youLose').classList.add('block')
        document.querySelector('.youDraw').classList.add('none')
    } else {
        document.querySelector('.youWin').classList.add('none')
        document.querySelector('.youLose').classList.add('none')
        document.querySelector('.youDraw').classList.add('block')
    }

    const myP = document.createElement('p');
    myP.classList.add('myP')
    myP.innerHTML = '<img src="img/feuille.png" alt="">';
    document.querySelector('.arene').appendChild(myP);

    // ratioVictoire();
    // ratioDefaite();
    victoireDefaite();
});


ciseaux.addEventListener('click', () => {

    let audioCiseaux = new Audio('sons/SWSH_Epee qui fend l air (ID 0128)_LS.mp3')
    audioCiseaux.play();
    document.querySelector('.regle').classList.add('none')
    document.querySelector('.myP').remove();
    document.querySelector('.botP').remove();
    document.querySelector('.youWin').classList.remove('block')
    document.querySelector('.youLose').classList.remove('block')
    document.querySelector('.youLose').classList.remove('none')
    document.querySelector('.youWin').classList.remove('none')
    document.querySelector('.youDraw').classList.remove('none')


    const btn = ['<img src="img/ciseaux.png" alt="">', '<img src="img/des-pierres.png" alt="">', '<img src="img/feuille.png" alt="">'];
    const botP = document.createElement('p');

    botP.classList.add('botP');
    botP.innerHTML = `${btn[Math.floor(Math.random() * (3 - 0) + 0)]}`
    document.querySelector('.arene').appendChild(botP);


    if (botP.innerHTML == btn[2]) {
        document.querySelector('#myScore').innerText = myScore += 1
        document.querySelector('.youLose').classList.add('none')
        document.querySelector('.youWin').classList.add('block')
        document.querySelector('.youDraw').classList.add('none')
       
    } else if (botP.innerHTML == btn[1]) {
        document.querySelector('#scoreBot').innerText = scoreBot += 1
        document.querySelector('.youWin').classList.add('none')
        document.querySelector('.youLose').classList.add('block')
        document.querySelector('.youDraw').classList.add('none')
    } else {
        document.querySelector('.youWin').classList.add('none')
        document.querySelector('.youLose').classList.add('none')
        document.querySelector('.youDraw').classList.add('block')
    }

    const myP = document.createElement('p');
    myP.classList.add('myP')
    myP.innerHTML = '<img src="img/ciseaux.png" alt="">';
    document.querySelector('.arene').appendChild(myP);

    // ratioVictoire();
    // ratioDefaite();
    victoireDefaite();
});

function victoireDefaite() {
    console.log(myScore)
    if (myScore == 5) {
        document.querySelector('body').classList.add('victoire');
        document.querySelector('.air').classList.add('none');
        let message = document.createElement('p')
        message.classList.add('message')
        message.innerText = 'Bravo! Tu as gagné !';
        let recommencer = document.createElement('button');
        recommencer.innerText = 'recommencer une partie'
        recommencer.classList.add('recommencer')
        document.querySelector('body').appendChild(message);
        document.querySelector('body').appendChild(recommencer)
        let sonVictoire = new Audio('sons/victoire.mp3')
        sonVictoire.play();
        recommencer.addEventListener('click', () => {
            location.reload();
        })
    } else if (scoreBot == 5) {
        document.querySelector('body').classList.add('defaite');
        document.querySelector('.air').classList.add('none');
        let message = document.createElement('p')
        message.classList.add('message')
        message.innerText = 'Oups ! Tu as perdu';
        let recommencer = document.createElement('button');
        recommencer.innerText = 'recommencer une partie'
        recommencer.classList.add('recommencer')
        document.querySelector('body').appendChild(message);
        document.querySelector('body').appendChild(recommencer)
        recommencer.addEventListener('click', () => {
            location.reload();
        })
    }
}
// function ratioVictoire() {
//     let ratioV = myScore / (myScore + scoreBot) * 100;
//     document.querySelector('#victoire').innerText = `${ratioV.toFixed(1)}%`;
//     if (document.querySelector('#victoire').innerText == 'NaN%') {
//         document.querySelector('#victoire').innerText = 0
//     }
// }

// function ratioDefaite() {
//     let ratioD = scoreBot / (myScore + scoreBot) * 100;
//     document.querySelector('#defaite').innerText = `${ratioD.toFixed(1)}%`
//     if (document.querySelector('#defaite').innerText == 'NaN%') {
//         document.querySelector('#defaite').innerText = 0
//     }
// }

// set up text to print, each item in array is new line
var aText = new Array(
    "Salut, je m'appelle AI, je suis le champion du monde des robots du pierre, feuilles, ciseaux Voudrais tu essayer de me battre ? Je te propose un match en 5 points. Quel est ton Prénom ?",);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.querySelector(".msgAi");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

typewriter();
window.addEventListener('load', ()=>{
    clavier = new Audio('sons/cmptkey-clavier-d-ordinateur-id-0229-ls_itoFT21W.mp3');
    clavier.play();
})




