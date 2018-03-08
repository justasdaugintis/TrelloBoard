var listClasses=[]
var n=0
var textID=100
var btnID=0
var f=0
var modal = document.querySelector('.modal');
var select = document.querySelector(".changeList"); 
var options = []; 
var unique_array=[]
var headerID=1000



var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}


document.querySelector(".modal").style.display="none";


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
   header.setAttribute('ID', headerID)
   header.innerHTML = inputValue;

   btn.appendChild(t);
   btn.setAttribute('ID', btnID);
   btn.setAttribute('onclick', "newElement()")
 
   textField.appendChild(t);
   textField.setAttribute('ID', textID) 

   document.getElementById(n).appendChild(header)
   document.getElementById(n).appendChild(textField)
   document.getElementById(n).appendChild(btn)
   

   options.push(n)

   var headingz = document.getElementById(textID).textContent

   n++
   textID++
   btnID++
   headerID++
   $("#myInput").val("")

   console.log(options)
  

   var select = document.querySelector(".changeList"); 
   var opt = headingz;
   var el = document.createElement("option");
   el.textContent = opt;
   el.value = n-1;
   select.appendChild(el);
   var columnNumber=document.getElementById("selectNumber").value
   console.log(columnNumber)



 
    $(".toDoBox").animate({width: "250px"
        });


    $(".toDoText").animate({width: "200px"
    }); 
    
    $(".Button").animate({width: "100px" 
    });
     

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
        var list =  document.getElementById(xx).appendChild(li); 

        
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');
    document.querySelector('.modal').style.display="block";
    function removeDuplicates(arr){
        for(let i = 0;i < arr.length; i++){
            if(unique_array.indexOf(arr[i]) == -1){
                unique_array.push(arr[i])
            }
        }
        return unique_array
    }
    removeDuplicates(options)
console.log(unique_array)

  
        
}




    $(".toDoText").val("")
})
     }
    }


function changeLists() {
    var movingItem = document.querySelector(".checked")
   
  
    var columnNumber=document.getElementById("selectNumber").value
    console.log(columnNumber)
   var a= document.getElementById("selectNumber").value
   var b = a.toString()
   movingBox=document.getElementById(b)
    movingBox.appendChild(movingItem)
    movingItem.classList.toggle('checked');
    modal.style.display = "none";
   
}

