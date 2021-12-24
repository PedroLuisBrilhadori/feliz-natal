init();

function init() {
    setTimeout(() => {
        changeCard('Nome Encontrado!', 'Seu nome foi encontrado clique no botão ok para ver seu cartão natalino');
        document.getElementById('button_ok').removeAttribute('disabled');
        document.getElementById('button_ok').addEventListener(('click'), () => {
            if(isName()){
                let name = getName();
                let text = `${name}, quero de desejar um feliz natal e um prospero ano novo! Se você recebeu isso, você é especial para mim. Não me pergunte como o site achou seu nome...`
                changeCard(`Feliz Natal, ${name}`, text);
            }
        })
    }, 3000);
}

function changeCard(title, text) {
    document.getElementById('title_card').innerHTML = title;
    document.getElementById('text_card').innerHTML = text;
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