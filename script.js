let pierre = document.querySelector('#pierre');
let feuille = document.querySelector('#feuille');
let ciseaux = document.querySelector('#ciseaux');
let myScore = 0;
let scoreBot = 0;


pierre.addEventListener('click', () => {


    let audioPierre = new Audio('sons/WEAPSwrd_Serpette raclee sur une pierre 3 (ID 0330)_LS.mp3');
    audioPierre.play();

    document.querySelector('.myP').remove();
    document.querySelector('.botP').remove();


    const btn = ['<img src="img/ciseaux.png" alt="">','<img src="img/des-pierres.png" alt="">','<img src="img/feuille.png" alt="">'];
    const botP = document.createElement('p');
    botP.classList.add('botP');
    botP.innerHTML = `${btn[Math.floor(Math.random() * (3 - 0) + 0)]}`
    document.querySelector('.arene').appendChild(botP);


    if (botP.innerHTML == btn[0]) {
        document.querySelector('#myScore').innerText = myScore += 1;
    } else if (botP.innerHTML == btn[2]) {
        document.querySelector('#scoreBot').innerText = scoreBot += 1
    }
console.log(btn[2]);
console.log(botP.innerHTML)

    const myP = document.createElement('p');
    myP.classList.add('myP')
    myP.innerHTML = '<img src="img/des-pierres.png" alt="">';
    document.querySelector('.arene').appendChild(myP);

    ratioVictoire();
    ratioDefaite();

});


feuille.addEventListener('click', () => {

    let audioFeuille = new Audio('sons/PAPRHndl_Page qui tourne (ID 0164)_LS.mp3')
    audioFeuille.play();

    document.querySelector('.myP').remove();
    document.querySelector('.botP').remove();

    const btn = ['<img src="img/ciseaux.png" alt="">','<img src="img/des-pierres.png" alt="">','<img src="img/feuille.png" alt="">'];

    const botP = document.createElement('p');
    botP.classList.add('botP');
    botP.innerHTML = `${btn[Math.floor(Math.random() * (3 - 0) + 0)]}`
    document.querySelector('.arene').appendChild(botP);


    if (botP.innerHTML == btn[1]) {
        document.querySelector('#myScore').innerText = myScore += 1
    } else if (botP.innerHTML == btn[0]) {
        document.querySelector('#scoreBot').innerText = scoreBot += 1
    }


    const myP = document.createElement('p');
    myP.classList.add('myP')
    myP.innerHTML = '<img src="img/feuille.png" alt="">';
    document.querySelector('.arene').appendChild(myP);

    ratioVictoire();
    ratioDefaite();

});


ciseaux.addEventListener('click', () => {

    let audioCiseaux = new Audio('sons/SWSH_Epee qui fend l air (ID 0128)_LS.mp3')
    audioCiseaux.play();

    document.querySelector('.myP').remove();
    document.querySelector('.botP').remove();


    const btn = ['<img src="img/ciseaux.png" alt="">','<img src="img/des-pierres.png" alt="">','<img src="img/feuille.png" alt="">'];
    const botP = document.createElement('p');

    botP.classList.add('botP');
    botP.innerHTML = `${btn[Math.floor(Math.random() * (3 - 0) + 0)]}`
    document.querySelector('.arene').appendChild(botP);


    if (botP.innerHTML == btn[2]) {
        document.querySelector('#myScore').innerText = myScore += 1
    } else if (botP.innerHTML == btn[1]) {
        document.querySelector('#scoreBot').innerText = scoreBot += 1
    }

    const myP = document.createElement('p');
    myP.classList.add('myP')
    myP.innerHTML = '<img src="img/ciseaux.png" alt="">';
    document.querySelector('.arene').appendChild(myP);

    ratioVictoire();
    ratioDefaite();
});
function ratioVictoire(){
  let ratioV = myScore / (myScore+scoreBot) * 100;
    document.querySelector('#victoire').innerText = `${ratioV.toFixed(1)}%`;
    if (document.querySelector('#victoire').innerText == 'NaN%'){
        document.querySelector('#victoire').innerText = 0
    }
}

function ratioDefaite(){
    let ratioD = scoreBot / (myScore+scoreBot)*100;
    document.querySelector('#defaite').innerText = `${ratioD.toFixed(1)}%`
    if (document.querySelector('#defaite').innerText == 'NaN%'){
        document.querySelector('#defaite').innerText = 0
    }
}


