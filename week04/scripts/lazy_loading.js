const currentyear = document.querySelector('#currentyear');
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;
const modified = document.querySelector('#modified');
modified.innerHTML =  document.lastModified;