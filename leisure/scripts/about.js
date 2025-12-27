let year = document.querySelector('.year');
const today = new Date()
year.innerHTML = `${today.getFullYear()}`;

const navigator = document.querySelector('.navigate');
const  menu = document.querySelector('#dropdown');
menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    navigator.classList.toggle('open');
})

document.querySelector('.btn').addEventListener('click',()=>{
    window.location.href = 'index.html'
});
