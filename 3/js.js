function f1(event){
    var b = document.getElementById('out');
    for (var i = 0; i < 100; i++){
        b.innerHTML += '<div class="block"></div>';
    }
    var rad = document.querySelectorAll('.block');
    for (var i = 0; i < 100; i++){
        rad[i].onmousemove = function(event){
            if (event.target.className == 'block'){
                changeRad(event.target);
            }
        }
        rad[i].onmouseleave = function(event){
                changeRad(event.target);
            
        }
    }
    
    function changeRad(e){
        e.classList.toggle('yellowRound');
    }

};



