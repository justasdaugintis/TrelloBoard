
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
      alert("You must write something!");
    }
     else {
      document.getElementById("tasks").appendChild(li);  
    }
}


function newDiv() {
    var li = document.createElement("div");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("bigDiv").appendChild(li);
}


