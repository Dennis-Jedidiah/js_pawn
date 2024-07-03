const board = document.getElementById("board");
const squares = document.getElementsByClassName("col");
let coordinates_list = [];
let coordinates = {};
let is_white = true;
let currentPawnLocation = 'A8';
let form = document.getElementById("myForm");


function handleForm(event) { 
    event.preventDefault();
    let coords = document.getElementById('coords').value.toUpperCase();
    movePawn(coords)
 } 
form.addEventListener('submit', handleForm);

function getid(elem) {
    return parseInt(elem.id);
  }

function isEven(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

function movePawn(params) {
    if (params == currentPawnLocation) {
        return;
    } else
    {
        try {
            coordinates[params].innerHTML = 'P';
        coordinates[currentPawnLocation].innerHTML = '';
        currentPawnLocation = params
        } catch (error) {
            console.log(error);
            alert("Error! Invalid input detected.")
        }
        return;
    }
}
  

for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.classList.add('border');
    element.classList.add('border-black');
    element.classList.add('d-flex');
    element.classList.add('justify-content-center');
    element.classList.add('align-items-center');

    coordinates_list[i] = (element.id + element.parentElement.id);
    if (isEven((element.parentElement).id)) {
        if (!is_white) {
            element.classList.add('bg-dark');
            element.classList.add('text-white');
        }
    } 
    else
    {
        if (is_white) {
            element.classList.add('bg-dark');
            element.classList.add('text-white');
        }
    }
    is_white = !is_white;
}

for (let i = 0; i < coordinates_list.length; i++) {
    const element = coordinates_list[i];
    coordinates[coordinates_list[i]] = squares[i];
}

function placePawn() {
    coordinates[currentPawnLocation].innerHTML = 'P';
}