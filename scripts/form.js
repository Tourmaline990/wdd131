const year = document.querySelector('#year');
let today = new Date();
year.innerHTML=`${today.getFullYear()}`;
const modify = document.querySelector('#modify');
modify.innerHTML = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product =>{
    let card = document.querySelector('select');
    const option = document.createElement('option');
    option.text = product.name;
    option.value = product.id
    card.append(option);
    
})



let numcounter = Number(window.localStorage.getItem('countervisit-is')) || 0;

numcounter ++;

localStorage.setItem('countervisit-is', numcounter);


