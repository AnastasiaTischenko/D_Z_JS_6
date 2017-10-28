document.querySelector('.circle').onmousemove = function(e){
    var p_x = document.querySelector('.x');
    var p_y = document.querySelector('.y');
    p_x.innerHTML = e.offsetX + 'px';
    p_y.innerHTML = e.offsetY + 'px';
}
document.querySelector('.circle').onmouseleave = function(){
    var p_x = document.querySelector('.x');
    var p_y = document.querySelector('.y');
    p_x.innerHTML = '';
    p_y.innerHTML = '';
}