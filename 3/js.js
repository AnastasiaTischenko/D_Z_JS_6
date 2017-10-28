function f1(event){
    var b = document.getElementById('out');
    for (var i = 0; i < 100; i++){
        b.innerHTML += '<div class="block"></div>';
    }
    var rad = document.querySelectorAll('.block');
    for (let i = 0; i < 100; i++){
        rad[i].onmousemove = function(event){
            console.log(event.target.className)
            if (event.target.className == 'block'){
                changeRad(event.target);
            }
        }
    }
    
    function changeRad(e){
        e.style.borderRadius = '50%';
        e.style.backgroundColor = 'yellow';
    }

};



