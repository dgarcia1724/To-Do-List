const inputText = document.querySelector(".container input");
const submit = document.querySelector(".submit");
const clearList = document.querySelector(".clearList");
const subText = document.querySelector("#subText");
const tasks = document.querySelector(".tasks");

inputText.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});

submit.addEventListener("click", function () {
  if (inputText.value === "") {
    subText.style.visibility = "visible";
  } else {
    subText.style.visibility = "hidden";
    tasks.innerHTML += `
        <li><span>${inputText.value}</span>

        <button class='deleteX'>X</button>
        <button class='strikeThrough'>Done</button>
        </li>
    `;
    inputText.value = "";
    const deleteX = document.querySelectorAll(".deleteX");
    const strikeThrough = document.querySelectorAll(".strikeThrough");

    // cycle through deleteX buttons
    for (let i = 0; i < deleteX.length; i++) {
      deleteX[i].addEventListener("click", () => {
        deleteX[i].parentElement.remove();
      });
    }

    // cycle through strikeThrough buttons
    for (let i = 0; i < strikeThrough.length; i++) {
      strikeThrough[i].addEventListener("click", function () {
        strikeThrough[i].parentNode
          .querySelector("span")
          .classList.toggle("lineThrough");
      });
    }

    // delete all clearList
    clearList.addEventListener("click", function () {
      for (let i = 0; i < deleteX.length; i++) {
        deleteX[i].parentNode.remove();
      }
    });
  }
});
