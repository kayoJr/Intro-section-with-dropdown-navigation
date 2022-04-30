
const menuClose = document.querySelector('#menu-close');
const menuOpen = document.querySelector('#menu-open');
const navFeatures = document.querySelector('#nav-features');
const navCompany = document.querySelector('#nav-company');
cargarEventListener();

function cargarEventListener(){
    navFeatures.addEventListener('click', openMenuFeatures);
    navCompany.addEventListener('click', openMenuCompany);
    menuClose.addEventListener('click', menu);
    menuOpen.addEventListener('click', menu);
}

function menu(){
    const navegacion = document.querySelector('#nav-header');
    navegacion.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
}

function openMenuFeatures(){
    
    const featuresLinks = document.querySelector('#features-links');
    const arrowUp = document.querySelector('#arrow-up-features');
    const arrowDown = document.querySelector('#arrow-down-features');

    featuresLinks.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');
}


function openMenuCompany(){
    //const navegacion = document.querySelector('#nav-header');
    //const buttonClose = document.querySelector('#close');
    const companyLinks = document.querySelector('#company-links');
    const arrowUp = document.querySelector('#arrow-up-company');
    const arrowDown = document.querySelector('#arrow-down-company');

    companyLinks.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');
    //buttonClose.classList.toggle('hidden');
}
