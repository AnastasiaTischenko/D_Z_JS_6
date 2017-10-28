var count = 0;
var l = 100;
document.querySelector('#block').onclick = function(event){
    block.style.left = l + 'px';
    count++;
    l += 100;
    if (count == 3){
        l = 100;
        count = 0;
        block.style.left = 5 + 'px';
    }
    console.log(count);
}