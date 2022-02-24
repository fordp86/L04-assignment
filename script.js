/* Global Variables */

// get rectangle area
let rectangle = document.getElementById('rectangle');

// get inrease & decrease button
let descreaseBtn = document.getElementById('decreaseBtn');
let increaseBtn = document.getElementById('increaseBtn');

// find current width
let myWidth = rectangle.style.width;

//function to decrease the width by 10
function decrease(){
    myWidth = parseInt(myWidth) - 10 + 'px';
    rectangle.style.width = myWidth;
}
descreaseBtn.addEventListener('click', decrease);

//function to increase the width by 10
function increase(){
    myWidth = parseInt(myWidth) + 10 + 'px';
    rectangle.style.width = myWidth;
}
increaseBtn.addEventListener('click', increase);