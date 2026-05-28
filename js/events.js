console.log('This is separate file!');

// Option #1: Add onclick directly on the HTML element
// <button onclick="console.log(7)">Click Me 1</button>

/* Option #2: Add onclick function on HTML element (We Will use this option) */
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option #3: Add onclick function
function makeOlive(){
    document.body.style.backgroundColor = 'olive';
}


// Option #4: Add onclick function
const makeBlueBg = document.getElementById('make-blue');
// console.log(makeBlueBg);
makeBlueBg.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


// Option #5: Add onclick function
const makePurpleBg = document.getElementById('make-purple');
// console.log(makePurpleBg);
makePurpleBg.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


/* Option #6: Add onclick function */
const buttonMakePink = document.getElementById('make-pink');
// console.log(buttonMakePink);
buttonMakePink.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}


/* Option #7: Add onclick function */
const buttonMakeGreen = document.getElementById('make-green');
// console.log(buttonMakeGreen);
buttonMakeGreen.addEventListener('click', function mackGreen(){
    document.body.style.backgroundColor = 'green';
})


/* Option #8 Final: Add addEventListener function */
document.getElementById('make-goldenrod').addEventListener('click', function mackGoldenrod(){
    document.body.style.backgroundColor = 'goldenrod';
})