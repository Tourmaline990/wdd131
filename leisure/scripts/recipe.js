let  year = document.querySelector('.year');
let today = new Date()
year.textContent = `${today.getFullYear()}`;




let dropping = document.querySelector(".drop");
let filter = document.getElementById('filter');
filter.addEventListener('click',() =>{
    dropping.textContent = '';
    // creating Elements
    let p = document.createElement('p');
    let ul = document.createElement("ul");
    let lia =  document.createElement("li");
    let liab =  document.createElement("li");
    let liac =  document.createElement("li");
    let liad =  document.createElement("li");
    let a = document.createElement('a');
    let ab = document.createElement('a');
    let ac = document.createElement('a');
    let ad = document.createElement('a');

    //populating
    p.textContent = 'Sort by:'
    a.href = "";
    a.classList = 'firsta';
    ab.href = "";
    ab.classList = 'seconda';
    ac.href = '';
    ac.classList = 'thirda';
    ad.href = "";
    ad.classList = 'fourtha';
    a.textContent = 'snacks';
    ab.textContent = 'Breakfast';
    ac.textContent = 'Lunch';
    ad.textContent = 'Dinner';

    //appending
    
    lia.append(a);
    liab.append(ab);
    liac.append(ac);
    liad.append(ad);
    dropping.append(p);
    dropping.append(ul);
    ul.append(lia);
    ul.append(liab);
    ul.append(liac);
    ul.append(liad);
})

