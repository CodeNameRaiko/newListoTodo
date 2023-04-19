var Data = document.getElementById('taskInput');
var btn = document.getElementById('btn');

btn.addEventListener('click', newTask);

function newTask() {
  if(Data.value == "") {
    console.log("Empty");
  } else {
    //creating needed elements
    let newDivEl = document.createElement('div');
    let newButtonCompl = document.createElement('BUTTON');
    let newButtonDel = document.createElement('BUTTON');
    let newText = document.createElement('SPAN');
    let List = document.getElementById('table');
    let alignDiv = document.getElementById('alignDiv');

    //creating add remove button
    newButtonCompl.innerHTML = "Completed";
    newButtonDel.innerHTML = "Delete";

    //Functions add & remove buttons
    newButtonCompl.addEventListener('click', completed);
    function completed() {
      newText.classList.add('Completed'); 
    }
    newButtonDel.addEventListener('click', remove);
    function remove() {
      newDivEl.remove();
    }
    //nesting phase 
    List.append(alignDiv);
    alignDiv.append(newDivEl);
    newDivEl.append(newButtonCompl);
    newDivEl.append(newButtonDel);
    newText.append(Data.value);
    newDivEl.append(newText);
       }
    }


 

 
