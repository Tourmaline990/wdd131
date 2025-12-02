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
    let card = document.querySelector("select");
    let option = document.createElement('option')
    option.text = travel.name
    option.value = travel.id
    card.append(option)
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