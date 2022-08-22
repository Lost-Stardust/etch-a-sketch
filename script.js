"use strict";

const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const button = document.createElement('button');
button.textContent = 'Generate grid';
body.insertBefore(button, container);


button.addEventListener('click', () => {
    overlay.classList.add('active');
    modal.classList.add('active');
})


let closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
    let input = document.querySelector('input').value;
    console.log(input);
    let num = parseInt(input);
    console.log(typeof num);
    let num2 = num*num;
    console.log(num2)

    let width = 550; 
    let cell = width/input
    console.log(cell)
    

    let children = document.querySelectorAll('.grid-item');
    console.log(children)
    children.forEach(child => container.removeChild(child))



    const div = document.createElement('div');
    for (let i=0; i<num2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item')
        container.appendChild(div);

        div.style.height = `${cell}px`;
        div.style.width = `${cell}px`; 
    }

    for (let i=0; i<gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', () => {
            gridItem[i].style.backgroundColor = 'black';
        })
    }

    console.log(container)
    overlay.classList.remove('active');
    modal.classList.remove('active');
    button.textContent = 'Change size'
});



// gridItem is an array type html collection
const gridItem = document.getElementsByClassName('grid-item');

for (let i=0; i<gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', () => {
        gridItem[i].style.backgroundColor = 'black';
    })
}
