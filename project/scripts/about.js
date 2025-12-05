const truth = document.querySelector('#true')
let btn = document.querySelector('.review');
  const app  = document.querySelector('#app');
  btn.addEventListener("click",()=>{  
    // textarea
    
     let  t =   document.createElement('textarea');
     t.placeholder = 'share your review';
     t.id = 'rev';
     t.name = 'rev';
     app.append(t);
     
     // submit button
     const fly = document.createElement('input')
     fly.type = 'submit';
     fly.value = 'done';
     fly.id = 'fly'
     app.append(fly)
     // event listener on submit button
     fly.addEventListener("click",()=>{
          let a =  document.createElement('p');
          a.textContent = t.value;
          truth.append(a)
          // remove textarea and submit
          t.remove();
          fly.remove();
     })
     
    
})

let year = document.querySelector('#year')
let modify = document.querySelector('#modify')
let today = new Date();
year.innerHTML = `${today.getFullYear()}`;
modify.innerHTML = document.lastModified

const menu = document.querySelector('#dropdown');
const navigate = document.querySelector('.navigation');

menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    navigate.classList.toggle('open');
})