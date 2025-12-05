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
const button = document.querySelector('#btn');
button.addEventListener('click',()=>{
    window.location.href = 'trips.html';
})

let counting = Number(window.localStorage.getItem('counting-is')) || 0;

counting ++;

window.localStorage.setItem('counting-is',counting);