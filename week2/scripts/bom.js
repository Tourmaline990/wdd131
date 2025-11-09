const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");



button.addEventListener('click',function(){
  if (input.value.trim() !== '') { 
    const li = document.createElement("li");
    const del_button  = document.createElement("button");
   
    li.textContent = input.value;
    del_button.textContent = "❌";

    
    del_button.addEventListener('click',function(){
      list.removeChild(li);
      input.focus();

     });

      li.append(del_button);

      list.append(li);

      input.value = '';
      
      input.focus();

  }
  
});

