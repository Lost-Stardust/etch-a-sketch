const container = document.getElementById('grid-container');
const button = document.createElement('button');
button.textContent = 'generate grid';
container.appendChild(button);

button.addEventListener('click', () => {
   
    for (i=0; i<=16; i++) {
        const div = document.createElement('div');
        div.textContent = 'meow';
        container.appendChild(div);
    }
})
