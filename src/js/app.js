const links = document.querySelectorAll('.header__menu li a');
const pannel = document.querySelectorAll('main > section');
const logo = document.querySelector('#logo');
const marker = document.querySelector('#marker');
const loader = document.querySelector('#loader');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');


//function

function offAll(x) {
    for (let pannelElm of pannel) {
        if (pannelElm == x) {
            pannelElm.classList.add('active')
        } else {
            pannelElm.classList.remove('active');
        }
    };
}

function selectiveLinks(x) {
    for (let linkElm of links) {
        if (linkElm == x) {
            x.parentNode.classList.add('active');
        } else {
            linkElm.classList.remove('active');
            linkElm.parentNode.classList.remove('active');
        }
    }
}

function markerPosition(e) {
    if (e.offsetLeft == null || e.offsetLeft == 0) {
        //do nothing
    } else {
        marker.style.left = e.offsetLeft+(e.offsetWidth/2)+'px';
    }
}

function loaderOff() {
    loader.classList.add('active');
}

//event

window.addEventListener('load', ()=>{
    loaderOff();
})

for (let elm of links) {
    elm.addEventListener('click', (e)=>{
        marker.classList.add('active');
        markerPosition(e.target);
        offAll(document.querySelector(elm.getAttribute('data-href')));
        selectiveLinks(elm);
        
    })
}

logo.addEventListener('click', ()=>{
    marker.classList.remove('active');
    for (let elm of pannel) {
        elm.classList.remove('active');
    }
    for (let elm of links) {
        elm.parentNode.classList.remove('active');
        elm.classList.remove('active');
    }
})

//burger 

burger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

for (let elm of links) {
    elm.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    });
}