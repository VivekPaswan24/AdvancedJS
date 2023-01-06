const amt = document.getElementById('amount');
const des = document.getElementById('des')
const cat = document.getElementById('cat')
const list = document.getElementById('expense-list')
const addEXpes = document.getElementById('btn')
const form = document.getElementById('myform')

form.addEventListener('submit', addDetailsToLocalStorage);

list.addEventListener('click', removeOrEditItem)

document.addEventListener('DOMContentLoaded',showFromLocal)

function addDetailsToLocalStorage(e) {
    e.preventDefault()
    let obj = {
        amount: amt.value,
        description: des.value,
        category: cat.value
    }
    localStorage.setItem(des.value, JSON.stringify(obj))
    showUserDetailsOnScreen(obj.amount, obj.description, obj.category)
}
function showUserDetailsOnScreen(a, d, c) {
    let li = document.createElement('li')
    li.setAttribute('id', d)
    li.className = 'list list-group-item list-group-item-info'
    let editbtn = document.createElement('button')
    editbtn.className = 'edit btn btn-success'
    editbtn.appendChild(document.createTextNode('EDIT'))
    let delbtn = document.createElement('button')
    delbtn.className = 'delete btn btn-danger'
    delbtn.appendChild(document.createTextNode('DELETE'))
    let userDetails = document.createTextNode(`${a} - ${d} - ${c}`);
    li.appendChild(userDetails)
    li.appendChild(editbtn)
    li.appendChild(delbtn)
    list.appendChild(li)
    amt.value = ''
    des.value = ''
    cat.value = ''
}

function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement
        localStorage.removeItem(li.id)
        list.removeChild(li)
    }
    if (e.target.classList.contains('edit')) {
        let li = e.target.parentElement
        des.value = li.id
        let str = localStorage.getItem(li.id)
        let objc = JSON.parse(str)
        amt.value = objc.amount
        cat.value = objc.category
        list.removeChild(li)

    }
}

function showFromLocal(){
    for (let i = 0; i < localStorage.length; i++) {
        let keyname = localStorage.key(i)
        let stringDetails = localStorage.getItem(keyname)
        let objectDetails = JSON.parse(stringDetails)
        showUserDetailsOnScreen(objectDetails.amount, objectDetails.description,objectDetails.category)
}
}