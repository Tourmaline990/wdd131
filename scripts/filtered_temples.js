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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California",
    dedicated: "1964, December, 17 ",
    area: "80157",
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/320x200/02-Oakland-Temple-Exterior-2236160.jpg"
  },
  {
    templeName: "Frankfurt Germany ",
    location: "Frankfurt, Germany ",
    dedicated: "1987,August,28",
    area:"32895",
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/320x200/frankfurt-temple-3-2278181.jpg"
  },
 {
   templeName: "Hong Kong China ", 
   location: "Hong Kong, China ",
   dedicated: "1996,May,26",
   area:"51921",
   imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/200x320/hong-kong-china-temple-lds-39528-wallpaper.jpg"
 }
];

function createTempleCards(temples){

  const container = document.querySelector('#append');
  container.innerHTML = '';
    temples.forEach(temple => {
       let card = document.createElement('section') ;
       let name = document.createElement('h3');
       let location = document.createElement("p");
       let dedication = document.createElement("p");
       let area = document.createElement('p');
       let img = document.createElement('img');

       name.textContent = temple.templeName;
       location.textContent = `Location: ${temple.location}`;
       dedication.textContent = `Dedicated: ${temple.dedicated}`;
       area.textContent = `Area: ${temple.area}sq ft`;
       img.src = temple.imageUrl;
       img.alt = `Image of ${temple.templeName}`;
       img.loading = "lazy"

       card.append(name);
       card.append(location);
       card.append(dedication);
       card.append(area);
       card.append(img);

       container.append(card);
    });
}
(createTempleCards(temples));

function slice_string(string){
    let first = string.dedicated;
     return parseInt(first.slice(0,4));
}

const lesser_link = document.querySelector('#lesser');
lesser_link.addEventListener('click',() =>{
  event.preventDefault();
let lesser = temples.filter(temple=> slice_string(temple) < 1900);
createTempleCards(lesser);

})
const newer_link = document.querySelector('#newer');
newer_link.addEventListener('click',()=>{
  event.preventDefault();
  let newer = temples.filter(temple=>slice_string(temple) > 2000);
  createTempleCards(newer);
})

function slice_area(string){
  return string.area;
}

const smaller_link = document.querySelector('#smaller');
smaller_link.addEventListener('click',(event)=> {
  event.preventDefault();
  let smaller = temples.filter(temple => slice_area(temple) < 10000);
  createTempleCards(smaller);
})

const larger_link = document.querySelector('#larger');
larger_link.addEventListener('click',(event) => {
    event.preventDefault();
    let larger = temples.filter(temple => slice_area(temple) > 90000);
    createTempleCards(larger);
})







