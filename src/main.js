init();

function init() {
    setTimeout(() => {
        changeCard();
    }, 3000)

    if(isName()){
        let name = getName();
    }
}

function changeCard() {
    document.getElementById('button_ok').removeAttribute('disabled');
    document.getElementById('title_card').innerHTML = 'Nome Encontrado!';
    document.getElementById('text_card').innerHTML = 'Seu nome foi encontrado clique no botão ok para ver seu cartão natalino';
}

function isName() {
    if (location.search.length > 1)
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