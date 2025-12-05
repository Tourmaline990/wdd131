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

const destinations = [
    {
        tripName: "Zuma Rock",
        foods:  "Local snacks like Kilishi (spicy dried meat), Fura da Nono",
        fun_facts: "Known as the “Gateway to Abuja.” Featured on the Nigerian Naira ₦100 note.",
        location: "Along the Abuja–Kaduna expressway, near Madalla, Niger State" ,
        unique: "Massive monolith that towers over the surrounding plain.",
        Activities: "Hiking, photography, sightseeing ",
       type:"Countryside , Nature ",
       url: "images/zuma_rock.webp"
    },
     {
        tripName: " Olumo Rock",
        foods:  " Traditional Ofada rice, Ewedu soup, roasted plantains ",
        fun_facts:" Used as a fortress during inter-tribal wars. ",
        location: " Abeokuta, Ogun State",
        unique: "Offers elevator and stair access with panoramic city views. ",
        Activities: "Hiking, sightseeing, cultural tours",
       type: "Countryside , Historical ",
        url: "images/olumo_rock.webp"
    },
     {
        tripName: "Awhum Waterfall & Cave",
        foods:  "Local soups like Ofe Nsala, pounded yam, roasted fish",
        fun_facts: "The cave is considered a spiritual site with healing properties.",
        location: "Awhum, Enugu State",
        unique: "Waterfall flows year-round; serene forest environment",
        Activities: "Hiking, meditation, photography",
       type: "Waterfall , Nature",
        url: "images/awhum_cave.webp"
    },
     {
        tripName: "Idanre Hills ",
        foods:  "Amala, Ewedu, roasted plantains",
        fun_facts: " Ancient settlements found on the hills, over 800 years old." ,
        location: "Idanre, Ondo State",
        unique: "Terraced ancient architecture on hills with breathtaking views",
        Activities: "Trekking, hiking, photography",
       type:"Countryside , Historical",
        url: "images/idanre_hills.webp"
    },
     {
        tripName: "Lekki Conservation Centre ",
        foods:  "Boli (roasted plantain), seafood from Lagos coast",
        fun_facts: "Features the longest canopy walkway in Africa",
        location: "Lekki, Lagos State",
        unique: "Elevated walkway through rainforest canopy",
        Activities: "Wildlife watching, nature walks, photography",
       type:"Wildlife , Nature",
        url: "images/lekki_cc.webp"
    },
     {
        tripName: "Tarkwa Bay Beach ",
        foods:  " Grilled fish, shawarma, coconut drinks",
        fun_facts: "Popular beach for swimmers and surfers in Lagos",
        location: "Accessible by boat from Lagos Marina",
        unique: "Calm beach sheltered from ocean currents; ideal for beginners in water sports",
        Activities: " Swimming, sunbathing, surfing",
       type: "Beach",
        url: "images/tarkwa_bay.webp"
    },
     {
        tripName: "Ibeno Beach ",
        foods:  "Fresh seafood, Edikang Ikong, Afang soup",
        fun_facts: "One of West Africa’s longest beaches",
        location: "Ibeno, Akwa Ibom State",
        unique:  "Long sandy coastline perfect for beach sports",
        Activities: "Swimming, beach sports, picnics",
       type: "Beach",
        url: "images/ibeno_beach.webp"
    },
     {
        tripName: "Osun-Osogbo Sacred Grove ",
        foods:  "Amala, Gbegiri, local snacks sold during festivals",
        fun_facts: "UNESCO World Heritage site; home to the Osun-Osogbo annual festival",
        location: "Osogbo, Osun State",
        unique: "Sacred forest with shrines, sculptures, and cultural significance",
        Activities: " Cultural tours, photography, attending festivals",
       type: "Historical , Cultural",
        url: "images/osun.webp"
    },
     {
        tripName: "Sukur Cultural Landscape ",
        foods:  "Millet dishes, local yam meals, roasted goat meat",
        fun_facts:"UNESCO World Heritage site with an ancient palace and terraced fields",
        location: "Sukur, Madagali Local Government, Adamawa State",
        unique: "Combines cultural heritage with agricultural terracing on hills",
        Activities: "Trekking, historical tours, photography",
       type:"Countryside , Historical",
        url: "images/sukur_lands.webp"
    },
     {
        tripName: "Yankari National Park",
        foods:  "Grilled meat, Tuwo Shinkafa, local stews",
        fun_facts:"Nigeria’s largest wildlife park; home to Wikki Warm Springs",
        location: "Bauchi State, near Gombe",
        unique: " Rich wildlife including elephants, baboons, hippos",
        Activities: "Safari, wildlife photography, nature walks",
       type:"Wildlife / Nature",
        url: "images/yankari.webp"
    },
     {
        tripName: "Gashaka-Gumti National Park ",
        foods:  "Grilled fish, local soups, pounded yam",
        fun_facts: "Largest national park in Nigeria",
        location: "Taraba State, along Nigeria-Cameroon border",
        unique: "Diverse ecosystems, trekking trails, rare wildlife species",
        Activities: "Trekking, wildlife watching, camping",
       type: "Wildlife , Adventure",
        url: "images/gashaka.webp"
    },
     {
        tripName: "Erin-Ijesha Waterfall (Olumirin) ",
        foods:  "Local stews, roasted corn, yam dishes",
        fun_facts: "Believed to have seven stages; each has a pool for bathing",
        location: "Erin-Ijesha, Osun State",
        unique: "Multi-tier waterfall",
        Activities: "Hiking, swimming, picnics",
       type: "Waterfall",
        url: "images/erin_ijesha.webp"
    },
     {
        tripName: "Obudu Mountain Resort (Obudu Cattle Ranch) ",
        foods:  "Local Nigerian cuisine, mountain vegetables, roasted meats",
        fun_facts:  " Famous mountain resort with cable cars and cool climate",
        location: " Obudu, Cross River State",
        unique: "Plateau, cable car rides, scenic views",
        Activities: "Cable car, hiking, swimming",
       type: "Countryside , Adventure",
        url: "images/obudu_mount.webp"
    },
     {
        tripName: "Erin Lake (Okomu Forest Reserve) ",
        foods:  "Fresh fish, local soups",
        fun_facts: "Protected rainforest; home to monkeys and diverse bird species",
        location: "Ovia South-West LGA, Edo State",
        unique: "Peaceful forest lake with wildlife",
        Activities: "Canoeing, birdwatching, nature walks",
       type: "Wildlife , Countryside",
        url: "images/okomu.webp"
    },
     {
        tripName: "Ogbunike Caves – Anambra State",
        foods:  "Local yam meals, roasted plantains",
        fun_facts:"UNESCO-listed; caves used for religious purposes",
        location: " Ogbunike, Anambra State",
        unique: "Intricate cave system with underground streams",
        Activities: "Swimming, picnics, hiking",
       type: "Waterfall ,Countryside",
        url: "images/Ogbunike-cave.jpg"
    },
     {
        tripName: "Omu Resort & Amusement Park ",
        foods:  "Fast food, local snacks",
        fun_facts: "Large amusement park with safari-like attractions",
        location: "Lekki, Lagos State",
        unique: "Combines amusement park with mini zoo",
        Activities: "Rides, safari viewing, picnics",
       type: "Urban , Wildlife , Adventure",
        url: "images/omu_resort.webp"
    },
     {
        tripName: "National Museum, Lagos ",
        foods:  "Local street food around Lagos Island (Boli, roasted corn)",
        fun_facts: " Houses Nigerian artifacts and bronze sculptures",
        location: " On Awolowo Road, Lagos Island",
        unique: "Displays Nigeria’s rich cultural heritage in one place",
        Activities: "Museum tours, learning Nigerian history, photography",
       type: " Urban , Historical",
        url: "images/national_museum.webp"
    },
     {
        tripName:"Tinapa Business & Leisure Resort ",
        foods:  "Seafood, local delicacies like Afang and Edikang Ikong",
        fun_facts: "Modern resort with shopping, entertainment, and water parks",
        location: "Location: Calabar, Cross River State",
        unique: "Waterfront resort with leisure + business combo",
        Activities: "Shopping, swimming, water sports",
       type:"Urban , Beach , Leisure",
        url: "images/tinapa-waterpark.webp"
    },
     {
        tripName: "Kajuru Castle ",
        foods:  " Nigerian grilled meats, local soups",
        fun_facts:" Medieval-style castle built privately; unique in Africa",
        location: "Kajuru, Kaduna State",
        unique: "Only private castle open for guests in Nigeria",
        Activities: "Photography, overnight stays, tours",
       type: " Countryside , Historical",
        url: "images/kajuru-castle.webp"
    },
     {
        tripName: "Erin-Ile Waterfalls ",
        foods:  " Local pounded yam, soups, fish",
        fun_facts:" Hidden gem in Kwara State; peaceful natural waterfall",
        location: " Erin-Ile, Kwara State",
        unique: " Calm, serene environment",
        Activities:  "Swimming, picnics, hiking",
       type: "Waterfall , Countryside",
        url: "images/erin_ijesha.webp"
    }
]
const container = document.querySelector('#contain');
function populate_destination (destinations){
destinations.forEach(destination => {
            //CREATING ELEMENTS
        let section = document.createElement('section');
        section.classList= 'future';
        let heading = document.createElement('h3');
        let pa = document.createElement('p');
        let pb = document.createElement('p');
        
        let pf = document.createElement('p');
        let divi = document.createElement('div');
        let image = document.createElement('img');
        let btn = document.createElement('button');

        // POPULATING TEXTCONTENT
        btn.textContent = 'Learn More';
        heading.textContent = destination.tripName;
        pa.textContent =  ` Location: ${destination.location}`;
        pb.textContent = `Fun Facts: ${destination.fun_facts}`;
        pf.textContent = ` Location type: ${destination.type}`;
        image.src = destination.url;
        image.alt = 'an image of the destination';
        image.loading = "lazy";
            
        // APPENDING ELEMENTS
        divi.append(image);
        section.append(heading);
        section.append(divi);
        section.append(pa);
        section.append(pb);
        section.append(pf);
        section.append(btn);
        container.append(section);

       btn.addEventListener("click",()=>{
        let pc = document.createElement('p');
        let pd = document.createElement('p');
        let pe = document.createElement('p');
         
        pc.textContent = ` Foods: ${destination.foods}`;
        pd.textContent = ` What makes it unique: ${destination.unique}`;
        pe.textContent = `Activities: ${destination.Activities}`;
         
        section.append(pc);
        section.append(pd);
        section.append(pe);

        btn.remove();
       })

        }); 
}
populate_destination(destinations);


         