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
}

const AddNewElement = (e) => {
    
    e.preventDefault();
    console.log(input.value + ` Submitted `  )
    const li =  document.createElement('li')
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
    
    // create remove sign 

    const a = document.createElement('a')
    a.className='delete-item float right';
    a.setAttribute('href',"#");
    a.innerHTML = '<button>X</button>'
    console.log(a)
    
    // Adding to do element to the list
    
    li.appendChild(document.createTextNode(input.value))
    list.appendChild(li)
    li.appendChild(a)
    input.value = ""

    // removing elements from the list
    
    const removeElement = (e) => {
        console.log(li)
        list.removeChild(li)
        
    }
    a.addEventListener('click',removeElement)

}


events();

