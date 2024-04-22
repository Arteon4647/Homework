const selectButtonsWrapper = document.getElementById("select-buttons-wrapper");

const selectButtonsNumbers = [1, 2, 3];
let selectedButtons = [];

const selectButtons = selectButtonsNumbers.map((number) => {
  const selectBtn = document.createElement("button");
  selectBtn.textContent = number;

  selectBtn.onclick = (event) => {
    if (event.ctrlKey && !selectButtons.includes(number)) {
      selectedButtons.push(number);
      event.target.classList.add("selected");

      console.log(event.target);

      console.log(selectedButtons, "selectedButtons");
    } 

if (event.shiftKey && selectedButtons.includes(number)) {
  selectedButtons = selectedButtons.filter((n) => n !== number);
  event.target.classList.remove("selected");
}

    console.log(number);
  };

  selectButtonsWrapper.appendChild(selectBtn);
});