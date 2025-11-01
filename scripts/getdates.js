const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = ` <span class="design">${today.getFullYear()} </span>`;
document.getElementById("modified").innerHTML = document.lastModified;