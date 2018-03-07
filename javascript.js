var listClasses=[]
var n=0
var textID=100
var btnID=0
var f=0



function newDiv() {

    
    
    var box = document.createElement("div");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    box.setAttribute('id', n);//ii
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
   textField.setAttribute("placeholder", "Add a task")
   textField.setAttribute('class', "toDoText")


   var header = document.createElement("h1");
   header.setAttribute('class', 'header')
   header.innerHTML = inputValue;

   btn.appendChild(t);
   btn.setAttribute('ID', btnID);
   btn.setAttribute('onclick', "newElement()")
 
   textField.appendChild(t);
   textField.setAttribute('ID', textID) 

   document.getElementById(n).appendChild(header)
   document.getElementById(n).appendChild(textField)
   document.getElementById(n).appendChild(btn)
   
   
   n++
   textID++
   btnID++
   $("#myInput").val("")

 
   

     
}



function newElement() {
    var xx = event.target.id
    var xy = parseInt(xx)
    var xxx = xy+100
    var xxxx = xxx.toString();

    var li = document.createElement("li");
    var inputValue = document.getElementById(xxxx).value;
    var tt = document.createTextNode(inputValue);
    li.appendChild(tt);
    li.setAttribute('class', 'listItem');

    if (inputValue === '') {
      return null
    }
     else {
      document.getElementById(xx).appendChild(li);  
    }

    $(".toDoText").val("")
}


