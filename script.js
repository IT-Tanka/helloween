// itgdi.info
// курсы javascript с домашними заданиями
// проверкой кода и разбором ошибок

const header = document.querySelector('.site-header');
const spider = document.querySelector('.spider');

function scarySound(){
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = './monstr.mp3';
    audio.play();
}

spider.onclick = scarySound;

document.querySelector('.halloween-on').onchange = function() {
    if (this.checked) {
        header.classList.add('site-header-bg');
        spider.classList.add('spider-animation');
    }
    else {
        header.classList.remove('site-header-bg');
        spider.classList.remove('spider-animation');
    }
}