init();

function init() {
    setTimeout(() => {
        changeCard();
    }, 3000)
}

function changeCard() {
    document.getElementById('button_ok').removeAttribute('disabled');
    document.getElementById('title_card').innerHTML = 'Nome Encontrado!';
    document.getElementById('text_card').innerHTML = 'Seu nome foi encontrado clique no botão ok para ver seu cartão natalino';
}

