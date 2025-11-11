const currentyear = document.getElementById("currentyear");
const today = new Date();
currentyear.innerHTML = ` <span class="design">${today.getFullYear()} </span>`;
document.getElementById("modified").innerHTML = document.lastModified;


const menubutton = document.querySelector('#menu');
const navigation =  document.querySelector('.navigation');

menubutton.addEventListener('click',function(){
    navigation.classList.toggle('open');
    menubutton.classList.toggle('open');
});

