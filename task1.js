let myDiv = document.querySelector(".main-div");
let count = 10

function getRandomColor (){
  let  letters = '0123456789ABCDEF';
  let color = '#';

 for(let i=0 ; i<6 ; i++){
    color += letters[Math.floor(Math.random()*16)]
  }
  return color ;
}

let counter = setInterval(function(){
 myDiv.style.width = count++ +'px'
 myDiv.style.height = count++ +'px'
 myDiv.style.backgroundColor = getRandomColor()

}, 1000)

