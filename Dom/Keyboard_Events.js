//Keyboard Events

const input = document.querySelector('.addTask');


const eventHandler = (e) => {
    e.preventDefault();
    console.log(`Event type : ${e.type}`)
    console.log(`Event target value : ${e.target.value}`)
    console.log(`Event keyCode : ${e.keyCode}`)
}

// input.addEventListener('keypress', eventHandler)
// input.addEventListener('keydown', eventHandler)
// input.addEventListener('keyup', eventHandler)
// input.addEventListener('focus', eventHandler)
// input.addEventListener('cut', eventHandler)
// input.addEventListener('paste', eventHandler)


// ************************************************

const form = document.querySelector('.form');
console.log(form)
form.addEventListener('submit', eventHandler)



