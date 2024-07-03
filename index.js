const board = document.getElementById("board");
const squares = document.getElementsByClassName("col");
let is_white = true;

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
  

for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.classList.add('border');
    element.classList.add('border-black');
    if (isEven((element.parentElement).id)) {
        if (!is_white) {
            element.classList.add('bg-dark');
        }
    } 
    else
    {
        if (is_white) {
            element.classList.add('bg-dark');
        }
    }
    is_white = !is_white;
}
