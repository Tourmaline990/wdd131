const today = new Date;

year = document.querySelector('.year');
year.textContent = `${today.getFullYear()}`;


home_foods = [
    {
        images: 'images/dim.webp'
    },
    {
        images: "images/pizza.webp"
    },
    {
        images: "images/yamarita.webp"
    }
]
const pi = document.querySelector('.pics')
function toLoop(an_array) {
    //looping
    an_array.forEach(name => {
        
       //creating elements
    let contain = document.createElement('div');
    let image = document.createElement('img');
    // populating
    image.src = name.images;
    image.alt = 'An image displaying food on the  homepage' ;
    image.loading = "lazy"

    // appending
    contain.append(image);
    pi.append(contain);

    });
    
}
toLoop(home_foods)