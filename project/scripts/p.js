let year = document.querySelector('#year')
let modify = document.querySelector('#modify')
let today = new Date();
year.innerHTML = `${today.getFullYear()}`;
modify.innerHTML = document.lastModified;

const menu = document.querySelector('#dropdown');
const navigate = document.querySelector('.navigation');

menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    navigate.classList.toggle('open');
})

