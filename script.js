// Target the buttons and add an event listner to each using a for each loop
// call a function on click

// adjust the 'grid-container' class to select only certain images based on colour

const targets = document.querySelectorAll(".button");
for (i = 0; i < targets.length; i++) {
  targets[i].addEventListener("click", func);
}

function func(event) {
  event.preventDefault();

  // Get the chosen category button name
  const chosenCategory = this.textContent.toLowerCase();
  //console.log(chosenCategory);
  // get the array index matching the category button
  let arrayButtonContent = grid.filter(
    (item) => item.colour === chosenCategory
  );

  // get the numbers in word form form array numbersList
  const numbersAsWords = arrayButtonContent[0].items.map(
    (index) => numbersList[index - 1]
  );
  console.log(numbersAsWords);

  //create new HTML list
  const main = document.querySelector(".grid-container");
  main.innerHTML = "";
  numbersAsWords.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add(item);
    main.appendChild(div);
    console.log(div);
  });
}
