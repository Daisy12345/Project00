var items = document.getElementsByClassName('item');
function changeColor(index) {
	var item = items[index];

		item.style.backgroundColor = "white";
	
 checkForColors();
}

function checkForColors() {
    var newItem = [];
    for(var i=0; i < items.length; i++){
        var style = window.getComputedStyle(items[i]);
        var backgroundColor = style.getPropertyValue('background-color');
        if(backgroundColor === "rgb(255, 255, 255)"){
           newItem.push(items[i]);
        }
    }    
    calulateTwoBoxes(newItem); 
}


//1. allow only 2 cells get white, when amount of white cells is 2 turn their color back to black.
function calulateTwoBoxes(boxes){
        if(boxes.length > 2){
            boxes[0].style.backgroundColor = "rgb(0, 0, 0)";
            boxes[1].style.backgroundColor = "rgb(0, 0, 0)";
            boxes[2].style.backgroundColor = "rgb(0, 0, 0)";
            checkTwoValues(boxes);
            boxes = [];
        }
}
 
//2. create a new array with values (1, 1, 2, 2);
var valuesArray = [1, 1, 2, 2];

//3. create a new array where you ll store shuffled values, algorithm
// var shuffledValues = [];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

};
shuffleArray(valuesArray);
console.log(valuesArray);

//4. iterate through new shuffled array and inside iterate through all cells
// and through DOM add HTML to them. item.innerHTML = "hello"
function addValuesToBoxes(){
    for(var i = 0; i < items.length; i++){
        for(i = 0; i < valuesArray.length; i++){
           items[i].innerHTML = valuesArray[i];
        }
    }
}
addValuesToBoxes();

//6. onClick change background to transparent - in this case you ll see the word inside
//7. check for innerHTML of 1st element and 2nd and if they are same console.log(Yay, you won)

function checkTwoValues(temp){
    for(var i = 0; i < temp.length; i++){
        if(temp[0].innerText === items[1].innerText){
            console.log("yay, You won!");
        }
    }
}

//8. Timer, check Time(), Date() in js, or you can check on moment.js

//9. Set timer for 30sec and when it run off alert games is finished
//10. player Object with name and score  = 0 ;
//11 step 7, when they match you do plus 10 to the score.
//12 Check how much score and display it, if score is bigger then 500(for example) win, if less lost

// var btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', flip);
// function flip(){
//  var div = document.getElementsByClassName('flip-container')[0];
//  div.classList.toggle("flip");
// }











