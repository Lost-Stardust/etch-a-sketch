"use strict";

const body = document.querySelector('body')
const container = document.getElementById('grid-container');
const button = document.createElement('button');
button.textContent = 'Change grid size';
body.insertBefore(button, container);

// button.addEventListener('click', () => {
   
//     for (i=0; i<256; i++) {
//         const div = document.createElement('div');
//         div.classList.add('grid-item')
//         container.appendChild(div);
//     }
// })
for (let i=0; i<256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item')
    container.appendChild(div);
}

// gridItem is an array type html collection
const gridItem = document.getElementsByClassName('grid-item');
console.log(gridItem);

for (let i=0; i<gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', () => {
        gridItem[i].style.backgroundColor = 'red';
    })
}
