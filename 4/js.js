var minImg = document.querySelectorAll('.min-img');

document.onclick = function(event){
    if (event.target.className == 'min-img'){
        changeImg(event.target);
    }
}

function changeImg(target){
   document.querySelector('#main').src = target.src;
}