let numcounter = Number(window.localStorage.getItem('countervisit-is')) || 0;

numcounter ++;

localStorage.setItem('countervisit-is', numcounter);
