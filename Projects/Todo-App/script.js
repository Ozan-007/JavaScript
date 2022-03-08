// Variable assignments

const input = document.querySelector('#input');
const list = document.querySelector('.list')
const DeleteBtn = document.querySelector('#delete')
const AddBtn = document.querySelector('#addon-wrapping')
const form = document.querySelector('form')

// console.log(AddBtn)
// console.log(DeleteBtn)
// console.log(list)
// console.log(input)


function events() {
    
    form.addEventListener('submit', AddNewElement)
    DeleteBtn.addEventListener('click', RemoveAllElements)
}

const AddNewElement = (e) => {
    
    e.preventDefault();
    console.log(input.value + ` Submitted `  )
    const li =  document.createElement('li')
    li.textContent = input.value
    list.appendChild(li)
    input.value = " "
}


events();

