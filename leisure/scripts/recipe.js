let  year = document.querySelector('.year');
let today = new Date()
year.textContent = `${today.getFullYear()}`;


let dropping = document.querySelector(".drop");
let filter = document.getElementById('filter');

  
foodie = [
    {
        name: "Yamarita",
        type: 'Snack!Lunch' ,
        Description:'Yamarita is a popular Nigerian snack made from yam slices coated in seasoned egg batter and deep-fried until golden.',
        instruction: 'Peel and cut yam into medium sticks!Lightly season yam with salt!Beat eggs in a bowl and add onion, pepper, and salt!Dip yam sticks into the egg mixture!Fry in hot oil until golden brown! Remove and drain excess oil',
        item_needed: 'Knife! Mixing bowl! Frying pan! Slotted spoon',
        ingriedients: 'Yam! Eggs! Onion (blended or finely chopped)! Salt! Ground pepper! Vegetable oil ',
        images: 'images/yamarita.webp'
      
    },
    {
        name: 'Scrambled Eggs and Toast',
        type: 'Breakfast',
        Description:'A quick and simple breakfast made with soft eggs and toasted bread.',
        instruction: 'Crack eggs into a bowl and whisk lightly.! Heat butter in a pan.! Pour in eggs and stir gently until cooked.!Toast bread and serve with eggs.',
        item_needed: 'Frying pan!Bowl!Whisk or fork!Toaster or pan',
        ingriedients: 'Eggs!Butter or oil!Salt!Bread slices',
        images: 'images/egg_and_toast.webp'
    },
    {
        name: ' Jollof Rice',
        type: 'Lunch! Dinner',
        Description:'A flavorful West African rice dish cooked in tomato sauce and spices.',
        instruction: 'Blend tomatoes, pepper, and onion.!Fry the blended mixture in oil.!Add seasoning and salt.!Add washed rice and water!Cook until rice is soft and dry.',
        item_needed: 'Blender!Cooking pot!Spoon',
        ingriedients: 'Rice!Tomatoes!Pepper!Onion!Vegetable oil!Seasoning cubes!Salt',
        images: 'images/jollof_rice.webp'
    },
    {
        name: 'Pancakes',
        type: 'Breakfast,!Snack',
        Description:'Soft and fluffy pancakes perfect for breakfast or light snacks.',
        instruction: 'Mix dry ingredients in a bowl.!Add milk and egg, whisk until smooth.!Heat pan and lightly oil it.!Pour batter and cook until bubbles form.!Flip and cook the other side.',
        item_needed: 'Mixing bowl!Whisk!Frying pan!',
        ingriedients: 'Flour!Milk!Egg!Sugar!Baking powder!Butter or oil',
        images: 'images/pancakes.webp'
    },
    {
        name: ' Grilled Chicken',
        type: "Dinner",
        Description:'Juicy chicken marinated with spices and grilled to perfection.',
        instruction: 'Season chicken with spices and salt.!Allow to marinate.!Grill or bake until fully cooked.!Turn occasionally to avoid burning.',
        item_needed: 'Bowl!Grill or oven tray!Tongs',
        ingriedients: 'Chicken pieces!Spices!Salt!Vegetable oil',
        images: 'images/grilled_chicken.webp'
    },
    {
        name: 'Fried Rice',
        type: 'Lunch, Dinner',
        Description: 'Stir-fried rice mixed with vegetables and seasoning.',
        instruction: 'Heat oil and sauté onion.!Add vegetables and seasoning.!Add cooked rice.!Stir and fry until well mixed.' ,
        item_needed: 'Frying pan or wok!Spoon',
        ingriedients: 'Cooked rice!Mixed vegetables!Onion!Oil!Seasoning!Salt',
        images: 'images/fried_rice.webp'
    },
    {
        name: 'Akara (Bean Cakes)',
        type: 'Breakfast! Snack',
        Description:'Deep-fried bean fritters commonly eaten in Nigeria.',
        instruction: 'Peel beans and blend with pepper and onion.!Add salt and mix well.!Scoop mixture into hot oil.!Fry until golden brown.',
        item_needed: 'Blender!Bowl!Frying pan',
        ingriedients: 'Beans!Pepper!Onion!Salt!Vegetable oil',
        images: 'images/akara.webp'
    },
    {
        name: 'Spaghetti Bolognese',
        type: 'Lunch!Dinner',
        Description: 'Pasta served with rich tomato and meat sauce.',
        instruction: 'Boil spaghetti until soft.!Fry onion and meat in oil.!Add blended tomatoes and salt.!Simmer sauce and serve over spaghetti.',
        item_needed: 'Pot!Frying pan!Spoon',
        ingriedients: 'Spaghetti!Ground meat!Tomatoes!Onion!Oil!Salt',
        images: 'images/Spaghetti-Bolognese.webp'
    },
    {
        name: 'Fruit Salad',
        type: 'Breakfast!Snack',
        Description:' A refreshing mix of fresh fruits.',
        instruction:'Wash and cut fruits into small pieces.!Mix all fruits in a bowl.!Serve fresh.', 
        item_needed: 'Knife!Cutting board!Bowl',
        ingriedients: 'Watermelon!Pineapple!Apple!Banana',
        images: 'images/fruit_salad.webp'
    },
    {
        name: 'Yam and Egg Sauce',
        type:' Breakfast! Lunch',
        Description:'Boiled yam served with tomato egg sauce.',
        instruction: 'Boil yam until soft.!Fry onion and tomatoes in oil.!Add beaten eggs and salt.!Stir gently and serve with yam.',
        item_needed: 'Pot!Frying pan!Spoon',
        ingriedients: 'Yam!Eggs!Tomatoes!Onion!Oil!Salt!',
        images: 'images/yam-egg-sauce.webp'
    
    },
    {
        name: 'Chicken Sandwich',
        type:' Breakfast! Lunch! Snack',
        Description:'A filling sandwich with chicken and vegetables.',
        instruction: 'Shred cooked chicken.!Spread mayonnaise on bread.!Add chicken and vegetables.!Close sandwich and serve.',
        item_needed: 'Knife!Pan (optional)!Plate',
        ingriedients: 'Bread!Cooked chicken!Lettuce!Mayonnaise!Salt!',
        images: 'images/chick.webp'
    },
    {
        name: 'Homemade Pizza',
        type: 'Lunch! Dinner',
        Description:' Simple homemade pizza with toppings.',
        instruction: 'Roll out dough.!Spread tomato sauce.!Add cheese and toppings.!Bake until cheese melts.',
        item_needed: 'Baking tray!Oven!Spoon',
        ingriedients: 'Pizza dough!Tomato sauce!Cheese!Toppings of choice',
        images: 'images/pizza.webp'

     
    },
    {
        name: ' Popcorn',
        type: 'Snack',
        Description:'Light and crunchy popcorn.',
        instruction: 'Heat oil in a pot.!Add kernels and cover.!Shake occasionally.!Remove when popping stops.',
        item_needed: 'Pot with lid',
        ingriedients: 'Popcorn kernels!Oil!Salt or sugar',
        images: 'images/popcorn.webp'
    },
    {
        name: 'Vegetable Soup',
        type: ' Dinner',
        Description:' Nutritious soup made with vegetables.',
        instruction: 'Heat palm oil.!Add pepper and seasoning.!Add vegetables and salt.!Cook briefly and serve.',
        item_needed:'Pot!Spoon' ,
        ingriedients: 'Leafy vegetables!Palm oil!Pepper!Seasoning!Salt',
        images: 'images/poundo.webp'
    },
    {
        name: ' Smoothie',
        type: 'Breakfast!Snack',
        Description:'A blended fruit drink.',
        instruction: 'Add all ingredients to blender.!Blend until smooth.!Pour and serve chilled.',
        item_needed: 'Blender!Cup',
        ingriedients: 'Banana!Milk!Strawberry or mango!Honey (optional)',
        images: 'images/smoothie.webp'
    }
]
function splitting(text){
    let contain = document.createElement('div');
    text.split('!').forEach(part=>{
        if(part.trim() === ''){
            return;
        }
      let p = document.createElement('p');
      p.textContent = part.trim();
      contain.append(p);
    })
    return  contain
}

