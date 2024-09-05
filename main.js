let button = document.querySelector('button');
let section = document.querySelector('.name');
button.addEventListener('click', function(){
    section.classList.toggle('change-color');
});