const menu = document.querySelector('#dropdown');
const navigate = document.querySelector('.navigation');

menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    navigate.classList.toggle('open');
})

let yesradio = document.querySelector('#yes');
let noradio = document.querySelector('#no')
let container = document.querySelector('.allergy_container');
yesradio.addEventListener("click",function(){
    if(yesradio.checked){
        container.innerHTML = '';
        let textarea = document.createElement('textarea');
        textarea.placeholder = 'List your allergies..';
        textarea.name = 'list';
        textarea.id = 'list';
        container.append(textarea)
    };    
})
noradio.addEventListener("click",function(){
  if (noradio.checked){
      container.innerHTML = '';
    }
})

let year = document.querySelector('#year')
let modify = document.querySelector('#modify')
let today = new Date();
year.innerHTML = `${today.getFullYear()}`;
modify.innerHTML = document.lastModified;

const traveller = [
    {
    id: "travel_1",
    name: "Solo",
    },
        {
    id: "travel_2",
    name: "Couple",
    },
        {
    id: "travel_3",
    name: "Group Of Friends",
    },
        {
    id: "travel_4",
    name: "Family",
    },
        {
    id: "travel_5",
    name: "Group Meetups"
    }
]
   traveller.forEach(travel=>{
    let card = document.querySelector('#travel');
    let op = document.createElement('option');
    op.text = travel.name;
    op.value = travel.id;
    card.append(op);
})




  