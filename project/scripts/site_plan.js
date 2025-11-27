const year = document.querySelector('.year');
let today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.querySelector('#modified').innerHTML = document.lastModified;