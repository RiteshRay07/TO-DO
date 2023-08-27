const inputbox = document.getElementById("input-box");

const listcontainer = document.getElementById("list-container");

function AddTask() {
  if (inputbox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    // listcontainer.appendChild(li);
    listcontainer.prepend(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = ""; // clear input box after add data
  saveData(); //call save data from local
}

//  delete Data
// ------------
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// ------------
// Save data
function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

// ------------------
//  fetch local data
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();