function read_food(foodie) {
    foodie.forEach(food => { 
        // CREATING ELEMENTS
        let divi = document.createElement('div');
        let container =  document.createElement('section');
        let h3 = document.createElement('h3');
        let desc = document.createElement('p');
        let img = document.createElement('img');
        img.src = food.images
        img.alt = 'An image of the dish'
        img.loading = 'lazy';
        let button = document.createElement('button');
        button.classList.add('may');
        button.setAttribute('aria-expanded',false);
        button.textContent = 'Show more'
        //let b = document.create Element('button');
       // b.classList.add('june');
        //populating
        h3.textContent = food.name;
        desc.textContent = food.Description;
        
          //appending
        container.append(h3);
        divi.append(img)
        container.append(divi)
        container.append(desc);
        container.append(button);
        dropping.append(container);
       
        button.addEventListener('click',() => {
           
            

            headings = [  'Ingriedients','How to prepare','Items Needed' ]
            
           
            headings.forEach(text => {
                const h4 = document.createElement('h4');
                h4.textContent = text;
                h4.classList.add('hidden')
                container.append(h4)
                if(h4.textContent === 'Ingriedients'){
                  let ing = splitting(food.ingriedients)
                  ing.classList.add('hidden')
                  container.append(ing)
                }
                else if(h4.textContent === 'How to prepare'){
                   let ins = splitting(food.instruction);
                   ins.classList.add('hidden')
                   container.append(ins)
                }
                else  if(h4.textContent === 'Items Needed'){
                    let itm = splitting(food.item_needed)
                    itm.classList.add('hidden')
                    container.append(itm)
                }
                 

            });
            const hide = document.querySelectorAll('.hidden'); // all hidden children, return a node, maybe a nodev === array.
            const isExpanded = button.getAttribute('aria-expanded') === 'true';   // false
            button.setAttribute('aria-expanded',!isExpanded);  //  true
            hide.forEach(el=>{   
                el.hidden = isExpanded; // hidden is false
                el.classList.toggle('show',!isExpanded); // true
                
            })
            button.textContent = !isExpanded? 'Show less': 'Show more'
            
            
            


            /*const sections = [
  { title: 'Ingredients', data: food.ingriedients },
  { title: 'How to prepare', data: food.instruction },
  { title: 'Items Needed', data: food.item_needed }
];

sections.forEach(section => {
  const h4 = document.createElement('h4');
  h4.textContent = section.title;
  container.append(h4);

  const content = splitting(section.data);
  container.append(content);
});
*/

         
             ///let h4 = document.createElement('h4')
             //let h4a = document.createElement('h4');
             //let h4b = document.createElement('h4');
             //let ing = splitting(food.ingriedients);
             //let ins = splitting(food.instruction);
             //let itm = splitting(food.item_needed);

              //h4.textContent = 'Ingriedients';
              //h4a.textContent = 'How to prepare'
             // h4b.textContent = 'Items Needed';

             // container.append(h4);
             // container.append(ing);
             // container.append(h4a);
             // container.append(ins)
              //container.append(h4b);
              // container.append(itm);
            
             
          

            
    
        }); 
         
    });
     
    
}

