const button = document.getElementById('toggleInfo');
const details = document.getElementById('recipeDetails');

button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  details.hidden = isExpanded; // toggle visibility
   details.classList.toggle('show', !isExpanded)
   button.textContent = !isExpanded ? 'Show Less' : 'Show More';

});
