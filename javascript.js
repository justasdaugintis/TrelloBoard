var listClasses=[]
var n=0
var textID=0
var btnID=0



function newDiv() {
    var box = document.createElement("div");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    box.setAttribute('ID', n);
    box.setAttribute('class', "toDoBox")
    box.setAttribute('border', '3px')
    
    box.appendChild(t);
    document.getElementById("bigDiv").appendChild(box);
    listClasses.push(inputValue)
  
   var btn = document.createElement("button");
   btn.setAttribute("border", "3px")
   btn.innerHTML="Add"
   btn.setAttribute('class', "toDoButton")
   btn.setAttribute('class', "button")
   var textField = document.createElement("INPUT");
   textField.setAttribute("type", "text");
   textField.setAttribute("value", "Add a task")
   textField.setAttribute('class', "toDoText")

   btn.appendChild(t);
   btn.setAttribute('ID', btnID);
   btn.setAttribute('onclick', "newElement()")
   document.getElementById(n).appendChild(btn)
   textField.appendChild(t);
   textField.setAttribute('ID', textID) 
   document.getElementById(n).appendChild(textField)

   n++
   textID++
   btnID++
   console.log(n)
}





function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById(textID).value;
    var t = document.createTextNode(textID);
    li.appendChild(t);
    li.setAttribute('class', 'listItem') 

    if (inputValue === '') {
      return null
    }
     else {
      document.getElementById("0").appendChild(li);  
    }


    document.querySelector('.listItem').addEventListener('click', function(){

document.querySelector('.listItem').style.display = "none"
    })
}