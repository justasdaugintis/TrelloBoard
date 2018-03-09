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
var inputValue = document.getElementById("myInput").value;

//Creating a new List Box

function newDiv() {
    
    if (document.getElementById("myInput").value === ''){
        return null
    }
    else {
        
        anim1()
        anim2()
        anim3()
        anim4()
        anim5()
        anim6()
        anim7()
        
       
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
   btn.innerHTML="ADD"
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
   //removes input from text box upon press
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


// removes input from text box

   $("#myInput").val("") 

// jquery animations


}
}




// creating a list item
function newElement() {
    change()
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
    document.querySelector('.modal').classList.add("extraClass");
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
  
})
     }
     $(".toDoText").val("") 
    }

//Changing the list of the items
function changeLists() {
    var movingItem = document.querySelector(".checked")
    change2()

    var columnNumber=document.getElementById("selectNumber").value
    console.log(columnNumber)
   var a= document.getElementById("selectNumber").value
   var b = a.toString()
   movingBox=document.getElementById(b)
    movingBox.appendChild(movingItem)
    movingItem.classList.toggle('checked');
    modal.style.display = "none";
   

    
}


//Animation Functions 

function anim1(){
    $(".shape1").animate({"top":"50%", "left": "87%"})
    $(".shape2").delay(250)
}
/*.shape1 {
        position: fixed;
        z-index: 1;
        top: 50%;
 left:87%;
*/ 
function anim2(){
       
     $(".shape2").animate({"top":"45%", "left": "76%"})
        //$(".shape1").delay(200)
}
  /*      .shape2 {
            position: fixed;
            z-index: 1;
            top: 45%;
            left:76%;
*/
function anim3(){
        $(".shape3").animate({"top":"65%", "left": "69%"})
        //$(".shape4").delay(70)
}
   /*             .shape3 {
                position: fixed;
                z-index: 1;
                top: 65%;
               left:69%;
*/
function anim4(){
        $(".shape4").animate({"top":"15%", "left": "90%"})
      //  $(".shape3").delay(300)
}
     /*            .shape4 {
                    position: fixed;
                    z-index: 1;
                    top: 15%;
                    left:90%;
*/
function anim5(){
        $(".shape5").animate({"top":"65%", "left": "55%"})
        //$(".shape6").delay(100)
}
    /*                 .shape5 {
                        position: fixed;
                        z-index: 1;
                        top: 65%;
                        left:55%;
*/
function anim6(){
        $(".shape6").animate({"top":"80%", "left": "45%"})
        //$(".shape5").delay(30)
}
   /*                       .shape6 {
                            position: fixed;
                            z-index: 1;
                            top: 80%;
                            left:45%;
*/
function anim7(){
        $(".shape7").animate({"top":"55%", "left": "70%"})
       // $(".shape7").delay(20)
}
       /*                      .shape7 {
                                position: fixed;
                                z-index: 1;
                                top: 55%;
                                left:70%;
*/


function change(){
 
    $(".shape1").animate({"top":"50%", "left": "87%"})
    $(".shape2").animate({"top":"35%", "left": "70%"})
    $(".shape3").animate({"top":"35%", "left": "70%"})
    $(".shape4").animate({"top":"18%", "left": "90%"})
    $(".shape5").animate({"top":"35%", "left": "85%"})
    $(".shape6").animate({"top":"80%", "left": "45%"})
    $(".shape7").animate({"top":"55%", "left": "30%"})
}

function change2(){
    $(".shape1").animate({"top":"54%", "left": "80%"})
    $(".shape2").animate({"top":"49%", "left": "73%"})
    $(".shape3").animate({"top":"69%", "left": "62%"})
    $(".shape4").animate({"top":"12%", "left": "91%"})
    $(".shape5").animate({"top":"43%", "left": "70%"})
    $(".shape6").animate({"top":"80%", "left": "45%"})
    $(".shape7").animate({"top":"55%", "left": "70%"})
}
