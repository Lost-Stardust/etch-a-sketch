"use strict";

const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const button = document.createElement('button');
button.textContent = 'Change grid size';
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
    overlay.classList.remove('active');
    modal.classList.remove('active');
});


for (let i=0; i<256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item')
    container.appendChild(div);
}

// gridItem is an array type html collection
const gridItem = document.getElementsByClassName('grid-item');

for (let i=0; i<gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', () => {
        gridItem[i].style.backgroundColor = 'black';
    })
}
