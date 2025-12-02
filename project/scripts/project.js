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
    let card = document.querySelector("#travel");
    let options = document.createElement('option');
    options.text = travel.name;
    options.value = travel.id;
    card.append(options);
})
let yesradio = document.querySelector('#yes');
let noradio = document.querySelector('#no')
let container = document.querySelector('.allergy_container');
yesradio.addEventListener('change',function(){
    if(yesradio.checked){
        container.innerHTML = '';
        let textarea = document.createElement('textarea')
        textarea.placeholder = 'List your allergies..';
        textarea.name = 'list';
        textarea.id = 'list';

        container.append(textarea)
    }    
})
noradio.addEventListener('change',()=>{
  if (noradio.checked){
      container.innerHTML = '';
    }
})

