
function grid () {
    let body = document.querySelector("#board");
    let container = document.createElement('div');
    container.setAttribute('id', 'container')
    container.style.width = '250px';
    container.style.height = '250px';
    body.appendChild(container);

    let number = prompt('Please, enter your number between 2 and 100');
    
    if ((number > 100) || (number < 2)) { 
        alert ('Choose a number between 2 and 100');
       do { 
           number = prompt('Please, enter your number between 2 and 100')
          
       }while ((number > 100) || (number < 2));
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

        //  ======== COLORFULL ========
        // var color = [, "#3C9EE7", "#E7993C", 
        // "#E73C99", "#3CE746", "#E7993C"];
        // div.addEventListener('mouseover', function (e) {
        //     e.target.style.background = color[Math.floor(Math.random() * color.length)];
        // });

        //  ======== White ---> Black ========
        // div.addEventListener('mouseover', function (e) {
        //     let x = 0.1;
        //     let color = `rgba(0, 0, 0, ${x})`;
        //     x += 0.1;
        //     e.target.style.background = color;
        // });    
        
        div.addEventListener('mouseover', function (e) {
            let color = document.getElementById('favcolor');
            e.target.style.background = color.value;
        });     
    };
};

function deleteGridBtn(){
    makeRowsCols(0,0);
    let deleteDiv = document.querySelector('#container');
    deleteDiv.remove();
    grid ();
}

let button = document.querySelector('#button');
button.addEventListener('click', deleteGridBtn);