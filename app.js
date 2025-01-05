let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (input.value != "") {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    li.innerText = input.value;

    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = ""; // Clear the input field after adding the task
    alert("Task added successfully")
    // Attach delete functionality to the new button
    delBtn.addEventListener("click", function () {
      alert("Task Deleted SuccessFully")
      let parent = delBtn.parentElement;
      parent.remove();
    });
  } else {
    alert("Add the task first");
  }
});

ul.addEventListener("click", function (event) {
  if(event.target.nodeName=="BUTTON"){
    // console.log("delete")
    let listItem = event.target.parentElement;
    listItem.remove();
  }else{
    console.log("Don't delete")
  }

});

// Attach delete functionality to the already existing buttons
let delBtns = document.querySelectorAll(".delete");
for (let delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    alert("Task Deleted SuccessFully")
    let parent = this.parentElement;
    // console.log(parent);
    parent.remove();
  });
}

//************************************************************************************************************************* */
// Ensure font compatibility on mobile
document.addEventListener("DOMContentLoaded", function () {
  const styleLink = document.createElement("link");
  styleLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
  styleLink.rel = "stylesheet";
  document.head.appendChild(styleLink);

  document.body.style.fontFamily = "'Poppins', sans-serif";
});

// Ensure keyboard appears for text input on mobile
let inputField = document.querySelector("input[type='text']");
inputField.addEventListener("focus", function () {
  inputField.setAttribute("inputmode", "text"); // Forces mobile keypad to show up
});

// Ensure layout is mobile-compatible
function adjustForMobileView() {
  const container = document.querySelector(".container");
  if (window.innerWidth <= 480) { // For small devices
    container.style.padding = "15px 20px";
    container.style.width = "90%";
    container.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  } else { // Reset for larger screens
    container.style.padding = "20px 30px";
    container.style.width = "100%";
    container.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
  }
}

// Run the adjustment on load and resize
adjustForMobileView();
window.addEventListener("resize", adjustForMobileView);
