const wrapper =document.querySelector('.wrapper');



const registerLink =document.querySelector('.register-link');
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

const loginLink =document.querySelector('.login-link');
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

const btnPop =document.querySelector('.btnLogin-popup');
btnPop.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

const closeIcon =document.querySelector('.icon-close');
closeIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const btnPopRed =document.querySelector('.dropdownBtn');
btnPopRed.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

const reducedMenu = document.querySelector('.reducedMenu');
const barsIcon = document.querySelector('.barsIcon');

barsIcon.addEventListener('click', ()=> {
    reducedMenu.classList.toggle('open')
})
