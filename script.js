
function grid () {
    let body = document.querySelector("body");
    let container = document.createElement('div');
    container.setAttribute('id', 'container')
    container.style.backgroundColor = 'green';
    container.style.width = '400px';
    container.style.height = '400px';
    body.appendChild(container);

    let number = prompt('Please, enter your number');
    
    if ((number > 100) || (number < 2)) { 
        alert ('Choose a number between 2 and 100');
        prompt('Please, enter your number');
        number = number;
    }
    
makeRowsCols(number, number);
}
grid ();

function makeRowsCols(rows, cols) {
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'div00')
        div.style.backgroundColor = 'white';
        container.appendChild(div);
        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'skyblue';
          });
    };
};

function polina(){
    makeRowsCols(0,0);
    // div.style.backgroundColor = 'white';
    let deleteDiv = document.querySelector('#container');
    deleteDiv.remove();
    grid ();
}


let button = document.querySelector('#button');
button.addEventListener('click', polina);