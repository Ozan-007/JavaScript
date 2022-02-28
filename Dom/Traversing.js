// Traversing the Dom

let val;

let list = document.querySelector('.list-group')

val = list;
// val = list.childNodes;

// val = list.children[0];
// val = list.children[0].nextSibling.nextSibling;
val = list.children[0].nextElementSibling;

console.log(val)
