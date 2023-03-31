const inputText = document.querySelector(".container input");
const submitBtn = document.querySelector(".submitBtn");
const deleteAllBtn = document.querySelector(".deleteAllBtn");

inputText.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitBtn.click();
  }
});

submitBtn.addEventListener("click", function () {
  if (inputText.value === "") {
    document.querySelector(".redText").style.visibility = "visible";
  } else {
    document.querySelector(".redText").style.visibility = "hidden";
    // Add tasks
    const task = document.querySelector(".task");
    task.innerHTML += `
    <li>
      <span>${inputText.value}</span>
      <button class='crossOff'>Cross Off</button>
      <button class='deleteX'>X</button>
    </li>
    `;

    inputText.value = "";

    const crossOff = document.querySelectorAll(".crossOff");
    const deleteX = document.querySelectorAll(".deleteX");

    for (let i = 0; i < crossOff.length; i++) {
      crossOff[i].addEventListener("click", function () {
        crossOff[i].parentNode
          .querySelector("span")
          .classList.toggle("crossOffX");
      });
    }

    for (let i = 0; i < deleteX.length; i++) {
      deleteX[i].addEventListener("click", function () {
        deleteX[i].parentNode.remove();
      });
    }

    deleteAllBtn.addEventListener("click", function () {
      for (let i = 0; i < deleteX.length; i++) {
        deleteX[i].parentNode.remove();
      }
    });
  }
});
