init();

function init() {
    let time = 3000;
    let buttonOk = document.getElementById('button_ok');
    let buttonShare = document.getElementById('share_icon');

    backgroudSlider();
    buttonOk.style.color = 'red';

    setInterval(() => {
        cardBlinker();
    }, time);

    setInterval(() => {
        backgroudSlider();
    }, time);

    setTimeout(() => {
        changeCard('Nome Encontrado!', 'Seu nome foi encontrado clique no botão ok para ver seu cartão natalino');
        document.getElementById('button_ok').removeAttribute('disabled');
        document.getElementById('p2').setAttribute('hidden', true);
    }, 100);

    buttonOk.addEventListener('click', messageSetup);    
    
    buttonShare.addEventListener('click', shareSetup);
}

function backgroudSlider() {
    document.body.style.background = `url('../assets/${randomNumbers(1, 15)}.jpg')`;
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function messageSetup(event) {
    if(isName()){
        let name = getName();
        let text = `${name}, desejo a você um feliz natal!`
        changeCard(`Feliz Natal, ${name}`, text);
        document.getElementById('share_icon').removeAttribute('hidden');
    } else {
        let text = `Desejo que você tenha Natal com muitas felicidades!!`
        changeCard(`Feliz Natal!`, text);
        document.getElementById('share_icon').removeAttribute('hidden');
    }
} 

function shareSetup(event) {
    if(isName()){
        let name = getName();
        let text = `${name}, digite o nome do amigo que você quer mandar este cartão`
        changeCard('Compartilhar cartão', text);
    } else {
        let text = `Digite o nome do amigo que você quer mandar este cartão`
        changeCard('Compartilhar cartão', text);
    }

    convertButton(true);
    document.getElementById('input_card').removeAttribute('hidden');
}

function convertButton(send) {
    let buttonOk = document.getElementById('button_ok');

    if(send){
        buttonOk.innerHTML = 'Enviar';
        buttonOk.removeEventListener('click', messageSetup);
        buttonOk.addEventListener('click', sendLink);
    } else {
        buttonOk.innerHTML = 'OK';
        buttonOk.removeEventListener('click', sendLink);
        buttonOk.addEventListener('click', messageSetup);
    }
}

async function sendLink(event) {
    let input = document.getElementById('sample1');
    let link = 'https://feliz-natal-ten.vercel.app?=';

    const ShareLink = {
        title: "Feliz Natal!",
        text: 'Cartão de natal',
        url: link + Encrypt(input.value)
    };

    try{
        await navigator.share(ShareLink)
    } catch(err){
        console.log(err);
    }
}   

/**
 ----------------------------------------------------------------- * Card Functions 
 * @param {*} title 
 * @param {*} text 
 */

function changeCard(title, text) {
    document.getElementById('title_card').innerHTML = title;
    document.getElementById('text_card').innerHTML = text;
}


function cardBlinker() {
    var color = "rgb("
        + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ")";
        document.getElementById("blinker_card").style.background = color;
        document.getElementById('button_ok').style.color = color;
}



/**
----------------------------------------------------------------- * Name functions 
 * @returns 
 */

function isName() {
    if (location.search.length > 10)
        return true;
    return false;
}

function getName() {
    let text = location.search;
    text = text.replace('?=', '');

    return Decrypt(text)
}

function Encrypt(value)  {
  var result="";
  for(i=0;i<value.length;i++) {
    if(i<value.length-1) {
        result+=value.charCodeAt(i)+10;
        result+="-";
    } else {
        result+=value.charCodeAt(i)+10;
    }
  }
  return result;
}

function Decrypt(value) {
  var result="";
  var array = value.split("-");

  for(i=0;i<array.length;i++) {
    result+=String.fromCharCode(array[i]-10);
  }
  return result;
} 