// Create element


const li = document.createElement('li');

console.log(li)

// add class

li.className='element'

// setAttribute

li.setAttribute('title','new-element')
li.setAttribute('data-id','5')


// createTextNode
const text = document.createTextNode("Hello World!")

li.appendChild(text)
// const a = createElement('a');
// a.setAttribute('href','#');



// append a to li
// li.appendChild(a);

// append li to ul
document.querySelector('.list-group').appendChild(li)
console.log(li)







