let button = document.getElementsByClassName("item-header");
let arrow = document.getElementsByClassName("la-caret-down");

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    this.lastElementChild.classList.toggle("la-caret-up");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//      Task-2 

// Array.flatMap method
// const arr1 = [1, 2, [3], [4, 5], 6, []];

// const flattened = arr1.flatMap((num) => num);

// console.log(flattened);

//Array.flat method
// const numbers = [1, 2, [3, 4, 5, [6, 7]]];
// const flatNumbers = numbers.flat(2);

// console.log(flatNumbers);