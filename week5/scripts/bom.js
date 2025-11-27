const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");





button.addEventListener('click',function(){
  if (input.value.trim() !==''){
   displayList(input.value);
   chaptersArray.push(input.value);
   setChapterList();
   input.value = '';
   input.focus;
  }
})
 
const displayList = (item)=>{
  const li = document.createElement("li");
    const del_button  = document.createElement("button");
   
    li.textContent = item;
    del_button.textContent = "❌";
    del_button.classList.add('delete');

    li.append(del_button);

    list.append(li);

    
    del_button.addEventListener('click',function(){
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
}
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function setChapterList(){
  localStorage.setItem('bomlist',JSON.stringify(chaptersArray));
}
function getChapterList(){
  return JSON.parse(localStorage.getItem('bomlist'));
}
function deleteChapter(chapter){
  chapter = chapter.slice(0,chapter.length-1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}