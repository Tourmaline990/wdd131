const btn = document.querySelector('#main-button')
const div =  document.querySelector('#a_div');

btn.addEventListener('click',()=>{
   const drops =  btn.getAttribute('aria-expanded') === 'true';
   btn.setAttribute('aria-expanded', !drops);
   div.hidden = drops;
   div.classList.toggle('show', !drops);
   btn.textContent = !drops? 'show less': 'show more'
  

})