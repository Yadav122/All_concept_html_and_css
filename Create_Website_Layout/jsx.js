var element;


// element=document.getElementById("menu").onmouseenter=abc;
// function abc() {
//     document.getElementById("menu").style.background="green";
// }


// document.getElementById("header").addEventListener("mouseenter" ,function () {
//     document.getElementById("header").style.background="yellow";
// });

// document.getElementById("header").addEventListener("mouseleave" ,abc);
// document.getElementById("header").removeEventListener("click" ,xyz);
// function abc(){
  // document.getElementById("header").style.border="10px solid red";
//     document.getElementById("header").style.background="yellow";
// }

// function xyz(){
//     document.getElementById("header").removeEventListener("mouseleave" ,abc);
// }


document.getElementById("header").addEventListener("click" ,abc);

function abc(){
   // document.getElementById("header").classList.add("xyz");
    //document.getElementById("header").classList.remove("xyz");
    // var a =document.getElementById("header").length;
    // console.log(a);

   var a= document.getElementById("header").classList.item(0);
    console.log(a);
}



/*!SECTION
  JavaScript classList Methods
  1.add(class)
  2.remove(class)
  3.toggle(class)
  4.contains(class)
  5.item(index)
  6.Lenght
*/






