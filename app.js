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
