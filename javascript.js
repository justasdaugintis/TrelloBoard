
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.setAttribute('class', 'listItem') 
    li.setAttribute('id', '04') 

    if (inputValue === '') {
      return null
    }
     else {
      document.getElementById("tasks").appendChild(li);  
    }


    document.querySelector('.listItem').addEventListener('click', function(){

document.querySelector('.listItem').style.display = "none"
    })
}


function newDiv() {
    var li = document.createElement("div");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.setAttribute('class', 'listItem') 

    li.appendChild(t);
    document.getElementById("bigDiv").appendChild(li);
}


