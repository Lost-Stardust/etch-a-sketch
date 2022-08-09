const body = document.querySelector('body')
const container = document.getElementById('grid-container');
const button = document.createElement('button');
button.textContent = 'generate 16x16 grid';
body.insertBefore(button, container);

button.addEventListener('click', () => {
   
    for (i=0; i<256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item')
        container.appendChild(div);
    }
})