foodie = [
    {
        name: "Yamarita",
        type: 'Snack!Lunch' ,
        Description:'Yamarita is a popular Nigerian snack made from yam slices coated in seasoned egg batter and deep-fried until golden.',
        instruction: 'Peel and cut yam into medium sticks!Lightly season yam with salt!Beat eggs in a bowl and add onion, pepper, and salt!Dip yam sticks into the egg mixture!Fry in hot oil until golden brown! Remove and drain excess oil',
        item_needed: 'Knife! Mixing bowl! Frying pan! Slotted spoon',
        ingriedients: 'Yam! Eggs! Onion (blended or finely chopped)! Salt! Ground pepper! Vegetable oil '
      
    },
    {
        name: 'Scrambled Eggs and Toast',
        type: 'Breakfast',
        Description:'A quick and simple breakfast made with soft eggs and toasted bread.',
        instruction: 'Crack eggs into a bowl and whisk lightly.! Heat butter in a pan.! Pour in eggs and stir gently until cooked.!Toast bread and serve with eggs.',
        item_needed: 'Frying pan!Bowl!Whisk or fork!Toaster or pan',
        ingriedients: 'Eggs!Butter or oil!Salt!Bread slices'
    },
    {
        name: ' Jollof Rice',
        type: 'Lunch! Dinner',
        Description:'A flavorful West African rice dish cooked in tomato sauce and spices.',
        instruction: 'Blend tomatoes, pepper, and onion.!Fry the blended mixture in oil.!Add seasoning and salt.!Add washed rice and water!Cook until rice is soft and dry.',
        item_needed: 'Blender!Cooking pot!Spoon',
        ingriedients: 'Rice!Tomatoes!Pepper!Onion!Vegetable oil!Seasoning cubes!Salt'
    },
    {
        name: 'Pancakes',
        type: 'Breakfast,!Snack',
        Description:'Soft and fluffy pancakes perfect for breakfast or light snacks.',
        instruction: 'Mix dry ingredients in a bowl.!Add milk and egg, whisk until smooth.!Heat pan and lightly oil it.!Pour batter and cook until bubbles form.!Flip and cook the other side.',
        item_needed: 'Mixing bowl!Whisk!Frying pan!',
        ingriedients: 'Flour!Milk!Egg!Sugar!Baking powder!Butter or oil'
    },
    {
        name: ' Grilled Chicken',
        type: "Dinner",
        Description:'Juicy chicken marinated with spices and grilled to perfection.',
        instruction: 'Season chicken with spices and salt.!Allow to marinate.!Grill or bake until fully cooked.!Turn occasionally to avoid burning.',
        item_needed: 'Bowl!Grill or oven tray!Tongs',
        ingriedients: 'Chicken pieces!Spices!Salt!Vegetable oil'
    },
    {
        name: 'Fried Rice',
        type: 'Lunch, Dinner',
        Description: 'Stir-fried rice mixed with vegetables and seasoning.',
        instruction: 'Heat oil and sauté onion.!Add vegetables and seasoning.!Add cooked rice.!Stir and fry until well mixed.' ,
        item_needed: 'Frying pan or wok!Spoon',
        ingriedients: 'Cooked rice!Mixed vegetables!Onion!Oil!Seasoning!Salt'
    },
    {
        name: 'Akara (Bean Cakes)',
        type: 'Breakfast! Snack',
        Description:'Deep-fried bean fritters commonly eaten in Nigeria.',
        instruction: 'Peel beans and blend with pepper and onion.!Add salt and mix well.!Scoop mixture into hot oil.!Fry until golden brown.',
        item_needed: 'Blender!Bowl!Frying pan',
        ingriedients: 'Beans!Pepper!Onion!Salt!Vegetable oil'
    },
    {
        name: 'Spaghetti Bolognese',
        type: 'Lunch!Dinner',
        Description: 'Pasta served with rich tomato and meat sauce.',
        instruction: 'Boil spaghetti until soft.!Fry onion and meat in oil.!Add blended tomatoes and salt.!Simmer sauce and serve over spaghetti.',
        item_needed: 'Pot!Frying pan!Spoon',
        ingriedients: 'Spaghetti!Ground meat!Tomatoes!Onion!Oil!Salt'
    },
    {
        name: 'Fruit Salad',
        type: 'Breakfast!Snack',
        Description:' A refreshing mix of fresh fruits.',
        instruction:'Wash and cut fruits into small pieces.!Mix all fruits in a bowl.!Serve fresh.', 
        item_needed: 'Knife!Cutting board!Bowl',
        ingriedients: 'Watermelon!Pineapple!Apple!Banana'
    },
    {
        name: 'Yam and Egg Sauce',
        type:' Breakfast! Lunch',
        Description:'Boiled yam served with tomato egg sauce.',
        instruction: 'Boil yam until soft.!Fry onion and tomatoes in oil.!Add beaten eggs and salt.!Stir gently and serve with yam.',
        item_needed: 'Pot!Frying pan!Spoon',
        ingriedients: 'Yam!Eggs!Tomatoes!Onion!Oil!Salt!'
    
    },
    {
        name: 'Chicken Sandwich',
        type:' Breakfast! Lunch! Snack',
        Description:'A filling sandwich with chicken and vegetables.',
        instruction: 'Shred cooked chicken.!Spread mayonnaise on bread.!Add chicken and vegetables.!Close sandwich and serve.',
        item_needed: 'Knife!Pan (optional)!Plate',
        ingriedients: 'Bread!Cooked chicken!Lettuce!Mayonnaise!Salt!'
    },
    {
        name: 'Homemade Pizza',
        type: 'Lunch! Dinner',
        Description:' Simple homemade pizza with toppings.',
        instruction: 'Roll out dough.!Spread tomato sauce.!Add cheese and toppings.!Bake until cheese melts.',
        item_needed: 'Baking tray!Oven!Spoon',
        ingriedients: 'Pizza dough!Tomato sauce!Cheese!Toppings of choice'

     
    },
    {
        name: ' Popcorn',
        type: 'Snack',
        Description:'Light and crunchy popcorn.',
        instruction: 'Heat oil in a pot.!Add kernels and cover.!Shake occasionally.!Remove when popping stops.',
        item_needed: 'Pot with lid',
        ingriedients: 'Popcorn kernels!Oil!Salt or sugar'
    },
    {
        name: 'Vegetable Soup',
        type: ' Dinner',
        Description:' Nutritious soup made with vegetables.',
        instruction: 'Heat palm oil.!Add pepper and seasoning.!Add vegetables and salt.!Cook briefly and serve.',
        item_needed:'Pot!Spoon' ,
        ingriedients: 'Leafy vegetables!Palm oil!Pepper!Seasoning!Salt'
    },
    {
        name: ' Smoothie',
        type: 'Breakfast!Snack',
        Description:'A blended fruit drink.',
        instruction: 'Add all ingredients to blender.!Blend until smooth.!Pour and serve chilled.',
        item_needed: 'Blender!Cup',
        ingriedients: 'Banana!Milk!Strawberry or mango!Honey (optional)'
    }
]
function splitting(text){
    let contain = document.createElement('div');
    text.split('!').forEach(part=>{
        if(part.trim() === ''){
            return;
        }
      p = document.createElement('p');
      p.textContent = part.trim();
      contain.append(p);
    })
    return  contain
}

function read_food(foodie) {
    foodie.forEach(food => {
        
        // CREATING ELEMENTS
        let container =  document.createElement('section');
        let h3 = document.createElement('h3');
        let desc = document.createElement('p');
        let h4 = document.createElement('h4');
        let h4a = document.createElement('h4');
        let h4b = document.createElement('h4');
        let ing = splitting(food.ingriedients);
        let ins = splitting(food.instruction);
        let itm = splitting(food.item_needed);


        //populating
        h3.textContent = food.name;
        h4.textContent = 'Ingriedients'
        h4a.textContent = 'How to prepare'
        h4b.textContent = 'Items Needed'
        desc.textContent = food.Description;

        //appending
        container.append(h3);
        container.append(desc);
        container.append(h4)
        container.append(ing);
        container.append(h4a);
        container.append(ins)
        container.append(h4b);
        container.append(itm)
        dropping.append(container)
    });
    
}



read_food(foodie);