read_food(foodie);
let head = document.querySelector('#head');
function norm(isString) {
    let lowered = isString.toLowerCase();
    let trimmed = lowered.trim();
    return trimmed;
}
function makecallback(val) {
       return function callback(food){  
        let obj = food.type.split('!');
        let refined = obj.map(norm);
        return refined.includes(val)  
        };
  
}   
filter.addEventListener('click',() =>{
dropping.textContent = '';
let ul = document.createElement("ul");
let types = ['Snack','Breakfast','Lunch','Dinner','All'];
    types.forEach(type => {
        let li =  document.createElement("li");
        let a = document.createElement('a');

        a.href = '';
        a.textContent = type;

        li.append(a);
        ul.append(li)
    })

dropping.append(ul);

})
dropping.addEventListener('click',(event) => {
   
   if (event.target.tagName === 'A'){
     dropping.textContent = '';
     event.preventDefault()
     let category = event.target.textContent.toLowerCase()
     if (category){
        let it = document.createElement('h3')
        let ref = category.charAt(0).toUpperCase() + category.slice(1);
        it.textContent =  ref ;
        it.classList.add('tack')
        dropping.append(it)
     }
     let finale = foodie.filter(makecallback(category))
     read_food(finale)
     if (category === 'all'){
        read_food(foodie);
     }
     
   }
})

const  menu = document.querySelector('#dropdown')
const nav = document.querySelector('.navigate')
menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    nav.classList.toggle('open')
})