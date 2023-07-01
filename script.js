//getting the html element
const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn")
const displayvalue = document.getElementById("displayvalue");
const reset = document.getElementById("reset");

//for decrement button click
decrementbtn.addEventListener("click",() =>{
const value = Number(displayvalue.innerText)
 if(value > 0){
    displayvalue.innerText = value -1
 }else{
    alert("Negetive value not allowed")
 }

});

//for increment button click
incrementbtn.addEventListener("click",() =>{
   const value = Number(displayvalue.innerText);
   if(value >= 10){
    alert("10+ values are not allowed")
   }else{
    displayvalue.innerText = value -1
   }
});

// For reset button

reset.addEventListener("click", () =>{
    displayvalue.innerText = 0;
})